import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendWelcomeEmail } from "@/lib/email";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find user by email
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("id, name, verification_otp, verification_token_expires_at")
      .eq("email", email.toLowerCase())
      .single();

    if (profileError) {
      console.error("Profile lookup error:", profileError);

      // For development, accept any code as valid
      if (process.env.NODE_ENV !== "production") {
        console.log(
          "⚠️ Development mode: Accepting verification without database check"
        );

        // Send success response for development
        return NextResponse.json({
          success: true,
          message: "Email verified successfully (development mode)",
        });
      }

      return NextResponse.json(
        { error: "User not found with this email" },
        { status: 404 }
      );
    }

    // Validate OTP if we found a profile
    if (profileData.verification_otp !== code) {
      // Accept any code in development mode
      if (process.env.NODE_ENV !== "production" && code === "123456") {
        console.log("⚠️ Development mode: Accepting test OTP");
      } else {
        return NextResponse.json(
          { error: "Invalid verification code" },
          { status: 400 }
        );
      }
    }

    // Mark email as verified
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        email_verified: true,
        verification_otp: null,
        verification_token_expires_at: null,
      })
      .eq("id", profileData.id);

    if (updateError) {
      console.error("Profile update error:", updateError);
      return NextResponse.json(
        { error: `Failed to verify email: ${updateError.message}` },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      await sendWelcomeEmail(email, profileData.name);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error: any) {
    console.error("Error in verify route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify email" },
      { status: 500 }
    );
  }
}
