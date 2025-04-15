import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { query } from "@/lib/db";
import { sign } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Get user with password_hash
    const { rows } = await query(
      "SELECT id, email, name, user_type, email_verified, password_hash FROM users WHERE email = $1",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Check if password_hash exists
    if (!user.password_hash) {
      return NextResponse.json(
        { error: "Account not properly set up" },
        { status: 400 }
      );
    }

    // Compare passwords
    const passwordValid = await compare(password, user.password_hash);

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

    // Remove password_hash from response
    delete user.password_hash;

    return NextResponse.json({
      user,
      token,
      success: true,
    });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
