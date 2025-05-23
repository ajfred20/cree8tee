"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [civicLoaded, setCivicLoaded] = useState(false);
  const [civicInitialized, setCivicInitialized] = useState(false);
  const [civicButton, setCivicButton] = useState<any>(null);

  const { signup, loading } = useAuth();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
  };

  const handleNextStep = () => {
    if (step === 1 && userType) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreedToTerms) {
      setError("You must agree to the Terms and Privacy Policy");
      return;
    }

    if (!userType) {
      setError("Please select your user type");
      return;
    }

    try {
      await signup(email, password, fullName, userType);
    } catch (error: any) {
      setError(error.message || "Failed to create account");
    }
  };

  useEffect(() => {
    const loadCivicScript = async () => {
      if (typeof window !== "undefined" && !window.civic) {
        const script = document.createElement("script");
        script.src = "https://hosted-sip.civic.com/js/civic.sip.min.js";
        script.async = true;
        script.onload = () => setCivicLoaded(true);
        document.body.appendChild(script);
      } else {
        setCivicLoaded(true);
      }
    };

    loadCivicScript();
  }, []);

  useEffect(() => {
    // Load Civic Auth SDK
    const initCivic = async () => {
      if (typeof window !== "undefined" && !civicInitialized && userType) {
        try {
          const CivicAuth = (await import("@civic/auth")).default;

          // Initialize Civic Auth
          const civicAuth = new CivicAuth({
            clientId: process.env.NEXT_PUBLIC_CIVIC_CLIENT_ID as string,
            redirectUrl: window.location.origin + "/auth/callback",
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
                body: JSON.stringify({ token, userType }),
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

    if (userType) {
      initCivic();
    }

    return () => {
      // Cleanup
      if (civicButton) {
        civicButton.unmount();
      }
    };
  }, [civicInitialized, userType, router]);

  const handleCivicAuth = () => {
    if (!civicLoaded) return;

    const civic = new window.civic.sip({
      applicationId: process.env.NEXT_PUBLIC_CIVIC_APP_ID,
    });

    civic.on("auth-code-received", async (event) => {
      try {
        const response = await fetch("/api/auth/civic-verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: event.response,
            userType: userType,
          }),
        });

        const data = await response.json();
        if (data.success) {
          // Handle successful signup
          // This will depend on your auth implementation
        } else {
          setError(data.message || "Failed to authenticate with Civic");
        }
      } catch (error) {
        setError("Error authenticating with Civic");
      }
    });

    civic.on("user-cancelled", () => {
      setError("Civic authentication was cancelled");
    });

    civic.on("civic-sip-error", (error) => {
      setError(`Civic error: ${error.message}`);
    });

    civic.signup({ style: "popup", redirectUrl: window.location.href });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <Image
          src="/assets/2-9.jpg"
          alt="Web3 Developers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="flex flex-col justify-end h-full px-12 py-8">
            <div className="max-w-md text-white">
              <h1 className="text-2xl sm:text-5xl font-semibold tracking-tighter mb-6 leading-tight">
                Start your journey in the Web3 economy
              </h1>
              <p className="text-base font-normal tracking-tight text-white/90">
                Create your account and unlock exciting opportunities in the
                decentralized world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Signup Form */}
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
              {step === 1 ? "Sign up" : "Create your account"}
            </h2>
            <p className="text-sm font-normal tracking-tight text-gray-600">
              {step === 1
                ? "Select how you want to use Hustle"
                : "Complete your details to start connecting"}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {step === 1 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <button
                  type="button"
                  onClick={() => handleUserTypeSelect("freelancer")}
                  className={`relative p-6 border-2 rounded-md text-left transition-all ${
                    userType === "freelancer"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {userType === "freelancer" && (
                    <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                  <div className="mb-2">
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-gray-900">
                    I'm a Freelancer
                  </h3>
                  <p className="mt-1 text-sm font-normal tracking-tight text-gray-500">
                    I want to find Web3 projects, showcase my skills, and earn
                    crypto
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleUserTypeSelect("client")}
                  className={`relative p-6 border-2 rounded-md text-left transition-all ${
                    userType === "client"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {userType === "client" && (
                    <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                  <div className="mb-2">
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
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-gray-900">
                    I'm a Talent Seeker
                  </h3>
                  <p className="mt-1 text-sm font-normal tracking-tight text-gray-500">
                    I want to hire blockchain experts for my Web3 projects
                  </p>
                </button>
              </div>

              <button
                onClick={handleNextStep}
                disabled={!userType}
                className={`w-full px-4 py-3 rounded-md font-medium transition-colors ${
                  userType
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

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
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="Create a password"
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
                <p className="mt-1 text-xs text-gray-500">
                  8+ characters with letters, numbers & symbols
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree to Hustle's{" "}
                  <Link
                    href="/terms"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors sm:w-1/3"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 font-medium transition-colors sm:w-2/3 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>

              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600 text-sm">
                  or sign up with
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
          )}

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
