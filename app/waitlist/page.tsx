"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WaitlistPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem("betaRegistered", "true");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/assets/logo.svg"
              alt="Hustle Logo"
              className="h-6 w-auto"
            />
          </a>
          <div className="ml-6 flex space-x-4">
            <a
              href="/demo"
              className="text-gray-600 hover:text-purple-600 text-sm font-medium"
            >
              Demo
            </a>
            <a
              href="/careers"
              className="text-gray-600 hover:text-purple-600 text-sm font-medium"
            >
              Careers
            </a>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => {
                document.documentElement.classList.toggle("dark");
              }}
              className="flex items-center space-x-2 px-4 py-1 rounded-full border text-sm"
            >
              <span>Light</span>
              <span>Dark</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 py-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-5xl font-semibold tracking-tighter leading-tight text-gray-900 mb-4">
            Decentralized all-in-one
            <br />
            freelancing platform.
          </h1>

          <div className="space-y-8 mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium tracking-tight text-gray-900">
                  Find the perfect crypto job instantly.
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Powerful AI matching connects you with web3 projects that
                  align with your skills, rate, and availability. Get matched
                  with only the most relevant opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Secure crypto payments and escrow.
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Get paid in your preferred cryptocurrency with built-in escrow
                  protection, milestone payments, and transparent fee structure.
                  No more payment disputes or delays.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 mt-1">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Safe and secure environment.
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Our platform provides verified profiles, secure messaging, and
                  transparent reviews. Work with confidence in a community built
                  for web3 professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Join our journey and get early access
            </h2>
            <p className="mt-4 text-gray-600">
              Join our exclusive waitlist today to spark connection and get
              notified when we launch 🚀
            </p>
          </div>

          {/* Avatar grid */}
          <div className="flex flex-wrap mb-8">
            {["purple", "blue", "green", "yellow", "orange", "red", "pink"].map(
              (color, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-${color}-500 border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white font-bold`}
                >
                  {i === 3 ? "R" : ""}
                </div>
              )
            )}
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <svg
                className="h-12 w-12 text-green-500 mx-auto mb-4"
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
              <h3 className="text-lg font-medium text-green-800">
                You're on the list!
              </h3>
              <p className="mt-2 text-green-700">
                We'll notify you when Hustle is ready for early access.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Twitter handle (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
              >
                Continue
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By clicking "continue" you agree to our{" "}
                <a href="/privacy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-purple-600 hover:underline">
                  Terms of Use
                </a>
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Decorative element */}
      <div className="fixed bottom-10 right-10 h-12 w-12 opacity-50">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0 L100 50 L50 100 L0 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M50 15 L85 50 L50 85 L15 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}
