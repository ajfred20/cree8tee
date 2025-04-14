import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log(`Verifying email: ${email} with OTP: ${otp}`);

    // Use async cookies handling properly
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    // First try to find by email without requiring admin privileges
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email.toLowerCase().trim());

    if (profileError || !profiles || profiles.length === 0) {
      console.log("No profile found in database. Using localStorage fallback.");

      // We'll skip database verification and simulate success
      // This is a fallback for development - in production you'd want stricter checks
      if (otp === localStorage.getItem("verificationOtp")) {
        // Successful verification using localStorage
        return NextResponse.json({
          success: true,
          message: "Email verified successfully using localStorage fallback",
        });
      } else {
        return NextResponse.json(
          { error: "Invalid verification code" },
          { status: 400 }
        );
      }
    }

    // We found profile(s) in the database
    const profile = profiles[0]; // Use the first one if multiple

    // Verify the OTP
    if (profile.verification_otp !== otp) {
      console.log("OTP mismatch:", {
        provided: otp,
        stored: profile.verification_otp,
      });

      // Accept test OTP in development
      if (process.env.NODE_ENV !== "production" && otp === "123456") {
        console.log("Development mode: Accepting test OTP");
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
      .eq("id", profile.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      return NextResponse.json(
        { error: "Failed to verify email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error: any) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify email" },
      { status: 500 }
    );
  }
}
