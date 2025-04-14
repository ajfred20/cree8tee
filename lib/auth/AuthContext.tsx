"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session, User } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import crypto from "crypto";

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
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: { name?: string; user_type?: string }) => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<boolean>;
  resendVerification: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      setLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error.message);
      } else {
        setSession(session);
        setUser(session?.user ?? null);
      }
      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, newSession: Session | null) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const signup = async (
    email: string,
    password: string,
    fullName: string,
    userType: string
  ) => {
    try {
      setLoading(true);
      setError(null);

      // 1. Create user in Supabase auth system
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: fullName,
            user_type: userType,
          },
        },
      });

      if (authError) throw new Error(authError.message);
      if (!authData.user) throw new Error("Failed to create user");

      console.log("User created:", authData.user.id);

      // 2. Generate a 6-digit numeric OTP instead of a long token
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpExpiry = new Date();
      otpExpiry.setHours(otpExpiry.getHours() + 24); // 24 hour expiry

      // 3. Check if the user exists in auth.users
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) {
        console.error("Error getting auth user:", userError.message);
      }

      console.log("Auth user check:", userData);

      // 4. Wait a bit for Supabase's system to fully process the user creation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 5. Create or update the user's profile with our verification data
      try {
        // First try an upsert operation which is safer
        const { error: upsertError } = await supabase.from("profiles").upsert(
          {
            id: authData.user.id,
            email: email,
            name: fullName,
            user_type: userType,
            email_verified: false,
            verification_otp: otp,
            verification_token_expires_at: otpExpiry.toISOString(),
          },
          { onConflict: "id" }
        );

        if (upsertError) {
          console.error("Profile upsert error:", upsertError.message);
          throw upsertError;
        }
      } catch (profileError: any) {
        console.error("Profile update failed:", profileError.message);

        // If we can't create the profile, we should still save the verification token somewhere
        // Let's use localStorage as a fallback
        if (typeof window !== "undefined") {
          localStorage.setItem("verificationOtp", otp);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userName", fullName);
          localStorage.setItem("userId", authData.user.id);
        }
      }

      // 6. Send verification email
      try {
        const response = await fetch("/api/auth/send-verification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: fullName,
            otp: otp,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          console.error("Email sending error:", data.error);
        }
      } catch (emailError: any) {
        console.error("Failed to send email:", emailError.message);
      }

      // Always store token in localStorage for debugging and recovery
      if (typeof window !== "undefined") {
        localStorage.setItem("verificationOtp", otp);
        localStorage.setItem("userEmail", email);
      }

      // 7. Redirect to custom verification page
      router.push("/verify-email");
      return true;
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Sign in the user with Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user email is verified
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("email_verified")
        .eq("id", data.user.id)
        .single();

      if (profileError) throw profileError;

      // If email is not verified, redirect to verification page
      if (!profileData.email_verified) {
        router.push("/verify-email?email=" + encodeURIComponent(email));
        return;
      }

      // Email is verified, redirect to waitlist page
      router.push("/waitlist");
    } catch (error: any) {
      console.error("Error logging in:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/login");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
      });
      if (error) throw error;
    } catch (error: any) {
      console.error("Error resetting password:", error.message);
      throw error;
    }
  };

  const updateProfile = async (data: { name?: string; user_type?: string }) => {
    try {
      if (!user) throw new Error("No user logged in");

      // Update auth metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data,
      });

      if (updateError) throw updateError;

      // Update profile table
      const { error: profileError } = await supabase
        .from("profiles")
        .update(data)
        .eq("id", user.id);

      if (profileError) throw profileError;
    } catch (error: any) {
      console.error("Error updating profile:", error.message);
      throw error;
    }
  };

  const verifyEmail = async (email: string, otp: string) => {
    setLoading(true);
    try {
      // Find the user by email first
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", email)
        .single();

      if (profileError) {
        throw new Error("User not found. Please check your email address.");
      }

      // Verify the OTP
      if (profileData.verification_otp !== otp) {
        throw new Error("Invalid verification code. Please try again.");
      }

      // Check if OTP is expired
      const otpExpiry = new Date(profileData.verification_token_expires_at);
      if (otpExpiry < new Date()) {
        throw new Error(
          "Verification code has expired. Please request a new one."
        );
      }

      // Mark email as verified and clear the OTP
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          email_verified: true,
          verification_otp: null,
          verification_token_expires_at: null,
        })
        .eq("id", profileData.id);

      if (updateError) throw updateError;

      // Send welcome email
      try {
        await fetch("/api/auth/send-welcome", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: profileData.email,
            name: profileData.name,
          }),
        });
      } catch (emailError) {
        console.error("Error sending welcome email:", emailError);
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
      // Find the user by email
      const { data: profiles, error: findProfileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", email)
        .single();

      if (findProfileError) {
        throw new Error("User not found");
      }

      // Generate a new OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpExpiry = new Date();
      otpExpiry.setHours(otpExpiry.getHours() + 24);

      // Update the profile with the new OTP
      const { error: updateProfileError } = await supabase
        .from("profiles")
        .update({
          verification_otp: otp,
          verification_token_expires_at: otpExpiry.toISOString(),
        })
        .eq("id", profiles.id);

      if (updateProfileError) throw updateProfileError;

      // Send a new verification email
      const response = await fetch("/api/auth/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: profiles.name || "User",
          otp: otp,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to send verification email");
      }

      return true;
    } catch (error: any) {
      console.error("Error resending verification:", error.message);
      throw error;
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
