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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="relative w-24 h-12">
          <Image
            src="/assets/logo.png"
            alt="Cre8tee logo"
            fill
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-600 hover:text-black">
              Achievements
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              Our Work
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              Comparision
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              FAQs
            </Link>
          </div>
          <Link
            href="#"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Plans and Pricing
          </Link>
        </div>
        {/* Mobile Navigation Dock */}
        <div className="fixed bottom-0 left-0 right-0 bg-white md:hidden border-t border-gray-200 px-6 py-3 z-50">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex flex-col items-center">
              <Trophy className="w-6 h-6 text-gray-600" />
              <span className="text-xs mt-1">Achievements</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Briefcase className="w-6 h-6 text-gray-600" />
              <span className="text-xs mt-1">Our Work</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Scale className="w-6 h-6 text-gray-600" />
              <span className="text-xs mt-1">Compare</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <HelpCircle className="w-6 h-6 text-gray-600" />
              <span className="text-xs mt-1">FAQs</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <DollarSign className="w-6 h-6 text-gray-600" />
              <span className="text-xs mt-1">Pricing</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="w-full pt-20 pb-16 text-center bg-[url('/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
          <div className="flex items-center gap-2 bg-green-50 text-green-800 tracking-tight font-medium px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new project
          </div>
        </div>

        <h1 className="text-5xl text-black md:text-8xl font-bold leading-none tracking-tighter mb-6 max-w-4xl mx-auto">
          That Design Agency for both Founders and Startups
        </h1>

        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto tracking-tight leading-tight">
          We don't just design, we solve your brand's <br />
          biggest challenges
        </p>

        <Link
          href="#"
          className="inline-flex bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
        >
          View Plans and Pricing
        </Link>

        {/* Features */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock4 className="w-6 h-6" />
              </div>
              <span className="font-medium">48 Hours Delivery</span>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-medium">
                Access to Private Design Portal
              </span>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </div>
              <span className="font-medium">Unlimited Design Requests</span>
            </div>
          </div>
        </div>
      </main>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-8 relative rounded-full overflow-hidden">
              <Image
                src="/assets/muniz.svg"
                alt="Marty Neumeier"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <blockquote className="text-2xl font-medium mb-4">
              Brand is not what you say,
              <br />
              It is what they say.
            </blockquote>
            <cite className="text-gray-600 not-italic block mb-4">
              - Marty Neumeier
            </cite>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievement</h2>
            <p className="text-xl text-gray-600">
              Curious about what we've accomplished? Let our track record speak
              for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AchievementCard
              image="/assets/brand.avif"
              alt="10+ Brands Saved"
              description="Helping businesses across various industries achieve their goals"
              metric="10+ Projects"
            />
            <AchievementCard
              image=""
              alt="Web Design Process"
              description="A brief description of the web design process achievement."
              metric="5+ Projects"
            />
            <AchievementCard
              image=""
              alt="Savings Graph"
              description="A brief description of the savings achievement."
              metric="20% Increase"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefit of Cre8tee</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Settle for Less? Before you dive in, let's show you why our
              subscription is the game-changer your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={TrendingUp}
              title="Conversion-Focused Design"
              description="We help brands exceed $20M monthly by turning visitors into loyal customers and accelerating growth."
            />
            <BenefitCard
              icon={Zap}
              title="Lightning-Fast Turnaround"
              description="Your design requests are provided to you within a few days, not weeks or months."
            />
            <BenefitCard
              icon={DollarSign}
              title="Affordable Excellence"
              description="No surprises here! Pay the same fixed price each month. No sneaky extras on your bill"
            />
            <BenefitCard
              icon={Search}
              title="Problem Solving"
              description="We solve your brand challenges with innovative solutions that drive real results."
            />
            <BenefitCard
              icon={FolderOpen}
              title="Private Design Portal"
              description="Easily manage your subscription, and design requests from your own personal portal."
            />
            <BenefitCard
              icon={Users}
              title="Access to Senior Designers"
              description="Access to top-tier, experienced designers without the need for long-term contracts or full-time salaries"
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">
              How simple it can be to get <br /> your Projects Done
            </h2>
            <p className="text-lg text-gray-900 tracking-tighter font-medium leading-tight">
              Just step away from those traditional methods of <br />
              hiring and managing and use for yourself
            </p>
          </div>

          <InteractiveSteps />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">
              We are here to Serve...
            </h2>
            <p className="text-lg text-gray-900 tracking-tighter font-medium leading-tight">
              Stop stressing yourself in finding out the perfect person for a{" "}
              <br />
              particular design needs
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Tip: Hover on the images
            </p>
          </div>

          <ServiceGrid />

          <div className="text-center mt-16">
            <p className="text-xl font-normal mb-2">
              This is just the beginning we have some{" "}
              <span className="font-bold">More...</span>
            </p>
          </div>
        </div>
      </section>

      {/* See Our Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2">Still confused about us</p>
            <h2 className="text-4xl font-bold tracking-tight">See our work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Row */}
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <Image
                src="/assets/brand.avif"
                alt="Glass layers design"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <ProjectDrawer
                  title="Sprrrint"
                  description="Sprrrint is a resource website that contains modern design assets like Fonts, Icons, 3D & 2D Illustrations, Courses, Website Templates and Design Systems, and more. It has all the resources that will help young and aspiring designers to start their designer's journey"
                  status="In progress"
                  scope={[
                    "Framer Development",
                    "Brand Design",
                    "Social Media Design",
                    "Webflow Development",
                  ]}
                  cost="Time and Efforts"
                  year="2024"
                  images={[
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                  ]}
                >
                  <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ProjectDrawer>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <Image
                src="/assets/brand.avif"
                alt="DJ Setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <ProjectDrawer
                  title="Sprrrint"
                  description="Sprrrint is a resource website that contains modern design assets like Fonts, Icons, 3D & 2D Illustrations, Courses, Website Templates and Design Systems, and more. It has all the resources that will help young and aspiring designers to start their designer's journey"
                  status="In progress"
                  scope={[
                    "Framer Development",
                    "Brand Design",
                    "Social Media Design",
                    "Webflow Development",
                  ]}
                  cost="Time and Efforts"
                  year="2024"
                  images={[
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                  ]}
                >
                  <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ProjectDrawer>
              </div>
            </div>

            {/* Second Row */}
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <Image
                src="/assets/brand.avif"
                alt="Container architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <ProjectDrawer
                  title="Sprrrint"
                  description="Sprrrint is a resource website that contains modern design assets like Fonts, Icons, 3D & 2D Illustrations, Courses, Website Templates and Design Systems, and more. It has all the resources that will help young and aspiring designers to start their designer's journey"
                  status="In progress"
                  scope={[
                    "Framer Development",
                    "Brand Design",
                    "Social Media Design",
                    "Webflow Development",
                  ]}
                  cost="Time and Efforts"
                  year="2024"
                  images={[
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                  ]}
                >
                  <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ProjectDrawer>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <Image
                src="/assets/brand.avif"
                alt="Fashion photography"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <ProjectDrawer
                  title="Sprrrint"
                  description="Sprrrint is a resource website that contains modern design assets like Fonts, Icons, 3D & 2D Illustrations, Courses, Website Templates and Design Systems, and more. It has all the resources that will help young and aspiring designers to start their designer's journey"
                  status="In progress"
                  scope={[
                    "Framer Development",
                    "Brand Design",
                    "Social Media Design",
                    "Webflow Development",
                  ]}
                  cost="Time and Efforts"
                  year="2024"
                  images={[
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                  ]}
                >
                  <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ProjectDrawer>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="md:col-span-2 relative aspect-[2.5/1] rounded-3xl overflow-hidden group">
              <Image
                src="/assets/brand.avif"
                alt="Project showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <ProjectDrawer
                  title="Branding"
                  description="Brandee is a resource website that contains modern design assets like Fonts, Icons, 3D & 2D Illustrations, Courses, Website Templates and Design Systems, and more. It has all the resources that will help young and aspiring designers to start their designer's journey"
                  status="In progress"
                  scope={[
                    "Brand Design",
                    "Social Media Design",
                    "Webflow Development",
                  ]}
                  cost="Time and Efforts"
                  year="2024"
                  images={[
                    "/assets/brand.avif",
                    "/assets/logo.png",
                    "/assets/brand.avif",
                    "/assets/brand.avif",
                  ]}
                >
                  <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ProjectDrawer>
              </div>
            </div>
          </div>

          {/* Time Zone Bar */}
          <TimeZoneBar />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why choose us?</h2>
            <p className="text-lg text-gray-600">
              Check out what Cre8tee offers Vs employees and other agencies.
              It's quite a lot!
            </p>
          </div>

          <ComparisonTable />

          <div className="text-center mt-16">
            <p className="text-xl font-medium">
              And here comes the <span className="font-bold">Sauce...</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black w-full max-w-screen-2xl mx-auto text-white relative rounded-3xl">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 tracking-tight">
            Pause or Cancel
            <br />
            anytime
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Don't commit to a Designer you've gotta pay even when there's no
            work to give them. Oh heck no!
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span>View Plans and Pricing</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">
              No Contract, No Surprises
            </h2>
            <p className="text-lg text-gray-600">
              Consistent Pricing and Value Each Month,
              <br />
              with the Flexibility to Cancel Anytime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Retainer Plan */}
            <div className="bg-black text-white rounded-3xl p-8">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                    <h3 className="text-2xl font-bold">Retainer</h3>
                  </div>
                  <p className="text-gray-400">
                    Best suited for growing companies or agencies that require
                    ongoing and fast design support.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-green-400">
                    <Plus className="w-4 h-4" />
                    <span>2 Active request at a time</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Plus className="w-4 h-4" />
                    <span>2X Senior designer</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Plus className="w-4 h-4" />
                    <span>Weekly progress meetings</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CircleDot className="w-4 h-4" />
                    <span>2 days turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CircleDot className="w-4 h-4" />
                    <span>Unlimited design requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CircleDot className="w-4 h-4" />
                    <span>Up to 120 hours of design work each month</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CircleDot className="w-4 h-4" />
                    <span>Expert project management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CircleDot className="w-4 h-4" />
                    <span>
                      Communication through Async, Slack, Zoom & Meetings
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">
                      Free Website Development with Framer
                    </span>
                  </div>
                  <div className="relative ml-2 w-12 h-6 bg-gray-800 rounded-full">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-green-400 rounded-full" />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$3499</span>
                      <span className="text-gray-400 ml-2">/ per month</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors">
                      Get Started Today
                    </button>
                    <button className="w-full text-white border border-white/20 py-3 rounded-full hover:bg-white/10 transition-colors">
                      or Book a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Landing Page Design Plan */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <h3 className="text-2xl font-bold">Landing Page Design</h3>
                  </div>
                  <p className="text-gray-600">
                    Bring your dream website to life in just days, not months.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-8">
                  <p className="text-gray-600">
                    Ideal for a single, high-impact landing page designed to
                    maximize conversions.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>Wireframes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>Custom Layout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>Desktop, Tablet, Mobile Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>Brand Consistency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>Figma File</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="w-4 h-4" />
                    <span>3X Revision</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">
                      Website development (Framer)
                    </span>
                  </div>
                  <div className="relative ml-2 w-12 h-6 bg-gray-100 rounded-full">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-gray-400 rounded-full" />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$1499</span>
                      <span className="text-gray-500 ml-2">one time</span>
                    </div>
                  </div>

                  <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition-colors">
                    Book for January
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              We Get It—Curiosity Leads to Success!
              <br />
              Got questions? That's a great sign. Here are some
            </p>
          </div>

          <FaqAccordion />

          <div className="text-center mt-12">
            <p className="text-xl mb-6">Can't find your answer?</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors"
            >
              <span>Send us a Mail</span>
              <SendIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-8 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            If you scrolled this far,
            <br />
            It's time to STEP UP
          </motion.h2>

          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <span>Join the Elite Club</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.p
            className="mt-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Trust me we are good at this :)
          </motion.p>

          {/* Scrolling Task List */}
          <div className="mt-16">
            <ScrollingTasks
              pendingTasks={[
                "Landing Page",
                "Contact Page need to update",
                "Pitch deck urgent",
                "Branding",
                "Landing Page",
                "Contact Page need to update",
              ]}
              completedTasks={[
                "Landing Page",
                "Contact Page need to update",
                "Pitch deck urgent",
                "Branding",
                "Logo",
                "Landing Page",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t mb-12 md:mb-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              © {new Date().getFullYear()} Cre8tee. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              Built with 🫶🏽🩷 by{" "}
              <Link
                href="https://x.com/iamajfred_"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-black hover:text-gray-600 transition-colors"
              >
                Aj Fred
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
