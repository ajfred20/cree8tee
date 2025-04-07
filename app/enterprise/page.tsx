"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto invert"
            />
          </Link>
          <Link
            href="/"
            className="text-white/80 hover:text-white font-medium text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise Hub Coming Soon
          </h1>

          <p className="text-xl text-white/80 mb-8">
            We're building something special for enterprise clients. Our team is
            working hard to bring you powerful tools for managing your Web3
            workforce.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/70 mb-6">
            <Clock className="w-5 h-5" />
            <p className="text-sm">Expected launch: Q3 2023</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-6 py-3 rounded-full hover:bg-white/90 font-medium"
            >
              Contact Sales
            </Link>
            <Link
              href="/"
              className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 font-medium"
            >
              Back to Homepage
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-semibold mb-6">What to expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-medium text-lg mb-2">Talent Management</h3>
              <p className="text-white/70 text-sm">
                Streamlined tools to manage your Web3 workforce at scale
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-medium text-lg mb-2">Smart Contracts</h3>
              <p className="text-white/70 text-sm">
                Automated payments and blockchain-based agreements
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-medium text-lg mb-2">Analytics</h3>
              <p className="text-white/70 text-sm">
                Powerful insights into your decentralized workforce
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Notification Sign Up */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 pb-24 text-center">
        <h3 className="text-xl font-medium mb-4">
          Get notified when we launch
        </h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full hover:bg-white/90 font-medium">
            Notify Me
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/60 mb-4">
            © {new Date().getFullYear()} Hustle Inc. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/terms" className="text-white/60 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
