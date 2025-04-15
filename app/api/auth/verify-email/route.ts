import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Find user by email and verify OTP
    const { rows } = await query(
      `SELECT * FROM users 
       WHERE email = $1 
       AND verification_otp = $2 
       AND verification_token_expires_at > NOW()`,
      [email.toLowerCase(), otp]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid or expired verification code" },
        { status: 400 }
      );
    }

    // Update user as verified
    await query(
      `UPDATE users 
       SET email_verified = true, 
           verification_otp = NULL, 
           verification_token_expires_at = NULL 
       WHERE email = $1`,
      [email.toLowerCase()]
    );

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error: any) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify email" },
      { status: 500 }
    );
  }
}
