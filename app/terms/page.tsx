"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, FileText, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  // Last updated date
  const lastUpdated = "April 6, 2023";
  const effectiveDate = "April 15, 2023";

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
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms of Service
          </motion.h1>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <p>Last updated: {lastUpdated}</p>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <p>Effective: {effectiveDate}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Welcome to Hustle! These Terms of Service ("Terms") govern your
            access to and use of the Hustle platform, including our website,
            services, and applications (collectively, the "Platform"). Please
            read these Terms carefully before using our Platform.
          </p>

          <div className="bg-indigo-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using our Platform, you agree to be bound by these
              Terms and our Privacy Policy. If you do not agree to these Terms,
              you must not access or use our Platform.
            </p>
            <div className="flex items-start gap-2 text-indigo-700">
              <Check className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <strong>Note:</strong> These Terms constitute a legally binding
                agreement between you and Hustle Inc.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            1. Definitions
          </h2>
          <p>In these Terms:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>"Hustle"</strong>, <strong>"we"</strong>,{" "}
              <strong>"us"</strong>, or <strong>"our"</strong> refers to Hustle
              Inc., the company operating the Platform.
            </li>
            <li>
              <strong>"You"</strong> or <strong>"your"</strong> refers to any
              individual or entity that accesses or uses our Platform.
            </li>
            <li>
              <strong>"Freelancer"</strong> refers to users who offer services
              through the Platform.
            </li>
            <li>
              <strong>"Client"</strong> refers to users who seek to purchase
              services through the Platform.
            </li>
            <li>
              <strong>"Content"</strong> includes text, graphics, images, music,
              software, audio, video, information, or other materials.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            2. Eligibility
          </h2>
          <p>To use our Platform, you must:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Be at least 18 years old.</li>
            <li>Have the legal capacity to enter into a binding agreement.</li>
            <li>
              Not be prohibited from using the Platform under applicable law.
            </li>
            <li>Complete the registration process.</li>
          </ul>
          <p>
            By using our Platform, you represent and warrant that you meet all
            eligibility requirements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            3. Accounts
          </h2>
          <p>
            When you create an account with us, you must provide accurate,
            complete, and current information. You are responsible for
            safeguarding your account and for all activities that occur under
            your account.
          </p>
          <p className="mt-4">You agree to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Create a strong password and keep it confidential.</li>
            <li>
              Immediately notify us of any unauthorized use of your account.
            </li>
            <li>
              Ensure that you log out from your account at the end of each
              session.
            </li>
            <li>Not share your account with any third party.</li>
          </ul>
          <p>
            We reserve the right to disable any user account at any time if, in
            our opinion, you have violated any provision of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            4. Platform Rules
          </h2>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            4.1 General Rules
          </h3>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Use the Platform for any illegal purpose or in violation of any
              local, state, national, or international law.
            </li>
            <li>Harass, abuse, or harm another person.</li>
            <li>Impersonate another user or person.</li>
            <li>Post false or misleading information.</li>
            <li>
              Upload or transmit viruses or any other type of malicious code.
            </li>
            <li>
              Interfere with or circumvent the security features of the
              Platform.
            </li>
            <li>Sell, resell, or commercially use our Platform.</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            4.2 Freelancer-Specific Rules
          </h3>
          <p>If you are a Freelancer, you agree to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Provide accurate information about your skills, qualifications,
              and experience.
            </li>
            <li>
              Deliver work that meets the agreed-upon specifications and
              deadlines.
            </li>
            <li>Communicate promptly and professionally with Clients.</li>
            <li>
              Not undertake projects for which you lack the necessary skills or
              resources.
            </li>
            <li>
              Respect the intellectual property rights of Clients and third
              parties.
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            4.3 Client-Specific Rules
          </h3>
          <p>If you are a Client, you agree to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide clear and accurate project requirements.</li>
            <li>
              Pay for services as agreed upon with the Freelancer and in
              accordance with our payment terms.
            </li>
            <li>Communicate promptly and professionally with Freelancers.</li>
            <li>
              Not request work that violates these Terms or applicable laws.
            </li>
            <li>
              Respect the intellectual property rights of Freelancers and third
              parties.
            </li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-10">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              5. Payments and Fees
            </h3>
            <p className="mb-4">
              Our Platform facilitates payments between Clients and Freelancers.
              We charge fees for our services as described on our Pricing page.
            </p>
            <p className="mb-4">
              Clients agree to pay the agreed-upon amount for services in a
              timely manner. Freelancers agree to deliver work as specified
              before receiving payment.
            </p>
            <p>
              We use a secure escrow system for most transactions. Clients fund
              the escrow, and funds are released to Freelancers upon project
              milestone completion or final approval.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            6. Intellectual Property Rights
          </h2>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            6.1 Platform Content
          </h3>
          <p>
            The Platform and its original content, features, and functionality
            are owned by Hustle and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            6.2 User Content
          </h3>
          <p>
            You retain all rights to any Content you submit, post, or display on
            or through the Platform. By submitting, posting, or displaying
            Content on or through the Platform, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify,
            adapt, publish, translate, create derivative works from, distribute,
            perform, and display such Content.
          </p>
          <p className="mt-4">
            You represent and warrant that you own or have the necessary
            permissions to use and authorize us to use all intellectual property
            rights in and to any Content you submit.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
            6.3 Project Deliverables
          </h3>
          <p>
            The ownership of intellectual property rights in project
            deliverables is determined by the agreement between the Freelancer
            and Client. Unless otherwise specified, upon full payment:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Clients own all rights to the deliverables created specifically
              for them.
            </li>
            <li>Freelancers retain ownership of pre-existing materials.</li>
          </ul>
          <p>
            We recommend that Freelancers and Clients explicitly address
            intellectual property ownership in their project agreements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            7. Termination
          </h2>
          <p>
            We may terminate or suspend your account and bar access to the
            Platform immediately, without prior notice or liability, for any
            reason whatsoever, including without limitation if you breach these
            Terms.
          </p>
          <p className="mt-4">
            Upon termination, your right to use the Platform will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Platform or contact us to request account
            deletion.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            In no event shall Hustle, its directors, employees, partners,
            agents, suppliers, or affiliates be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Your access to or use of or inability to access or use the
              Platform.
            </li>
            <li>Any conduct or content of any third party on the Platform.</li>
            <li>Any content obtained from the Platform.</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            9. Disclaimer
          </h2>
          <p>
            Your use of the Platform is at your sole risk. The Platform is
            provided on an "AS IS" and "AS AVAILABLE" basis. The Platform is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the State of California, United States, without regard to
            its conflict of law provisions.
          </p>
          <p className="mt-4">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            11. Changes to Terms
          </h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </p>
          <p className="mt-4">
            By continuing to access or use our Platform after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            the Platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            12. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mt-4">
            <p className="font-medium">Hustle Inc.</p>
            <p>Email: legal@hustle.io</p>
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
