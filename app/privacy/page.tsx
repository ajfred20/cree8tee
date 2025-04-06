"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  // Last updated date
  const lastUpdated = "April 6, 2023";

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

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Clock className="w-4 h-4" />
            <p>Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            At Hustle, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our platform.
          </p>

          <div className="bg-purple-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Summary
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                • We collect information you provide directly to us and
                information automatically collected when you use our platform.
              </li>
              <li>
                • Your information helps us provide and improve our services,
                communicate with you, and protect our platform.
              </li>
              <li>
                • We may share your information with third-party service
                providers but never sell your personal data.
              </li>
              <li>
                • You have control over your data with options to access,
                update, or delete your information.
              </li>
              <li>
                • We use industry-standard security measures to protect your
                information.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <p>
            We collect several types of information from and about users of our
            platform, including:
          </p>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            Personal Information
          </h3>
          <p>
            When you create an account, we collect information such as your
            name, email address, password, and profile information. If you're a
            freelancer, we may collect professional details including skills,
            work history, and portfolio samples. For clients, we collect project
            requirements and preferences.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            Payment Information
          </h3>
          <p>
            When you make or receive payments through our platform, we collect
            payment information including wallet addresses, transaction history,
            and payment methods. We do not store complete credit card
            information on our servers.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <p>
            As you navigate through our platform, we may use cookies and similar
            technologies to collect certain information about your equipment,
            browsing actions, and patterns, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Details of your visits to our platform, including traffic data,
              location data, logs, and other communication data.
            </li>
            <li>
              Information about your computer and internet connection, including
              your IP address, operating system, and browser type.
            </li>
            <li>
              Information about your device, including device identifiers and
              settings.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect about you or that you provide to
            us to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, maintain, and improve our platform and services.</li>
            <li>
              Process transactions and send related information, including
              confirmations and receipts.
            </li>
            <li>
              Match freelancers with relevant projects and clients with
              qualified freelancers.
            </li>
            <li>
              Communicate with you about products, services, offers, and
              promotions.
            </li>
            <li>Respond to your comments, questions, and requests.</li>
            <li>
              Customize your experience and provide content that may be of
              interest to you.
            </li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our platform.
            </li>
            <li>
              Detect, investigate, and prevent fraudulent transactions and other
              illegal activities.
            </li>
            <li>Comply with our legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Sharing Your Information
          </h2>
          <p>
            We may share the information we collect about you as described in
            this Privacy Policy:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              With freelancers and clients for the purpose of facilitating
              projects and services.
            </li>
            <li>
              With third-party service providers who perform services on our
              behalf, such as payment processing, data analysis, email delivery,
              and customer service.
            </li>
            <li>
              In response to a request for information if we believe disclosure
              is in accordance with, or required by, any applicable law or legal
              process.
            </li>
            <li>
              If we believe your actions are inconsistent with our user
              agreements or policies, or to protect the rights, property, and
              safety of Hustle or others.
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business by another company.
            </li>
            <li>With your consent or at your direction.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Your Rights and Choices
          </h2>
          <p>
            You have several rights and choices regarding your personal
            information:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Account Information:</strong> You can update your account
              information by logging into your account and modifying your
              profile.
            </li>
            <li>
              <strong>Data Access and Portability:</strong> You can request a
              copy of your personal information that we hold about you.
            </li>
            <li>
              <strong>Data Deletion:</strong> You can request that we delete
              your personal information, though we may retain certain
              information as required by law or for legitimate business
              purposes.
            </li>
            <li>
              <strong>Cookies:</strong> Most web browsers are set to accept
              cookies by default. You can usually set your browser to remove or
              reject cookies.
            </li>
            <li>
              <strong>Marketing Communications:</strong> You can opt out of
              receiving promotional emails from us by following the instructions
              in those emails.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Data Security
          </h2>
          <p>
            We have implemented measures designed to secure your personal
            information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. However, the transmission of information
            via the internet is not completely secure. While we strive to
            protect your personal information, we cannot guarantee the security
            of your personal information transmitted through our platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Changes to Our Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. If we make
            material changes, we will notify you by email or through a notice on
            our platform prior to the changes becoming effective. Your continued
            use of our platform following the posting of changes constitutes
            your acceptance of such changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Contact Information
          </h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            practices, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mt-4">
            <p className="font-medium">Hustle Inc.</p>
            <p>Email: privacy@hustle.io</p>
            <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
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
