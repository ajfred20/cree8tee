"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session, User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signup: (
    email: string,
    password: string,
    fullName: string,
    userType: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: { name?: string; user_type?: string }) => Promise<void>;
  verifyEmail: (token: string) => Promise<boolean>;
  resendVerification: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
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
    setLoading(true);
    try {
      // Step 1: Sign up the user with Supabase Auth
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

      if (authError) throw authError;

      // Step 2: Generate a verification token
      const verificationToken = crypto.randomBytes(32).toString("hex");
      const tokenExpiry = new Date();
      tokenExpiry.setHours(tokenExpiry.getHours() + 24); // 24 hour expiry

      // Step 3: Update the user's profile with the verification token
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          verification_token: verificationToken,
          verification_token_expires_at: tokenExpiry.toISOString(),
          // Note: email_verified should be false by default in your table
        })
        .eq("id", authData.user!.id);

      if (profileError) throw profileError;

      // Step 4: Send a verification email
      try {
        // Make API call to custom endpoint that will send the email
        const response = await fetch("/api/auth/send-verification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: fullName,
            token: verificationToken,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Failed to send verification email");
        }
      } catch (emailError: any) {
        console.error("Error sending verification email:", emailError);
        // Continue despite email error - user can request a new verification email
      }

      // Redirect to verification page
      router.push("/verify-email?email=" + encodeURIComponent(email));
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      throw error;
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

  const verifyEmail = async (token: string) => {
    setLoading(true);
    try {
      // Step 1: Find the user with this verification token
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("verification_token", token)
        .single();

      if (profileError || !profileData) {
        throw new Error("Invalid or expired verification token");
      }

      // Step 2: Check if token is expired
      const tokenExpiry = new Date(profileData.verification_token_expires_at);
      if (tokenExpiry < new Date()) {
        throw new Error("Verification token has expired");
      }

      // Step 3: Mark the email as verified and clear the token
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          email_verified: true,
          verification_token: null,
          verification_token_expires_at: null,
        })
        .eq("id", profileData.id);

      if (updateError) throw updateError;

      // Step 4: Send welcome email
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
        // Continue despite email error
      }

      // If user is already logged in, update their session info
      if (user) {
        const { data: userMeta } = await supabase.auth.getUser();
        setUser(userMeta.user);
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
      // Step 1: Find the user by email
      const { data: userData, error: userError } =
        await supabase.auth.admin.getUserByEmail(email);

      if (userError || !userData?.user) {
        throw new Error("User not found");
      }

      // Step 2: Generate a new verification token
      const verificationToken = crypto.randomBytes(32).toString("hex");
      const tokenExpiry = new Date();
      tokenExpiry.setHours(tokenExpiry.getHours() + 24); // 24 hour expiry

      // Step 3: Update the user's profile with the new verification token
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          verification_token: verificationToken,
          verification_token_expires_at: tokenExpiry.toISOString(),
        })
        .eq("id", userData.user.id);

      if (profileError) throw profileError;

      // Step 4: Send a new verification email
      const response = await fetch("/api/auth/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: userData.user.user_metadata.name,
          token: verificationToken,
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
