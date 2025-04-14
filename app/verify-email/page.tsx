"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

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
            Check your email
          </h1>
          <p className="text-gray-600">
            We've sent a verification link to{" "}
            <span className="font-medium">{email || "your email"}</span>
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Click the link in the email to verify your account and complete your
            registration.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> If you don't see the email in your inbox,
            check your spam folder.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Return to{" "}
            <Link
              href="/login"
              className="text-purple-600 font-medium hover:text-purple-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
