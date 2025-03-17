"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock4,
  Layers,
  Plus,
  CircleDot,
  FolderOpen,
  TrendingUp,
  Zap,
  DollarSign,
  Search,
  Users,
  HelpCircle,
  Scale,
  Briefcase,
  Trophy,
  SendIcon,
  Sparkles,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { AchievementCard } from "@/components/achievement-card";
import { BenefitCard } from "@/components/benefit-card";
import { InteractiveSteps } from "@/components/interactive-steps";
import { ServiceGrid } from "@/components/service-grid";
import { TimeZoneBar } from "@/components/time-zone-bar";
import { ProjectDrawer } from "@/components/project-drawer";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqAccordion } from "@/components/faq-accordion";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ScrollingTasks = dynamic(() => import("@/components/scrolling-tasks"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-2xl text-white">
          <span className="text-white tracking-tight">Web3Hustle</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-400 hover:text-white">
              Find Talent
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Find Work
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Why Us
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Enterprise
            </Link>
          </div>
          <Link
            href="#"
            className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Post a Job
          </Link>
        </div>
        {/* Mobile Navigation Dock */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 md:hidden border-t border-gray-800 px-6 py-3 z-50">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex flex-col items-center">
              <Trophy className="w-6 h-6 text-gray-400" />
              <span className="text-xs mt-1 text-gray-300">Find Talent</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Briefcase className="w-6 h-6 text-gray-400" />
              <span className="text-xs mt-1 text-gray-300">Find Work</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Scale className="w-6 h-6 text-gray-400" />
              <span className="text-xs mt-1 text-gray-300">Messages</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <HelpCircle className="w-6 h-6 text-gray-400" />
              <span className="text-xs mt-1 text-gray-300">Help</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Users className="w-6 h-6 text-gray-400" />
              <span className="text-xs mt-1 text-gray-300">Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Section - Styled for a job recruiting platform */}
      <div className="max-w-4xl mx-auto bg-black text-white">
        {/* Back button */}
        <div className="p-4">
          <Link href="#" className="flex items-center text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="ml-2">Back to search results</span>
          </Link>
        </div>
        
        {/* Profile header with banner and info */}
        <div className="relative">
          {/* Banner Image */}
          <div className="h-48 w-full relative overflow-hidden rounded-lg">
            <Image 
              src="/assets/web3-banner.jpg" 
              alt="Web3 banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Profile Image */}
          <div className="absolute left-4 -bottom-16 border-4 border-black rounded-xl overflow-hidden w-32 h-32">
            <Image 
              src="/assets/web3-logo.jpg" 
              alt="Developer profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          
          {/* Action buttons */}
          <div className="absolute right-4 bottom-4 flex gap-2">
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700">
              Message
            </button>
            <button className="px-4 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700">
              Hire Now
            </button>
          </div>
        </div>
        
        {/* Profile info */}
        <div className="mt-20 px-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Alex Morgan</h1>
              <div className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Verified
              </div>
              <div className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                Top Rated
              </div>
            </div>
            
            <h2 className="text-lg font-medium text-green-400">Senior Blockchain Developer & Smart Contract Engineer</h2>
            
            <div className="flex flex-wrap gap-4 mt-3 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>San Francisco, California</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                <span>alexmorgan.dev</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>Member since November 2021</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>7+ years experience</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-3">
              <div className="flex items-center gap-1">
                <span className="font-semibold">$85</span>
                <span className="text-gray-500">/ hour</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">100%</span>
                <span className="text-gray-500">Job Success</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">32</span>
                <span className="text-gray-500">Completed Jobs</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Solidity</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Smart Contracts</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Ethereum</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">DeFi</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Web3.js</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab navigation */}
        <div className="mt-8 border-b border-gray-800">
          <div className="flex">
            <button className="px-4 py-4 text-white font-medium border-b-2 border-green-500">
              Overview
            </button>
            <button className="px-4 py-4 text-gray-500 hover:text-white hover:bg-gray-900">
              Portfolio
            </button>
            <button className="px-4 py-4 text-gray-500 hover:text-white hover:bg-gray-900">
              Work History
            </button>
            <button className="px-4 py-4 text-gray-500 hover:text-white hover:bg-gray-900">
              Reviews
            </button>
            <button className="px-4 py-4 text-gray-500 hover:text-white hover:bg-gray-900">
              Certifications
            </button>
          </div>
        </div>
        
        {/* Overview Section */}
        <div className="p-4">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a blockchain developer with 7+ years of experience specializing in Ethereum smart contract development and DeFi applications. I've worked with leading protocols and helped secure over $500M in TVL through audited smart contracts. My expertise includes tokenomics design, NFT marketplaces, and cross-chain solutions.
            </p>
          </div>
          
          {/* Work History Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Work History Highlights</h3>
            
            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">DeFi Lending Protocol Development</h4>
                    <p className="text-green-400">Completed Apr 2023</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-400 ml-1">5.0</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-300">
                  "Alex delivered exceptional work on our DeFi lending protocol. His smart contract code was clean, well-documented, and passed all security audits with minimal issues. Would definitely hire again."
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  $15,000 fixed-price project • 6 weeks
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">NFT Marketplace Smart Contracts</h4>
                    <p className="text-green-400">Completed Jan 2023</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-400 ml-1">5.0</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-300">
                  "Alex built our entire NFT marketplace backend including minting, trading, and royalty distribution. His expertise in gas optimization saved us thousands in transaction costs."
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  $12,000 fixed-price project • 8 weeks
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-blue-400 hover:text-blue-300">
                See all 32 jobs →
              </button>
            </div>
          </div>
          
          {/* Portfolio Showcase */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Portfolio Showcase</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src="/assets/portfolio-1.jpg" 
                    alt="DeFi Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">DeFi Dashboard</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    A comprehensive dashboard for DeFi portfolio management with real-time data integration.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src="/assets/portfolio-2.jpg" 
                    alt="NFT Marketplace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">NFT Marketplace</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    A fully-featured NFT marketplace with minting, trading, and royalty distribution.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-blue-400 hover:text-blue-300">
                View all portfolio items →
              </button>
            </div>
          </div>
          
          {/* Skills & Certifications */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 border border-gray-800 rounded-lg p-3">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Ethereum Developer Certification</h4>
                  <p className="text-gray-400 text-sm">ConsenSys Academy • 2021</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border border-gray-800 rounded-lg p-3">
                <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Smart Contract Security Auditor</h4>
                  <p className="text-gray-400 text-sm">OpenZeppelin • 2022</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability */}
          <div className="bg-gray-900 rounded-lg p-4 mb-8">
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available for work - can start immediately</span>
            </div>
            <p className="mt-2 text-gray-400">
              I'm currently available for full-time contracts (40hrs/week) or project-based work.
            </p>
          </div>
          
          {/* Hire Button */}
          <div className="text-center mb-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full">
              Invite to Job
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t mb-12 md:mb-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              © {new Date().getFullYear()} Web3Hustle. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              Built with 🫶🏽🩷 by{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-gray-400 transition-colors"
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
