"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Menu,
  ArrowUpRight,
  BadgeDollarSign,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTab, setCurrentTab] = useState("freelancer");

  // Testimonials data
  const testimonials = [
    {
      text: "The Hustle platform has been a game-changer for me. As a freelancer, I've struggled to find consistent work and fair pay. But with Hustle, I've been able to connect with high-quality clients and projects that match my skills and interests. The community support and resources have also been invaluable in helping me grow my business. I've increased my earnings by 300% since joining Hustle and I couldn't be more grateful!",
      name: "Udalric Fred",
      role: "Solana Blockchain Developer",
      avatar: "/assets/muniz.svg",
      image: "/assets/dev-coding.jpg",
    },
    {
      text: "Web3Hustle completely transformed how I find blockchain talent. Before, I spent weeks trying to find qualified developers. Now, I can connect with pre-vetted professionals in days. The quality of work has been exceptional, and the platform makes managing projects seamless. It's become an essential tool for our company's growth in the Web3 space.",
      name: "Sarah Williams",
      role: "CTO, DeFi Protocol",
      avatar: "/assets/sarah.svg",
      image: "/assets/web3-banner.jpg",
    },
    {
      text: "As someone transitioning from Web2 to Web3 development, this platform provided exactly what I needed - real projects to build my portfolio and mentorship from experienced developers. The payment system is transparent and fair, and I've built relationships with clients who keep coming back. Highly recommend for anyone looking to break into the blockchain industry.",
      name: "Kalejaiye Caleb",
      role: "Blockchain Developer",
      avatar: "/assets/caleb.jpg",
      image: "/assets/web3-preview.jpg",
    },
  ];

  // Logo ticker with Framer Motion
  const logos = [
    { src: "/assets/logos/coinbase.svg", alt: "Coinbase" },
    { src: "/assets/logos/metamask.svg", alt: "MetaMask" },
    { src: "/assets/logos/opensea.svg", alt: "OpenSea" },
    { src: "/assets/logos/uniswap.svg", alt: "Uniswap" },
    { src: "/assets/logos/polygon.svg", alt: "Polygon" },
    { src: "/assets/logos/binance.svg", alt: "Binance" },
    { src: "/assets/logos/solana.svg", alt: "Solana" },
  ];

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl text-black z-10">
            <Image
              src="/assets/logo.svg"
              alt="Web3Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-20 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-8">
              <Link
                href="#"
                className="text-black hover:text-purple-600 font-medium text-sm uppercase"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-black hover:text-purple-600 font-medium text-sm uppercase"
              >
                How it Works
              </Link>
              <Link
                href="#"
                className="text-black hover:text-purple-600 font-medium text-sm uppercase"
              >
                For Clients
              </Link>
              <Link
                href="#"
                className="text-black hover:text-purple-600 font-medium text-sm uppercase"
              >
                For Freelancers
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-black hover:text-purple-600 font-medium text-sm uppercase flex items-center"
              >
                Login <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="#"
                className="bg-purple-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-purple-700 font-medium text-sm uppercase"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-10 flex flex-col items-center justify-center md:hidden">
              <div className="flex flex-col items-center gap-8">
                <Link
                  href="#"
                  className="text-black hover:text-purple-600 font-medium text-lg uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-purple-600 font-medium text-lg uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How it Works
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-purple-600 font-medium text-lg uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Clients
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-purple-600 font-medium text-lg uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Freelancers
                </Link>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <Link
                    href="#"
                    className="text-black hover:text-purple-600 font-medium text-lg uppercase flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login <ArrowUpRight className="w-5 h-5 ml-1" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 font-medium text-lg uppercase mt-4 sm:mt-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section - Responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 pb-12 md:pb-24">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-800 font-normal tracking-tight">
              Unlock the power of Web3 Freelancing.
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black max-w-4xl leading-tight mb-4 md:mb-6">
            Discover the Future <br className="hidden sm:block" />
            of Freelancing: Web3
            <br className="hidden sm:block" />
            Talent at your fingertips.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-6 md:mb-8 font-normal tracking-tight px-4 sm:px-0">
            Experience the power of blockchain-based freelancing and discover a
            new world of opportunities. Get instant access to a network of
            talented freelancers who will help you stay ahead of the curve.
          </p>

          <Link
            href="#"
            className="bg-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-purple-700 font-medium text-sm md:text-base"
          >
            GET STARTED
          </Link>
        </div>

        {/* Hero Image - Responsive */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/assets/web3-banner.jpg"
            alt="Web3 landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Logo Ticker Section - Responsive with Framer Motion */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-normal tracking-tight text-gray-800">
              Unlock opportunities to work in
            </h2>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8 md:space-x-12 py-4"
              initial={{ x: 0 }}
              animate={{
                x: isPaused ? "0%" : "-100%",
              }}
              transition={{
                x: {
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative logo-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}

              {/* Duplicate logos for seamless looping */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative logo-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Updated with more realistic beta numbers */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Projects completed */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black mb-2">
                50+
              </h3>
              <p className="text-sm md:text-base font-medium tracking-tight text-gray-600">
                Projects completed
              </p>
            </div>

            {/* Return on investment */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black mb-2">
                85%
              </h3>
              <p className="text-sm md:text-base font-medium tracking-tight text-gray-600">
                Client satisfaction
              </p>
            </div>

            {/* Global freelancers */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black mb-2">
                500+
              </h3>
              <p className="text-sm md:text-base font-medium tracking-tight text-gray-600">
                Beta testers
              </p>
            </div>

            {/* 5-star reviews */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-black mb-2">
                30+
              </h3>
              <p className="text-sm md:text-base font-medium tracking-tight text-gray-600">
                Web3 skills
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - After Metrics */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - Image that changes based on tab */}
            <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden order-2 md:order-1">
              {/* Freelancer Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentTab === "freelancer" ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/freelancer-illustration.svg"
                  alt="Web3 freelancer working"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Client Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentTab === "client" ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/client-illustration.svg"
                  alt="Web3 client posting a project"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Right side - Content with futuristic toggle */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-black mb-8">
                Elevate your Web3 career, it's simple
              </h2>

              {/* Futuristic toggle switch */}
              <div className="flex justify-center mb-10 relative">
                <div className="bg-gray-100 p-1 rounded-full w-full max-w-xs relative overflow-hidden">
                  {/* Animated background pill */}
                  <motion.div
                    className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg"
                    initial={{
                      x: currentTab === "freelancer" ? 0 : "100%",
                    }}
                    animate={{
                      x: currentTab === "freelancer" ? 0 : "100%",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    style={{
                      width: "50%",
                      transform:
                        currentTab === "freelancer"
                          ? "translateX(0%)"
                          : "translateX(100%)",
                    }}
                  />

                  <div className="flex relative z-10">
                    <button
                      className={`py-3 px-6 rounded-full text-sm font-medium transition-colors w-1/2 ${
                        currentTab === "freelancer"
                          ? "text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                      onClick={() => setCurrentTab("freelancer")}
                    >
                      Freelancer
                    </button>
                    <button
                      className={`py-3 px-6 rounded-full text-sm font-medium transition-colors w-1/2 ${
                        currentTab === "client"
                          ? "text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                      onClick={() => setCurrentTab("client")}
                    >
                      Client
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
                <div
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Content remains the same */}
              {currentTab === "freelancer" && (
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Showcase your Web3 skills
                      </h3>
                      <p className="text-gray-600">
                        Create a profile highlighting your blockchain expertise
                        and stand out to potential clients looking for
                        specialized talent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <BadgeDollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Get paid in crypto
                      </h3>
                      <p className="text-gray-600">
                        Receive payments in your preferred cryptocurrency with
                        our secure escrow system that protects both you and your
                        clients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Join a community of experts
                      </h3>
                      <p className="text-gray-600">
                        Connect with other blockchain developers, share
                        knowledge, and collaborate on cutting-edge Web3
                        projects.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentTab === "client" && (
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Find pre-vetted Web3 talent
                      </h3>
                      <p className="text-gray-600">
                        Access a curated pool of blockchain developers, smart
                        contract auditors, and Web3 designers who have been
                        verified for quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Post projects with ease
                      </h3>
                      <p className="text-gray-600">
                        Describe your project needs and get matched with the
                        perfect freelancers who have the exact skills you're
                        looking for.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-black mb-1">
                        Secure milestone payments
                      </h3>
                      <p className="text-gray-600">
                        Release payments only when you're satisfied with the
                        work, using our secure escrow system that protects your
                        investment.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 font-medium text-center"
                >
                  Sign up for free
                </Link>
                <Link
                  href="#"
                  className="border border-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-100 font-medium text-center"
                >
                  {currentTab === "freelancer"
                    ? "Browse projects"
                    : "Learn how to hire"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Responsive with Slider */}
      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Testimonial Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text - full display without scrolling */}
              <div className="relative overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`w-full ${
                      index === currentTestimonial ? "block" : "hidden"
                    }`}
                    initial={{
                      opacity: 0,
                      x: index > currentTestimonial ? 100 : -100,
                    }}
                    animate={{
                      opacity: index === currentTestimonial ? 1 : 0,
                      x:
                        index === currentTestimonial
                          ? 0
                          : index > currentTestimonial
                          ? 100
                          : -100,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-4 md:mb-6 leading-tight tracking-tighter">
                      {testimonial.text}
                    </h2>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial author info - separate from text for better visibility */}
              <div className="mt-4 md:mt-6 h-16">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`author-${index}`}
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentTestimonial ? 1 : 0,
                      display: index === currentTestimonial ? "flex" : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 tracking-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 font-normal tracking-tight">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex mt-6 md:mt-8">
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-100"
                  onClick={prevTestimonial}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={nextTestimonial}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial
                        ? "bg-purple-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Image - Changes with testimonial */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-1 md:order-2 mb-6 md:mb-0">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`image-${index}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentTestimonial ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s workspace`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Responsive */}
      <footer className="py-6 md:py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm md:text-base order-2 md:order-1 mt-4 md:mt-0">
              © {new Date().getFullYear()} Web3Hustle. All rights reserved.
            </div>

            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-1 text-gray-600 text-sm md:text-base order-3">
              Built with 🫶🏽💜 by{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-black hover:text-purple-600 transition-colors"
              >
                Web3Hustle Team
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
