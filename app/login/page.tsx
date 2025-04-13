"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <Image
          src="/assets/3-2.jpg"
          alt="Web3 Developers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="flex flex-col justify-end h-full px-12 py-8">
            <div className="max-w-md text-white">
              <h1 className="text-2xl sm:text-4xl font-semibold tracking-tighter mb-6 leading-tight">
                Connect with top Web3 talent worldwide
              </h1>
              <p className="text-base font-normal tracking-tight text-white/90">
                Join thousands of freelancers and clients building the
                decentralized future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="block">
                <Image
                  src="/assets/logo.svg"
                  alt="Hustle Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <h2 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-2">
              Log in
            </h2>
            <p className="text-gray-600 font-normal tracking-tight">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Sign up
              </Link>
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1.5">
                <Link
                  href="/forgot-password"
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 font-medium transition-colors"
            >
              Log In
            </button>

            <div className="relative flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-sm">
                or continue with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/assets/google.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Continue with Google</span>
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-500">
            <div className="flex justify-center space-x-4">
              <Link href="/faqs" className="hover:text-gray-700">
                FAQs
              </Link>
              <Link href="/privacy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-700">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
