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
  ArrowRight,
  Megaphone,
  Linkedin,
  Youtube,
  Apple,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTab, setCurrentTab] = useState("freelancer");
  const [activeSkillTab, setActiveSkillTab] = useState("top");
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      text: "Hustle completely transformed how I find blockchain talent. Before, I spent weeks trying to find qualified developers. Now, I can connect with pre-vetted professionals in days. The quality of work has been exceptional, and the platform makes managing projects seamless. It's become an essential tool for our company's growth in the Web3 space.",
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
      {/* Beta Announcement Banner */}
      {showAnnouncement && (
        <div className="bg-purple-700 text-white py-2 px-4 flex items-center justify-center relative">
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
              </svg>
            </span>
            <p className="text-xs md:text-sm font-medium tracking-tight">
              Hustle launching in beta soon! Join the waitlist for early access
            </p>
            <Link
              href="/waitlist"
              className="ml-2 underline text-white/90 hover:text-white items-center font-normal tracking-tight hidden sm:flex"
            >
              Sign up <ArrowUpRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 text-white/80 hover:text-white"
            aria-label="Close announcement"
          >
            <span className="text-lg">×</span>
          </button>
        </div>
      )}
      {/* Navigation - Responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl text-black z-10">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
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
        <div className="relative w-full h-[300px] sm:h-[400] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src="/assets/2-9.jpg"
            alt="Web3 landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
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
            <div className="relative h-[300px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden order-2 md:order-1 max-w-xl">
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
                Elevate your Web3 career, it's that simple
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
                    <div className="flex-shrink-0 mt-1 text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                        />
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
                    <div className="flex-shrink-0 mt-1 text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                        />
                      </svg>
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
                    <div className="flex-shrink-0 text-purple-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
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

      {/* Enterprise Section - After How It Works */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-purple-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Left side - Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-6">
                  <span className="text-purple-300 font-medium">
                    Enterprise Suite
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white mb-6">
                  This is how
                  <div className="text-purple-300">
                    innovative projects
                    <br />
                    find innovative talent.
                  </div>
                </h2>

                <p className="text-white/80 text-base md:text-lg mb-8">
                  Access the top 1% of Web3 talent on our platform, and a full
                  suite of blockchain-powered workforce management tools. This
                  is how decentralized innovation works now.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-purple-300">
                      <svg
                        className="w-5 h-5"
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
                    <div className="ml-3">
                      <p className="text-white text-sm md:text-base">
                        Access specialized Web3 talent to fill your blockchain
                        skill gaps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-purple-300">
                      <svg
                        className="w-5 h-5"
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
                    <div className="ml-3">
                      <p className="text-white text-sm md:text-base">
                        Streamline your workflow: hire, manage and pay with
                        crypto or fiat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-purple-300">
                      <svg
                        className="w-5 h-5"
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
                    <div className="ml-3">
                      <p className="text-white text-sm md:text-base">
                        Partner with Hustle for end-to-end decentralized support
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-block bg-white text-purple-900 px-6 py-3 rounded-full hover:bg-purple-50 font-medium text-center"
                >
                  Learn more
                </Link>
              </div>

              {/* Right side - Image */}
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/assets/1-6.jpg"
                  alt="Web3 enterprise solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Talent/Work Your Way Section - After Enterprise Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/assets/1-7.jpg"
                alt="Freelancer working"
                fill
                className="object-cover"
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="mb-4">
                <span className="text-white/80 font-medium">
                  For freelancers
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight">
                Find work
                <br />
                your way
              </h2>

              <p className="text-white/90 text-lg mb-10 max-w-lg">
                Connect with the largest network of Web3 clients and get
                projects done—from quick smart contracts to major dApp
                transformations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="#" className="block">
                  <div className="bg-purple-600 p-6 rounded-xl transition-colors duration-300 hover:bg-white group">
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-purple-600">
                      Find open
                      <br />
                      projects
                    </h3>
                    <div className="flex items-center mt-4 text-white/80 group-hover:text-purple-600">
                      <span className="text-sm">Job Board™</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                <Link href="#" className="block">
                  <div className="bg-purple-600 p-6 rounded-xl transition-colors duration-300 hover:bg-white group">
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-purple-600">
                      Showcase your
                      <br />
                      portfolio
                    </h3>
                    <div className="flex items-center mt-4 text-white/80 group-hover:text-purple-600">
                      <span className="text-sm">Profile Builder™</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                <Link href="#" className="block">
                  <div className="bg-purple-600 p-6 rounded-xl transition-colors duration-300 hover:bg-white group">
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-purple-600">
                      Get paid in
                      <br />
                      crypto
                    </h3>
                    <div className="flex items-center mt-4 text-white/80 group-hover:text-purple-600">
                      <span className="text-sm">Secure Payments</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Skills Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Navigation */}
            <div className="md:w-1/4 mb-8 md:mb-0">
              <div className="space-y-4">
                <button
                  onClick={() => setActiveSkillTab("top")}
                  className={`text-2xl font-medium tracking-tight ${
                    activeSkillTab === "top"
                      ? "text-purple-600"
                      : "text-gray-300"
                  } text-left w-full`}
                >
                  Top skills
                </button>
                <button
                  onClick={() => setActiveSkillTab("trending")}
                  className={`text-2xl font-medium tracking-tight ${
                    activeSkillTab === "trending"
                      ? "text-purple-600"
                      : "text-gray-300"
                  } text-left w-full`}
                >
                  Trending skills
                </button>
                <button
                  onClick={() => setActiveSkillTab("NG")}
                  className={`text-2xl font-medium tracking-tight ${
                    activeSkillTab === "NG"
                      ? "text-purple-600"
                      : "text-gray-300"
                  } text-left w-full`}
                >
                  Top skills in Nigeria
                </button>
              </div>
            </div>

            {/* Right side - Skills lists */}
            {activeSkillTab === "trending" && (
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Zero-Knowledge Proofs
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    AI + Blockchain Integration
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Rollup Development
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Modular Blockchain Design
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Account Abstraction
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Real-World Asset Tokenization
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Cross-Chain Development
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    MEV Protection
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Decentralized Identity
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Regenerative Finance
                  </Link>
                </div>

                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Rust for Blockchain
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Decentralized Storage
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Solidity Security Auditing
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    zkEVM Development
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Decentralized Social Media
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Liquid Staking
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Restaking Protocols
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Decentralized Science
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Onchain Gaming
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Sovereign Rollups
                  </Link>
                </div>
              </div>
            )}

            {activeSkillTab === "top" && (
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Smart Contract Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Solidity Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Blockchain Engineer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    NFT Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    DeFi Specialist
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Web3 Frontend Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Crypto Researcher
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Tokenomics Expert
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Ethereum Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Rust Developer
                  </Link>
                </div>

                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    dApp Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Blockchain Consultant
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Smart Contract Auditor
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Web3 Designer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Crypto Content Writer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Blockchain Project Manager
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Metaverse Developer
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    DAO Specialist
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Crypto Community Manager
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-light tracking-tight text-xl"
                  >
                    Layer 2 Developer
                  </Link>
                </div>
              </div>
            )}

            {activeSkillTab === "NG" && (
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {/* Left column - Skills in Nigeria */}
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Blockchain Developers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Smart Contract Auditors in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Web3 Designers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    DeFi Specialists in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Crypto Content Writers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    NFT Artists in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Solidity Developers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Crypto Community Managers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Blockchain Project Managers in Nigeria
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Web3 Educators in Nigeria
                  </Link>
                </div>

                {/* Right column - Skills by city */}
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Blockchain Developers in Lagos
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Smart Contract Developers in Abuja
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Web3 Designers in Port Harcourt
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Crypto Consultants in Lagos
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    NFT Artists in Ibadan
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Blockchain Educators in Enugu
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    DeFi Specialists in Lagos
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Crypto Content Writers in Abuja
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Solidity Developers in Kaduna
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-light tracking-tight text-xl transition-colors"
                  >
                    Web3 Community Managers in Lagos
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* For Clients Section - Reversed from the talent section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Green content area */}
            <div className="bg-green-600 p-8 md:p-12 lg:p-16 md:w-1/2">
              <div className="mb-4">
                <span className="text-white/80 font-medium">For clients</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                Find expert
                <br />
                talent
              </h2>

              <p className="text-white/90 text-lg mb-10">
                Work with the most talented Web3 professionals and build your
                blockchain projects with confidence.
              </p>

              <div className="border-t border-white/20 pt-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-white font-medium mb-2">
                      Access specialized blockchain expertise
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium mb-2">
                      Scale your team up or down as needed
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium mb-2">
                      Pay securely with crypto or fiat
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-full hover:bg-green-50 font-medium transition-colors"
              >
                Post a job
              </Link>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[300px] md:h-auto md:w-1/2">
              <Image
                src="/assets/1-8.jpg"
                alt="Client hiring talent"
                fill
                className="object-cover"
              />
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

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-5xl font-semibold tracking-tighter mb-6">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 mb-12">
              If you don't find any question you are looking for. You can drop a
              question.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors mb-16"
            >
              SEND US A MESSAGE <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center bg-purple-400/20 text-purple-600 rounded-lg w-8 h-8 mr-2 sm:mr-4 text-sm">
                      01
                    </span>
                    <h3 className="text-base sm:text-lg font-medium tracking-tighter">
                      How does Hustle verify freelancer skills?
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform ${
                      openFaq === 1 ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>

                {openFaq === 1 && (
                  <div className="mt-4 pl-4 sm:pl-12 text-gray-600">
                    <p className="font-normal tracking-tight">
                      Our platform uses a multi-step verification process
                      including skills assessments, portfolio reviews, and
                      blockchain knowledge tests. We also verify past work
                      experience and client feedback to ensure all freelancers
                      have the expertise they claim in their profiles.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center bg-purple-400/20 text-purple-600 rounded-lg w-8 h-8 mr-2 sm:mr-4 text-sm">
                      02
                    </span>
                    <h3 className="text-base sm:text-lg font-medium tracking-tighter">
                      Can I pay freelancers with cryptocurrency?
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform ${
                      openFaq === 2 ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>

                {openFaq === 2 && (
                  <div className="mt-4 pl-4 sm:pl-12 text-gray-600">
                    <p className="font-normal tracking-tight">
                      Yes! Hustle supports payments in major cryptocurrencies
                      including ETH, USDC, and BTC. We also support traditional
                      payment methods for clients who prefer to pay in fiat
                      currencies. Our escrow system ensures secure transactions
                      for both parties.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center bg-purple-400/20 text-purple-600 rounded-lg w-8 h-8 mr-2 sm:mr-4 text-sm">
                      03
                    </span>
                    <h3 className="text-base sm:text-lg font-medium tracking-tighter">
                      What if I'm new to Web3 development?
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform ${
                      openFaq === 3 ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>

                {openFaq === 3 && (
                  <div className="mt-4 pl-4 sm:pl-12 text-gray-600">
                    <p className="font-normal tracking-tight">
                      Hustle welcomes developers at all stages of their
                      blockchain journey. We offer resources, learning paths,
                      and mentorship opportunities to help you transition from
                      Web2 to Web3. You can start with smaller projects and
                      build your portfolio as you gain experience.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center bg-purple-400/20 text-purple-600 rounded-lg w-8 h-8 mr-2 sm:mr-4 text-sm">
                      04
                    </span>
                    <h3 className="text-base sm:text-lg font-medium tracking-tighter">
                      How are platform fees structured?
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform ${
                      openFaq === 4 ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>

                {openFaq === 4 && (
                  <div className="mt-4 pl-4 sm:pl-12 text-gray-600">
                    <p className="font-normal tracking-tight">
                      Hustle charges a competitive 5% fee on completed projects,
                      significantly lower than traditional freelance platforms.
                      We also offer subscription plans for companies with
                      ongoing hiring needs, which can reduce fees further. There
                      are no hidden charges or withdrawal fees.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center bg-purple-400/20 text-purple-600 rounded-lg w-8 h-8 mr-2 sm:mr-4 text-sm">
                      05
                    </span>
                    <h3 className="text-base sm:text-lg font-medium tracking-tighter">
                      Is there protection for both clients and freelancers?
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform ${
                      openFaq === 5 ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>

                {openFaq === 5 && (
                  <div className="mt-4 pl-4 sm:pl-12 text-gray-600">
                    <p className="font-normal tracking-tight">
                      Absolutely. Our escrow system holds client funds securely
                      until project milestones are approved. For freelancers,
                      this ensures payment for completed work. For clients, it
                      provides assurance that funds are only released when work
                      meets requirements. We also offer dispute resolution
                      services if needed.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-16 max-w-7xl mx-auto px-4 sm:px-6 rounded-lg mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* For Clients */}
            <div>
              <h3 className="text-white font-medium mb-6 tracking-tighter">
                For Clients
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    How to hire
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Talent Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Hire worldwide
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Talent */}
            <div>
              <h3 className="text-white font-medium mb-6">For Talent</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    How to find work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Find Web3 jobs worldwide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Earn with crypto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-medium mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Help & support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Success stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 hover:text-white tracking-tight transition-colors"
                  >
                    Trust, safety & security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-100 text-sm">Follow us</p>
              <div className="flex space-x-4 ml-4">
                <Link
                  href="#"
                  className="text-gray-100 hover:text-purple-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-purple-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-purple-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-gray-100">
            <p>© {new Date().getFullYear()} Hustle Inc.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
