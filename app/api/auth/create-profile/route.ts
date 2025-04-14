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

    // Check if profile exists
    const { data: existingProfile, error: checkError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    if (checkError && !checkError.message.includes("No rows found")) {
      console.error("Error checking profile:", checkError);
      return NextResponse.json(
        { error: "Error checking profile" },
        { status: 500 }
      );
    }

    if (existingProfile) {
      // Update existing profile
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
        console.error("Error updating profile:", updateError);
        return NextResponse.json(
          { error: "Failed to update profile" },
          { status: 500 }
        );
      }
    } else {
      // Create new profile
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
        console.error("Error inserting profile:", insertError);
        return NextResponse.json(
          { error: "Failed to create profile" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create profile" },
      { status: 500 }
    );
  }
}
