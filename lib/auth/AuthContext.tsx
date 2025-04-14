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

      // 1. Create user in Supabase auth
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

      // 2. Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpExpiry = new Date();
      otpExpiry.setHours(otpExpiry.getHours() + 24);

      // 3. Call our API to create profile
      const profileResponse = await fetch("/api/auth/create-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: authData.user.id,
          email,
          name: fullName,
          userType,
          otp,
          otpExpiry: otpExpiry.toISOString(),
        }),
      });

      if (!profileResponse.ok) {
        const errorData = await profileResponse.json();
        throw new Error(errorData.error || "Failed to create profile");
      }

      // 4. Send verification email
      const emailResponse = await fetch("/api/auth/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: fullName,
          otp,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error("Error sending verification email:", errorData.error);
      }

      // 5. Store in localStorage as well
      localStorage.setItem("verificationOtp", otp);
      localStorage.setItem("userEmail", email);

      // 6. Redirect to verification page
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

      // Attempt to sign in
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        // Check if we need to show a special message for unverified emails
        // First check if user exists
        const { data: userData, error: userError } = await supabase.auth.signUp(
          {
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
          }
        );

        if (userError && userError.message.includes("already exists")) {
          // User exists but can't login, likely email not verified
          const { data: profileData } = await supabase
            .from("profiles")
            .select("email_verified")
            .eq("email", email)
            .single();

          if (profileData && profileData.email_verified === false) {
            throw new Error(
              "Email not verified. Please check your email for the verification code."
            );
          }
        }

        // Default error for invalid login
        throw new Error(signInError.message || "Invalid login credentials");
      }

      if (!data?.user) {
        throw new Error("Login failed - user not found");
      }

      // Check if email has been verified in profiles table
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("email_verified")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.error("Error checking profile:", profileError);
      } else if (profileData && profileData.email_verified === false) {
        // Log the user out if email isn't verified
        await supabase.auth.signOut();
        throw new Error(
          "Email not verified. Please check your email for the verification code."
        );
      }

      // Successful login with verified email
      setUser(data.user);
      router.push("/dashboard");
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

  const requestPasswordReset = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      // Check if user exists
      const { data: profiles, error: findProfileError } = await supabase
        .from("profiles")
        .select("id, name")
        .eq("email", email)
        .single();

      if (findProfileError) {
        throw new Error("No account found with this email address");
      }

      // Generate a reset token
      const resetToken = crypto.randomBytes(32).toString("hex");
      const tokenExpiry = new Date();
      tokenExpiry.setHours(tokenExpiry.getHours() + 1); // 1 hour expiry

      // Update the profile with the reset token
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          reset_token: resetToken,
          reset_token_expires_at: tokenExpiry.toISOString(),
        })
        .eq("id", profiles.id);

      if (updateError) throw updateError;

      // Send password reset email
      const response = await fetch("/api/auth/send-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: profiles.name || "User",
          token: resetToken,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send password reset email");
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
