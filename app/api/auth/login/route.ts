import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { query } from "@/lib/db";
import { sign } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Add logging to debug
    console.log("Login attempt for email:", email);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Get user with all necessary fields
    const { rows } = await query(
      `SELECT id, email, name, user_type, email_verified, password_hash 
       FROM users 
       WHERE email = $1`,
      [email.toLowerCase()]
    );

    // Add logging to debug
    console.log("Found user:", rows.length > 0);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Check if user has verified their email
    if (!user.email_verified) {
      return NextResponse.json(
        { error: "Please verify your email before logging in" },
        { status: 403 }
      );
    }

    // Debug log for password hash
    console.log("Has password hash:", !!user.password_hash);

    // Check if password_hash exists
    if (!user.password_hash) {
      return NextResponse.json(
        { error: "Account setup incomplete. Please reset your password." },
        { status: 400 }
      );
    }

    // Compare passwords
    const passwordValid = await compare(password, user.password_hash);

    // Debug log for password validation
    console.log("Password valid:", passwordValid);

    if (!passwordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your-fallback-secret",
      { expiresIn: "7d" }
    );

    // Remove sensitive data
    delete user.password_hash;

    return NextResponse.json({
      user,
      token,
      success: true,
    });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Authentication failed: " + error.message },
      { status: 500 }
    );
  }
}
