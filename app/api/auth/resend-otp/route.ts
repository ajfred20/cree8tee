import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Update user with new OTP
    const { rows } = await query(
      `UPDATE users 
       SET verification_otp = $1,
           verification_token_expires_at = NOW() + INTERVAL '30 minutes'
       WHERE email = $2
       RETURNING id, name, email`,
      [otp, email.toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Send the new OTP via email
    // You can import and use your email sending function here
    // await sendVerificationEmail(email, rows[0].name, otp);

    return NextResponse.json({
      success: true,
      message: "New OTP has been sent to your email",
    });
  } catch (error: any) {
    console.error("Error resending OTP:", error);
    return NextResponse.json(
      { error: "Failed to resend OTP" },
      { status: 500 }
    );
  }
}
