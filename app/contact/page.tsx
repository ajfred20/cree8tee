"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to an API
    console.log("Form submitted:", formData);

    // Simulate a successful form submission
    setFormStatus({
      submitted: true,
      error: false,
    });

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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

      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-purple-100">
              Have questions about Hustle or Web3 freelancing? Our team is here
              to help you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                Send us a message
              </h2>

              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We will get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() =>
                      setFormStatus({ submitted: false, error: false })
                    }
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                Contact information
              </h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@hustleplatform.io"
                      className="text-gray-600 hover:text-purple-600"
                    >
                      hello@hustleplatform.io
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+2348012345678"
                      className="text-gray-600 hover:text-purple-600"
                    >
                      +234 801 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Office
                    </h3>
                    <address className="text-gray-600 not-italic">
                      21 Innovation Drive
                      <br />
                      Yaba, Lagos
                      <br />
                      Nigeria
                    </address>
                  </div>
                </div>
              </div>

              {/* Map or Image */}
              <div className="mt-12 bg-gray-100 rounded-xl overflow-hidden h-[300px] relative">
                <Image
                  src="/assets/office-map.jpg"
                  alt="Office Location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
                What are your support hours?
              </h3>
              <p className="text-gray-600">
                Our customer support team is available Monday through Friday, 9
                AM to 5 PM (WAT). We typically respond to all inquiries within
                24 hours during business days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
                How do I report a problem with a freelancer?
              </h3>
              <p className="text-gray-600">
                If you're experiencing issues with a freelancer, you can contact
                our support team through the "Help" section in your dashboard or
                email us directly at support@hustleplatform.io with details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
                Can I visit your office?
              </h3>
              <p className="text-gray-600">
                Yes, you can visit our office during business hours. We
                recommend scheduling an appointment in advance by contacting us
                through email or phone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
                How long does it take to get a response?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during
                business days. For urgent matters, please indicate this in your
                message subject line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-8">
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
            <Link href="/contact" className="text-purple-600 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
