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

    // Verify OTP
    const { rows } = await query(
      `SELECT id, verification_otp, verification_token_expires_at
       FROM users
       WHERE email = $1`,
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    // Check if OTP is expired
    if (new Date() > new Date(user.verification_token_expires_at)) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    // Check if OTP matches
    if (user.verification_otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Mark email as verified
    await query(
      `UPDATE users
       SET email_verified = true,
           verification_otp = NULL,
           verification_token_expires_at = NULL
       WHERE id = $1`,
      [user.id]
    );

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
