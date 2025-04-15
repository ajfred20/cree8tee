import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 }
      );
    }

    // Find user with valid reset token
    const { rows } = await query(
      `SELECT id, email 
       FROM users 
       WHERE reset_token = $1 
       AND reset_token_expires_at > NOW()`,
      [token]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await hash(password, 10);

    // Update user's password and clear reset token
    await query(
      `UPDATE users 
       SET password_hash = $1,
           reset_token = NULL,
           reset_token_expires_at = NULL
       WHERE id = $2`,
      [hashedPassword, rows[0].id]
    );

    return NextResponse.json({
      success: true,
      message: "Password has been reset successfully",
    });
  } catch (error: any) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { error: "Failed to reset password" },
      { status: 500 }
    );
  }
}

// Add GET method to verify token before showing reset form
export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Reset token is required" },
        { status: 400 }
      );
    }

    // Check if token exists and is valid
    const { rows } = await query(
      `SELECT EXISTS (
         SELECT 1 
         FROM users 
         WHERE reset_token = $1 
         AND reset_token_expires_at > NOW()
       ) as valid`,
      [token]
    );

    return NextResponse.json({
      valid: rows[0]?.valid || false,
    });
  } catch (error: any) {
    console.error("Token verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify reset token" },
      { status: 500 }
    );
  }
}
