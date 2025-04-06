"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PrivacyPolicy() {
  // Last updated date
  const lastUpdated = "April 6, 2023";

  // State for active section (for mobile scrolling)
  const [activeSection, setActiveSection] = useState("01");

  // Handle smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

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

      {/* Header - Simple Version */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <motion.h1
          className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-sm font-normal tracking-tight text-gray-500 text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Last updated: {lastUpdated}
        </motion.p>
      </div>

      {/* Content with Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Table of Contents - Sidebar */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("01")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "01"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> Information Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("02")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "02"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> Document Handling
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("03")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "03"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> Data Security
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("04")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "04"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> User Rights
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("05")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "05"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> Cookies & Tracking
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("06")}
                    className={`text-left flex gap-2 items-start ${
                      activeSection === "06"
                        ? "text-purple-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    <span>•</span> Third-Party Services
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Sections */}
          <div className="md:w-2/3">
            {/* Section 1: Information Collection */}
            <section id="01" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">01.</span> Information
                Collection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium tracking-tight text-gray-800 mb-2">
                    Account Information
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Email address and account management</li>
                    <li>• Blockchain wallet addresses</li>
                    <li>• Profile information (optional)</li>
                    <li>• Payment information (processed securely)</li>
                    <li>• Transaction history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium tracking-tight text-gray-800 mb-2">
                    Usage Data
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Web3 project and workflow information</li>
                    <li>• Portfolio and skills information</li>
                    <li>• Feature usage statistics</li>
                    <li>• Error reports and performance data</li>
                    <li>• Smart contract interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Document Handling */}
            <section id="02" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">02.</span> Document Handling
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Document Processing
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Temporary storage for processing</li>
                    <li>• Secure file transmission</li>
                    <li>• Decentralized storage integration</li>
                    <li>• Automatic file deletion after processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Data Retention
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 24-hour temporary storage for free users</li>
                    <li>• Customizable storage for premium users</li>
                    <li>• Secure cloud and decentralized storage options</li>
                    <li>• Portfolio samples retained until removal</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Data Security */}
            <section id="03" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">03.</span> Data Security
              </h2>

              <p className="text-gray-600 mb-6">
                The security of your data is important to us. We implement
                industry-standard security measures and blockchain security
                protocols to protect your personal information.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Security Measures
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• End-to-end encryption</li>
                    <li>• Regular security audits</li>
                    <li>• Smart contract verification</li>
                    <li>• Secure data storage</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Data Retention
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Temporary file storage</li>
                    <li>• Account deletion options</li>
                    <li>• Data export capabilities</li>
                    <li>• Escrow transaction records</li>
                    <li>• Compliance with regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: User Rights */}
            <section id="04" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">04.</span> User Rights
              </h2>

              <p className="text-gray-600 mb-6">
                You have certain rights regarding your personal data. This
                section explains your rights, how to exercise them, and how we
                handle your requests.
              </p>

              <div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • Right to access your personal data and wallet information
                  </li>
                  <li>
                    • Right to correct inaccurate profile or skills information
                  </li>
                  <li>• Right to delete your account and associated data</li>
                  <li>
                    • Right to data portability for your work history and
                    portfolio
                  </li>
                  <li>
                    • Right to restrict processing in certain circumstances
                  </li>
                  <li>
                    • Right to object to processing based on legitimate
                    interests
                  </li>
                  <li>
                    • Rights related to automated decision making and profiling
                    in project matching
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Cookies & Tracking */}
            <section id="05" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">05.</span> Cookies & Tracking
              </h2>

              <p className="text-gray-600 mb-6">
                Cookies and tracking technologies are used to improve your
                experience on our website. This section explains what cookies we
                use, how we use them, and how you can control them.
              </p>

              <div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • Essential cookies for basic website functionality and
                    wallet connections
                  </li>
                  <li>
                    • Analytics cookies to understand how users interact with
                    our platform
                  </li>
                  <li>
                    • Blockchain tracking for secure transaction verification
                  </li>
                  <li>
                    • Marketing cookies for relevant advertising (only with
                    consent)
                  </li>
                  <li>
                    • Preference cookies to remember your settings and choices
                  </li>
                  <li>
                    • Web3 integration cookies for decentralized authentication
                    services
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Third-Party Services */}
            <section id="06" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">06.</span> Third-Party
                Services
              </h2>

              <p className="text-gray-600 mb-6">
                We may use third-party services to enhance our website and
                services. This section explains what third-party services we
                use, how they are used, and how we ensure their security.
              </p>

              <div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • Cryptocurrency payment processors for secure transactions
                  </li>
                  <li>• Blockchain infrastructure providers</li>
                  <li>
                    • Decentralized and traditional cloud storage providers
                  </li>
                  <li>• Analytics providers to improve our platform</li>
                  <li>• Email service providers for communications</li>
                  <li>
                    • Web3 authentication services for secure wallet connection
                  </li>
                  <li>• Smart contract audit partners</li>
                </ul>
              </div>
            </section>
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
            <Link href="/privacy" className="text-purple-600 font-medium">
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
