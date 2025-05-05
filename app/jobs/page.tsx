"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LucideUser, ExternalLink, User, Clock } from "lucide-react";
import Link from "next/link";
import { useJobs } from "@/contexts/JobsContext";

const JobsPage = () => {
  const { jobs } = useJobs();
  const [visibleJobs, setVisibleJobs] = useState(9);
  const [activeTab, setActiveTab] = useState("All");

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => Math.min(prev + 6, jobs.length));
  };

  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter((job) =>
          job.tags.some((tag) =>
            tag.toLowerCase().includes(activeTab.toLowerCase())
          )
        );

  // Top talent data with diverse backgrounds
  const topTalent = [
    {
      id: 1,
      name: "Chioma N.",
      role: "Smart Contract Developer",
      avatar: "/assets/ruth.svg",
      country: "Nigeria",
      rating: 4.9,
      verified: true,
    },
    {
      id: 2,
      name: "Jiwoo Kim",
      role: "Blockchain UI/UX Designer",
      avatar: "/assets/muniz.svg",
      country: "South Korea",
      rating: 4.8,
      verified: true,
    },
    {
      id: 3,
      name: "Marco Rossi",
      role: "Full-Stack dApp Developer",
      avatar: "/assets/web3-logo.jpg",
      country: "Italy",
      rating: 4.7,
      verified: true,
    },
    {
      id: 4,
      name: "Elena García",
      role: "Solidity Engineer",
      avatar: "/assets/sarah.svg",
      country: "Spain",
      rating: 5.0,
      verified: true,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Hustle Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
                />
              </svg>

              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-purple-600 ">
            <LucideUser size={18} />
            <span>Jobs</span>
          </div>

          {/* Main Hero Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column - Hero Text */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 tracking-tighter">
                Web3 Talent Marketplace
              </h1>
              <p className="text-xl text-gray-600 mb-8 tracking-tight font-normal">
                Finding quality blockchain projects and talented freelancers has
                never been easier. Connect, collaborate, and get paid in crypto.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="flex-1">
              {/* Feature Box 1 */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl tracking-tight font-medium text-gray-900">
                    Smart Contract Employment
                  </h3>
                </div>
                <p className="text-gray-600 tracking-tight font-normal">
                  All jobs are secured with smart contracts for trustless
                  payments and transparent milestone tracking.
                </p>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl tracking-tight font-medium text-gray-900">
                    Global Talent Network
                  </h3>
                </div>
                <p className="text-gray-600 tracking-tight font-normal">
                  Connect with specialized Web3 developers, designers, and
                  marketers from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold tracking-tighter mb-4">
              Available Jobs
            </h2>
            <p className="text-xl text-gray-600 tracking-tight font-normal">
              Browse the latest opportunities in the Web3 ecosystem
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b border-gray-200">
            <div className="flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab("All")}
                className={`pb-4 font-medium ${
                  activeTab === "All"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Jobs
              </button>
              <button
                onClick={() => setActiveTab("Development")}
                className={`pb-4 font-medium ${
                  activeTab === "Development"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setActiveTab("Design")}
                className={`pb-4 font-medium ${
                  activeTab === "Design"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Design
              </button>
              <button
                onClick={() => setActiveTab("Marketing")}
                className={`pb-4 font-medium ${
                  activeTab === "Marketing"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Marketing
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.slice(0, visibleJobs).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                      {job.title}
                    </h3>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      {job.rate}
                    </span>
                  </div>

                  <div className="flex items-center mb-3 text-gray-600">
                    <User size={16} className="mr-2" />
                    <span className="text-sm font-normal tracking-tight">
                      {job.client}
                    </span>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm font-normal tracking-tight">
                      {job.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 font-normal tracking-tight line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Job <ExternalLink size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleJobs < filteredJobs.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMoreJobs}
                className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Load More Jobs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Freelancers Section */}
      <section className="py-16 px-4 md:px-8 relative border-t border-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/web3-preview.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold tracking-tighter mb-4">
              Top Web3 Talent
            </h2>
            <p className="text-xl text-gray-600 tracking-tight font-normal">
              Meet our verified blockchain professionals from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTalent.map((talent) => (
              <div
                key={talent.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden relative">
                  <Image
                    src={talent.avatar}
                    alt={talent.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-center font-medium text-lg">
                    {talent.name}
                  </h3>
                  {talent.verified && (
                    <span className="ml-1 bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded-full font-medium">
                      ✓
                    </span>
                  )}
                </div>

                <p className="text-center text-gray-500 text-sm mb-1 font-normal tracking-tight">
                  {talent.role}
                </p>
                <p className="text-center text-purple-600 text-xs mb-3">
                  {talent.country}
                </p>

                <div className="flex justify-center items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(talent.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    {talent.rating}
                  </span>
                </div>

                <div className="flex justify-center">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/talent"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg inline-flex items-center transition-colors"
            >
              Explore All Talent <ExternalLink size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
