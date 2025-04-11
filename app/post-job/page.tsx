"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";

export default function PostJob() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4 px-4 sm:px-6">
            <div className="flex items-center">
              <Link href="/" className="mr-8">
                <Image
                  src="/assets/logo.svg"
                  alt="Hustle Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>

              <nav className="hidden md:flex items-center space-x-1">
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("talent")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700">
                    Find talent
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {activeDropdown === "talent" && (
                    <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none z-50 border-t-2 border-purple-600">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-medium text-gray-900">
                            Ways to hire
                          </h3>
                        </div>
                        <div className="p-2">
                          <Link
                            href="/post-job"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Post a job
                            </p>
                            <p className="text-xs text-gray-500">
                              Find Web3 talent
                            </p>
                          </Link>
                          <Link
                            href="/browse-talent"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Browse talent profiles
                            </p>
                            <p className="text-xs text-gray-500">
                              Review portfolios
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("work")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700">
                    Find work
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {activeDropdown === "work" && (
                    <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none z-50 border-t-2 border-purple-600">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-medium text-gray-900">
                            Find web3 work
                          </h3>
                        </div>
                        <div className="p-2">
                          <Link
                            href="/jobs"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Find jobs
                            </p>
                            <p className="text-xs text-gray-500">
                              Browse opportunities
                            </p>
                          </Link>
                          <Link
                            href="/saved-jobs"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Saved jobs
                            </p>
                            <p className="text-xs text-gray-500">
                              View your bookmarks
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("why")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700">
                    Why Hustle
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {activeDropdown === "why" && (
                    <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none z-50 border-t-2 border-purple-600">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-medium text-gray-900">
                            About our platform
                          </h3>
                        </div>
                        <div className="p-2">
                          <Link
                            href="/success-stories"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Success stories
                            </p>
                            <p className="text-xs text-gray-500">
                              Client testimonials
                            </p>
                          </Link>
                          <Link
                            href="/reviews"
                            className="block px-4 py-2 hover:bg-gray-50 rounded"
                          >
                            <p className="text-sm font-medium text-gray-900">
                              Reviews
                            </p>
                            <p className="text-xs text-gray-500">
                              What clients say
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/enterprise"
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700"
                >
                  Enterprise
                </Link>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden md:flex items-center">
                <div className="relative mr-4">
                  <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="ml-2 text-sm outline-none w-40"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-700 hover:text-purple-700"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full"
                  >
                    Sign up
                  </Link>
                </div>
              </div>

              <button className="md:hidden">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:block border-t border-gray-200">
            <div className="flex space-x-8 px-6 py-3">
              <Link
                href="/development"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
              >
                Development & IT
              </Link>
              <Link
                href="/ai-services"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
              >
                Web3 & Blockchain
              </Link>
              <Link
                href="/design"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
              >
                Design & Creative
              </Link>
              <Link
                href="/sales"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
              >
                Sales & Marketing
              </Link>
              <Link
                href="/admin"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
              >
                Admin & Support
              </Link>
              <button className="text-sm font-medium text-gray-700 hover:text-purple-700 flex items-center">
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.08em] text-gray-900 leading-tight mb-4">
                Post a job today and get
                <br />
                the right talent tomorrow
              </h1>

              <p className="text-xl text-gray-600 mb-8 font-normal tracking-tighter">
                Connect with Web3 talent that gets you, and hire them to take
                your blockchain project to the next level.
              </p>

              <Link
                href="/get-started"
                className="inline-block text-white bg-purple-700 hover:bg-purple-800 px-14 py-4 text-center font-normal tracking-normal rounded-lg text-base"
              >
                Get started
              </Link>
            </div>

            <div className="md:w-1/2">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/assets/2-6.jpg"
                  alt="Developer writing code on tablet"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-medium text-gray-500 mb-8 text-left">
            TRUSTED BY
          </p>

          <div className="flex flex-wrap items-center justify-between">
            <Image
              src="/assets/logos/coinbase.svg"
              alt="Coinbase"
              width={120}
              height={30}
              className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-all"
            />
            <Image
              src="/assets/logos/metamask.svg"
              alt="MetaMask"
              width={120}
              height={30}
              className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-all"
            />
            <Image
              src="/assets/logos/opensea.svg"
              alt="OpenSea"
              width={120}
              height={30}
              className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-all"
            />
            <Image
              src="/assets/logos/uniswap.svg"
              alt="Uniswap"
              width={120}
              height={30}
              className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-all"
            />
            <Image
              src="/assets/logos/polygon.svg"
              alt="Polygon"
              width={120}
              height={30}
              className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
