"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { user, verifyOtp, resendOtp, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is verified, redirect to waitlist page
    if (user?.emailVerified) {
      router.push("/waitlist");
    }
  }, [user, router]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter all 6 digits of the verification code");
      return;
    }

    try {
      if (!user?.email) {
        throw new Error("User email not found. Please log in again.");
      }
      await verifyOtp(user.email, otpValue);
      setSuccess(true);
      setTimeout(() => {
        router.push("/waitlist");
      }, 2000);
    } catch (error: any) {
      setError(error.message || "Failed to verify code");
    }
  };

  const handleResendOtp = async () => {
    setError("");
    if (!user?.email) {
      setError("User email not found. Please log in again.");
      return;
    }

    try {
      await resendOtp(user.email);
      setResendDisabled(true);
      setCountdown(60);
    } catch (error: any) {
      setError(error.message || "Failed to resend verification code");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verify your email
          </h1>
          <p className="text-gray-600">
            We've sent a 6-digit verification code to{" "}
            <span className="font-medium">{user?.email}</span>
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-md text-sm">
            Email verified successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                autoFocus={index === 0}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || otp.join("").length !== 6}
            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium disabled:bg-purple-400 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Didn't receive the code?{" "}
            {resendDisabled ? (
              <span className="text-gray-400">Resend in {countdown}s</span>
            ) : (
              <button
                onClick={handleResendOtp}
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Resend
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
