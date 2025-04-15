"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import {
  Check,
  Twitter,
  ArrowRight,
  MessagesSquare,
  Wallet,
  Sparkles,
  Lock,
  BarChart,
  Bolt,
  Bookmark,
} from "lucide-react";

export default function WaitlistPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is not authenticated, redirect to login
    if (!loading && !user) {
      router.push("/login");
    }

    // If user is not verified, redirect to verification page
    if (user && !user.email_verified) {
      router.push("/verify-email");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="block">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
            <Check className="h-8 w-8 text-purple-600" strokeWidth={3} />
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            You're on the waitlist!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thanks for joining, {user.name}! We're excited to have you as part
            of our Web3 freelancing revolution. We'll notify you once our beta
            version is ready.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Coming soon to Hustle
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Wallet className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">Web3 Payments</h3>
                <p className="text-gray-600 text-sm">
                  Get paid in crypto or fiat with our secure escrow system
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MessagesSquare className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">Smart Contracts</h3>
                <p className="text-gray-600 text-sm">
                  Automate agreements with blockchain-verified contracts
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Sparkles className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">
                  AI-Powered Matching
                </h3>
                <p className="text-gray-600 text-sm">
                  Find the perfect talent for your Web3 projects
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Lock className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">Verified Profiles</h3>
                <p className="text-gray-600 text-sm">
                  Connect with trusted, verified blockchain professionals
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BarChart className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">Work Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Track your project progress and performance
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Bolt className="flex-shrink-0 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Lightning Fast Payouts
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive payments instantly with low transaction fees
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Stay connected
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://twitter.com/hustleplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-purple-600 hover:text-purple-700"
            >
              <Twitter className="h-5 w-5" />
              Follow us on Twitter
            </a>

            <a
              href="https://discord.gg/hustle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-purple-600 hover:text-purple-700"
            >
              <MessagesSquare className="h-5 w-5" />
              Join our Discord community
            </a>

            <a
              href="/blog"
              className="flex items-center gap-2 font-medium text-purple-600 hover:text-purple-700"
            >
              <Bookmark className="h-5 w-5" />
              Read our blog
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
          >
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
