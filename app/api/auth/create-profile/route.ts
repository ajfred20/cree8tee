import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, email, name, userType, otp, otpExpiry } =
      await request.json();

    if (!userId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Use server-side client with admin privileges
    const supabase = createRouteHandlerClient({ cookies });

    try {
      // Don't check auth user - it's a new signup so there's no active session yet
      // Just directly create the profile

      // Try insert first
      const { error: insertError } = await supabase.from("profiles").insert({
        id: userId,
        email,
        name,
        user_type: userType,
        email_verified: false,
        verification_otp: otp,
        verification_token_expires_at: otpExpiry,
      });

      if (insertError) {
        console.error("Insert failed:", insertError);

        // Try update if insert fails
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            email,
            name,
            user_type: userType,
            email_verified: false,
            verification_otp: otp,
            verification_token_expires_at: otpExpiry,
          })
          .eq("id", userId);

        if (updateError) {
          console.error("Update also failed:", updateError);
          return NextResponse.json(
            { error: "Failed to create or update profile" },
            { status: 500 }
          );
        }
      }

      return NextResponse.json({
        success: true,
        message: "Profile created/updated successfully",
      });
    } catch (error: any) {
      console.error("Error during profile creation:", error);
      return NextResponse.json(
        { error: "Server error: " + error.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
