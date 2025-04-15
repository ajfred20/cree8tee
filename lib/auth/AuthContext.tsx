"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import crypto from "crypto";

// Define types to replace Supabase types
interface User {
  id: string;
  email: string;
  name?: string;
  user_type?: string;
  email_verified: boolean;
}

interface Session {
  user: User;
  token: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signup: (
    email: string,
    password: string,
    fullName: string,
    userType: string
  ) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: { name?: string; user_type?: string }) => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<boolean>;
  resendVerification: (email: string) => Promise<boolean>;
  requestPasswordReset: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session in localStorage
    const checkSession = () => {
      const storedSession = localStorage.getItem("session");
      if (storedSession) {
        const parsedSession = JSON.parse(storedSession);
        setSession(parsedSession);
        setUser(parsedSession.user);
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  const signup = async (
    email: string,
    password: string,
    fullName: string,
    userType: string
  ) => {
    try {
      setLoading(true);
      setError(null);

      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpExpiry = new Date();
      otpExpiry.setHours(otpExpiry.getHours() + 24);

      // Create user profile
      const response = await fetch("/api/auth/create-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: fullName,
          userType,
          otp,
          otpExpiry: otpExpiry.toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create profile");
      }

      // Send verification email
      await fetch("/api/auth/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: fullName,
          otp,
        }),
      });

      // Store verification data in localStorage
      localStorage.setItem("verificationOtp", otp);
      localStorage.setItem("userEmail", email);

      router.push("/verify-email");
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Set user and session in state and localStorage
      const sessionData = {
        user: data.user,
        token: data.token,
      };

      setUser(data.user);
      setSession(sessionData);
      localStorage.setItem("session", JSON.stringify(sessionData));

      router.push("/waitlist");
      return true;
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      setSession(null);
      localStorage.removeItem("session");
      router.push("/login");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.error("Error resetting password:", error.message);
      throw error;
    }
  };

  const updateProfile = async (data: { name?: string; user_type?: string }) => {
    try {
      if (!user) throw new Error("No user logged in");

      const response = await fetch("/api/auth/update-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, userId: user.id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Update local user state with new data
      setUser({ ...user, ...data });
    } catch (error: any) {
      console.error("Error updating profile:", error.message);
      throw error;
    }
  };

  const verifyEmail = async (email: string, otp: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }

      return true;
    } catch (error: any) {
      console.error("Error verifying email:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resendVerification = async (email: string) => {
    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      return true;
    } catch (error: any) {
      console.error("Error resending verification:", error.message);
      throw error;
    }
  };

  const requestPasswordReset = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/auth/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signup,
        login,
        logout,
        resetPassword,
        updateProfile,
        verifyEmail,
        resendVerification,
        requestPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
