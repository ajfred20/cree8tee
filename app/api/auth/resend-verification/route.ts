import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendVerificationEmail } from "@/lib/email";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate a new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date();
    otpExpiry.setHours(otpExpiry.getHours() + 24);

    // Find the user by email
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("id, name")
      .eq("email", email.toLowerCase())
      .single();

    if (profileError) {
      console.error("Profile lookup error:", profileError);
      return NextResponse.json(
        { error: "User not found with this email" },
        { status: 404 }
      );
    }

    // Update verification data
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        verification_otp: otp,
        verification_token_expires_at: otpExpiry.toISOString(),
      })
      .eq("id", profileData.id);

    if (updateError) {
      console.error("Profile update error:", updateError);
      return NextResponse.json(
        { error: `Failed to update profile: ${updateError.message}` },
        { status: 500 }
      );
    }

    // Send verification email
    await sendVerificationEmail(email, profileData.name, otp);

    return NextResponse.json({
      success: true,
      message: "Verification code resent",
    });
  } catch (error: any) {
    console.error("Error resending verification:", error);
    return NextResponse.json(
      { error: error.message || "Failed to resend verification" },
      { status: 500 }
    );
  }
}
