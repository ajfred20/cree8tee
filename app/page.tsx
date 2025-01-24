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
} from "lucide-react";
import { AchievementCard } from "@/components/achievement-card";
import { BenefitCard } from "@/components/benefit-card";
import { InteractiveSteps } from "@/components/interactive-steps";
import { ServiceGrid } from "@/components/service-grid";

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
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
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

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We don't just design, we solve your brand's biggest challenges
        </p>

        <Link
          href="#"
          className="inline-flex bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
        >
          View Plans and Pricing
        </Link>

        {/* Features */}
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
            <span className="font-medium">Access to Private Design Portal</span>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <span className="font-medium">Unlimited Design Requests</span>
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
    </div>
  );
}
