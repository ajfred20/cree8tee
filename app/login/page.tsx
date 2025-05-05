"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const router = useRouter();
  const [civicInitialized, setCivicInitialized] = useState(false);
  const [civicButton, setCivicButton] = useState<any>(null);

  useEffect(() => {
    // Load Civic Auth SDK
    const initCivic = async () => {
      if (typeof window !== "undefined" && !civicInitialized) {
        try {
          const CivicAuth = (await import("@civic/auth")).default;

          // Initialize Civic Auth
          const civicAuth = new CivicAuth({
            clientId: process.env.NEXT_PUBLIC_CIVIC_CLIENT_ID as string,
            redirectUrl: window.location.origin + "/auth/callback", // You'll need a callback route
            chainConfig: {
              solana: {
                network: "mainnet",
              },
            },
          });

          // Create Civic button instance
          const button = civicAuth.mountButton({
            selector: "#civic-button-container",
            buttonConfig: {
              variant: "default",
              size: "lg",
              text: "Continue with Civic",
            },
          });

          // Handle authentication
          button.on("auth", async (authEvent) => {
            try {
              const { token } = authEvent;

              // Send token to your API for verification
              const response = await fetch("/api/auth/civic-verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
              });

              const data = await response.json();
              if (data.success) {
                // Redirect to dashboard or appropriate page
                router.push("/dashboard");
              } else {
                setError(data.message || "Failed to authenticate with Civic");
              }
            } catch (error) {
              setError("Error authenticating with Civic");
            }
          });

          setCivicButton(button);
          setCivicInitialized(true);
        } catch (error) {
          console.error("Failed to load Civic Auth:", error);
        }
      }
    };

    initCivic();

    return () => {
      // Cleanup
      if (civicButton) {
        civicButton.unmount();
      }
    };
  }, [civicInitialized, router]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
    } catch (error: any) {
      setError(error.message || "Failed to log in");
    }
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

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
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
              disabled={loading}
              className="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 font-medium transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In"}
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
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-3"
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

            {/* Civic Auth Button Container */}
            <div id="civic-button-container" className="w-full"></div>

            {/* Fallback button in case Civic doesn't load */}
            {!civicInitialized && (
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="#3AB03E"
                  />
                  <path
                    d="M28.0893 15.5547H25.7656V24.668H28.0893V15.5547Z"
                    fill="white"
                  />
                  <path
                    d="M15.1113 16.7773C13.3336 16.7773 11.9082 18.2441 11.9082 20.1113C11.9082 21.9785 13.3336 23.4453 15.1113 23.4453C16.889 23.4453 18.3144 21.9785 18.3144 20.1113C18.3144 18.2441 16.889 16.7773 15.1113 16.7773ZM15.1113 26H11.9082V30.2227H15.1113V26Z"
                    fill="white"
                  />
                  <path
                    d="M21.5566 12H18.3535V30.2227H21.5566V12Z"
                    fill="white"
                  />
                </svg>
                <span>Continue with Civic</span>
              </button>
            )}
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
