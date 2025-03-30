"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const logoTickerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation for logo ticker
  useEffect(() => {
    const ticker = logoTickerRef.current;
    if (!ticker) return;

    const clone = ticker.innerHTML;
    ticker.innerHTML += clone;

    const animateTicker = () => {
      if (!ticker) return;
      if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
        ticker.scrollLeft = 0;
      } else {
        ticker.scrollLeft += 1;
      }
      requestAnimationFrame(animateTicker);
    };

    const animation = requestAnimationFrame(animateTicker);
    return () => cancelAnimationFrame(animation);
  }, []);

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
                Login <ArrowRight className="w-4 h-4 ml-1" />
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
                    Login <ArrowRight className="w-5 h-5 ml-1" />
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
            Discover the Future of 
            <br className="hidden sm:block" />
            Freelancing: Web3
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

      {/* Logo Ticker Section - Responsive */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Unlock opportunities to work in
            </h2>
          </div>

          <div className="overflow-hidden">
            <div
              ref={logoTickerRef}
              className="flex space-x-8 md:space-x-12 py-4 whitespace-nowrap overflow-x-scroll scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Web3 Company Logos */}
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/coinbase.svg"
                  alt="Coinbase"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/metamask.svg"
                  alt="MetaMask"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/ethereum.svg"
                  alt="Ethereum"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/opensea.svg"
                  alt="OpenSea"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/uniswap.svg"
                  alt="Uniswap"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/polygon.svg"
                  alt="Polygon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/binance.svg"
                  alt="Binance"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0 h-8 md:h-12 w-24 md:w-32 relative">
                <Image
                  src="/assets/logos/solana.svg"
                  alt="Solana"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Responsive */}
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

              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-4 md:mb-6 leading-tight tracking-tighter">
                Working with Web3Hustle was a game-changer for our project! Not
                only was the process smooth and professional, but the final
                product exceeded our expectations. From start to finish,
                everything was handled with such attention to detail. Highly
                recommend!
              </h2>

              <div className="flex items-center mt-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4">
                  <Image
                    src="/assets/muniz.svg"
                    alt="Client"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 tracking-tight">
                    Alex Johnson
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-normal tracking-tight">
                    CTO, DecentralFi
                  </p>
                </div>
              </div>

              <div className="flex mt-6 md:mt-8">
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-100">
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
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
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
            </div>

            {/* Testimonial Image */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-1 md:order-2 mb-6 md:mb-0">
              <Image
                src="/assets/web3-banner.jpg"
                alt="Satisfied client"
                fill
                className="object-cover"
              />
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
