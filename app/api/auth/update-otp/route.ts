import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Update user's OTP
    const { rows } = await query(
      `UPDATE users 
       SET verification_otp = $1,
           verification_token_expires_at = NOW() + INTERVAL '30 minutes'
       WHERE email = $2
       RETURNING id`,
      [otp, email.toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      otp,
    });
  } catch (error: any) {
    console.error("Error updating OTP:", error);
    return NextResponse.json(
      { error: "Failed to update OTP" },
      { status: 500 }
    );
  }
}
