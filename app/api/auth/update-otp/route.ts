import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, otp, otpExpiry } = await request.json();

    if (!userId || !otp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Use server-side supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Update verification OTP
    const { error } = await supabase
      .from("profiles")
      .update({
        verification_otp: otp,
        verification_token_expires_at: otpExpiry,
      })
      .eq("id", userId);

    if (error) {
      console.error("Error updating OTP:", error);
      return NextResponse.json(
        { error: "Failed to update verification code" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error updating OTP:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update verification code" },
      { status: 500 }
    );
  }
}
