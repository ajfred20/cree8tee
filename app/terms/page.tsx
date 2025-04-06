"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TermsOfService() {
  // Last updated date
  const lastUpdated = "April 6, 2023";
  const effectiveDate = "April 15, 2023";

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
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Last updated: {lastUpdated}</p>
          <div className="hidden sm:block">•</div>
          <p>Effective: {effectiveDate}</p>
        </motion.div>
      </div>

      {/* Content with Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Table of Contents - Sidebar */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
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
                    <span>•</span> Definitions
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
                    <span>•</span> Eligibility
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
                    <span>•</span> Accounts
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
                    <span>•</span> Platform Rules
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
                    <span>•</span> Payments & Fees
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
                    <span>•</span> Intellectual Property
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Sections */}
          <div className="md:w-2/3">
            {/* Agreement to Terms */}
            <div className="bg-purple-50 rounded-xl p-6 mb-10">
              <p className="text-gray-700 mb-4">
                By accessing or using our Platform, you agree to be bound by
                these Terms and our Privacy Policy. If you do not agree to these
                Terms, you must not access or use our Platform.
              </p>
              <p className="text-sm text-purple-700">
                <strong>Note:</strong> These Terms constitute a legally binding
                agreement between you and Hustle Inc.
              </p>
            </div>

            {/* Section 1: Definitions */}
            <section id="01" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">01.</span> Definitions
              </h2>

              <p className="text-gray-600 mb-4">In these Terms:</p>

              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-800">
                    • "Hustle", "we", "us", or "our"
                  </p>
                  <p className="pl-4">
                    Refers to Hustle Inc., the company operating the Platform.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">• "You" or "your"</p>
                  <p className="pl-4">
                    Refers to any individual or entity that accesses or uses our
                    Platform.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">• "Freelancer"</p>
                  <p className="pl-4">
                    Refers to users who offer services through the Platform.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">• "Client"</p>
                  <p className="pl-4">
                    Refers to users who seek to purchase services through the
                    Platform.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">• "Content"</p>
                  <p className="pl-4">
                    Includes text, graphics, images, music, software, audio,
                    video, information, or other materials.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Eligibility */}
            <section id="02" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">02.</span> Eligibility
              </h2>

              <p className="text-gray-600 mb-6">
                To use our Platform, you must meet the following requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Age & Legal Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Be at least 18 years old</li>
                    <li>
                      • Have the legal capacity to form a binding contract
                    </li>
                    <li>
                      • Not be prohibited from using the services under
                      applicable law
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Account Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Complete the registration process</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your account</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Accounts */}
            <section id="03" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">03.</span> Accounts
              </h2>

              <p className="text-gray-600 mb-6">
                When you create an account with us, you agree to the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Your Responsibilities
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Create a strong password and keep it confidential</li>
                    <li>
                      • Maintain and promptly update your account information
                    </li>
                    <li>
                      • Log out from your account at the end of each session
                    </li>
                    <li>• Immediately notify us of any unauthorized use</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Our Rights</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Disable accounts that violate our Terms</li>
                    <li>
                      • Request additional information to verify your identity
                    </li>
                    <li>• Remove content that violates our policies</li>
                    <li>• Monitor accounts for fraudulent activity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Platform Rules */}
            <section id="04" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">04.</span> Platform Rules
              </h2>

              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    General Rules
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    You agree not to:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Use the Platform for any illegal purpose</li>
                    <li>• Harass, abuse, or harm another person</li>
                    <li>• Impersonate another user or person</li>
                    <li>• Post false or misleading information</li>
                    <li>
                      • Upload malicious code or attempt to breach security
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      Freelancer Rules
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • Provide accurate information about skills and
                        experience
                      </li>
                      <li>• Deliver work that meets agreed specifications</li>
                      <li>• Communicate professionally with clients</li>
                      <li>• Respect intellectual property rights</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      Client Rules
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Provide clear project requirements</li>
                      <li>• Pay for services as agreed upon</li>
                      <li>• Communicate professionally with freelancers</li>
                      <li>• Not request work that violates our Terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Payments and Fees */}
            <section id="05" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">05.</span> Payments & Fees
              </h2>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-700">
                  Our Platform facilitates payments between Clients and
                  Freelancers. We charge fees for our services as described on
                  our Pricing page. All payments are processed securely through
                  our escrow system to protect both parties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    For Clients
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Projects are funded via secure escrow</li>
                    <li>• Milestone payments available for larger projects</li>
                    <li>• Funds released only upon work approval</li>
                    <li>• Multiple payment methods accepted</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    For Freelancers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Secure payment collection</li>
                    <li>• Platform fee automatically calculated</li>
                    <li>• Multiple withdrawal options</li>
                    <li>• Payment protection via escrow</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Intellectual Property */}
            <section id="06" className="mb-16 scroll-mt-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-8">
                <span className="text-purple-600">06.</span> Intellectual
                Property
              </h2>

              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Platform Content
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The Platform and its original content, features, and
                    functionality are owned by Hustle and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property laws.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      User Content
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• You retain rights to content you submit</li>
                      <li>• You grant us license to use submitted content</li>
                      <li>• You warrant you have necessary permissions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      Project Deliverables
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Upon full payment, clients own deliverables</li>
                      <li>• Freelancers retain pre-existing materials</li>
                      <li>
                        • IP rights should be explicitly addressed in agreements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* More sections information */}
            <div className="text-center text-gray-600 text-sm mt-16">
              <p>
                For additional sections including Termination, Limitation of
                Liability, Disclaimer, Governing Law, and Changes to Terms,
                please refer to our complete Terms of Service.
              </p>
              <p className="mt-2">
                If you have any questions, please contact us at{" "}
                <span className="text-purple-600">legal@hustle.io</span>
              </p>
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
            <Link href="/terms" className="text-purple-600 font-medium">
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
