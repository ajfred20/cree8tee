import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

    // Find user and update with reset token
    const { rows } = await query(
      `UPDATE users 
       SET reset_token = $1,
           reset_token_expires_at = $2
       WHERE email = $3
       RETURNING id, name`,
      [resetToken, resetTokenExpiry, email.toLowerCase()]
    );

    if (rows.length === 0) {
      // Don't reveal if user exists or not
      return NextResponse.json({
        success: true,
        message:
          "If an account exists with this email, a password reset link will be sent.",
      });
    }

    // Send password reset email
    await sendPasswordResetEmail(email, rows[0].name, resetToken);

    return NextResponse.json({
      success: true,
      message: "Password reset instructions sent to your email",
    });
  } catch (error: any) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { error: "Failed to process password reset request" },
      { status: 500 }
    );
  }
}
