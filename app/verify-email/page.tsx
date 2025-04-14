"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function VerifyEmail() {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function verifyToken() {
      if (!token) return;

      try {
        setVerifying(true);

        // Find user by verification token
        const { data: profiles, error: findError } = await supabase
          .from("profiles")
          .select(
            "id, email, name, verification_token, verification_token_expires_at"
          )
          .eq("verification_token", token)
          .single();

        if (findError || !profiles) {
          throw new Error("Invalid or expired verification token");
        }

        // Check if token is expired
        const tokenExpiry = new Date(profiles.verification_token_expires_at);
        if (tokenExpiry < new Date()) {
          throw new Error("Verification token has expired");
        }

        // Mark email as verified
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            email_verified: true,
            verification_token: null,
            verification_token_expires_at: null,
          })
          .eq("id", profiles.id);

        if (updateError) {
          throw new Error("Failed to verify email");
        }

        // Send welcome email via API endpoint
        await fetch("/api/auth/send-welcome", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: profiles.email,
            name: profiles.name,
          }),
        });

        setEmail(profiles.email);
        setVerified(true);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setVerifying(false);
      }
    }

    verifyToken();
  }, [token, supabase]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {verifying ? (
            <div className="text-center">
              <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
                Verifying your email...
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              </div>
            </div>
          ) : verified ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
                Email verified! 🎉
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Your email {email} has been successfully verified.
              </p>
              <div className="mt-6">
                <Link
                  href="/login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
                Verification failed
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {error || "Invalid or expired verification link."}
              </p>
              <div className="mt-6">
                <Link
                  href="/signup"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Go back to Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
