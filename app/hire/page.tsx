"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowToHire() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-purple-600 font-medium text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              How to Hire Top Web3 Talent on Hustle
            </motion.h1>
            <motion.p
              className="text-xl text-purple-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your guide to finding, hiring, and collaborating with the best
              blockchain professionals for your projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="#get-started"
                className="bg-white text-purple-700 px-6 py-3 rounded-full hover:bg-purple-50 font-medium inline-flex items-center"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              Three simple steps to hire on Hustle
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process helps you find the right talent quickly
              and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-2xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">01</span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-purple-600 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                Post your project
              </h3>
              <p className="text-gray-600 mb-6">
                Describe your project details, requirements, and the specific
                Web3 skills you need. Set your budget and timeline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Detailed project briefs attract better candidates
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Specify blockchain expertise required
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-2xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">02</span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="text-purple-600 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                Review candidates
              </h3>
              <p className="text-gray-600 mb-6">
                Browse proposals from pre-vetted Web3 experts. Review
                portfolios, ratings, and previous blockchain work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    All freelancers verified for blockchain skills
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Interview top candidates via video chat
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-2xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">03</span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <CreditCard className="text-purple-600 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                Collaborate & pay securely
              </h3>
              <p className="text-gray-600 mb-6">
                Work together through our platform with integrated messaging,
                file sharing, and secure milestone payments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Pay with crypto or traditional methods
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Release funds only when satisfied
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              Why hire on Hustle?
            </h2>
            <p className="text-xl text-gray-600">
              The premier marketplace for blockchain and Web3 talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
                    Pre-verified Web3 expertise
                  </h3>
                  <p className="text-gray-600">
                    All freelancers undergo technical assessments to verify
                    their blockchain and Web3 skills before joining our
                    platform.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
                    Secure payment protection
                  </h3>
                  <p className="text-gray-600">
                    Our escrow system holds funds until you approve completed
                    work, protecting both clients and freelancers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
                    Fast matching
                  </h3>
                  <p className="text-gray-600">
                    Our AI-powered matching system helps you find the right
                    talent quickly, often within 24 hours of posting a project.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
                    Time-saving platform tools
                  </h3>
                  <p className="text-gray-600">
                    Manage your projects with integrated tools for
                    communication, file sharing, and milestone tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24" id="get-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-purple-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to find your perfect Web3 match?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses hiring top blockchain talent on
                Hustle
              </p>
              <Link
                href="#"
                className="bg-white text-purple-700 px-8 py-4 rounded-full hover:bg-purple-50 font-medium text-lg inline-block"
              >
                Post a Job Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} Hustle Inc. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/terms" className="text-gray-600 hover:text-purple-600">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-purple-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
