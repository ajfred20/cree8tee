import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sign } from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const email = requestUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.redirect(
        new URL("/login?error=missing_email", request.url)
      );
    }

    // Find user in our database
    const { rows } = await query(
      `SELECT id, email, name, user_type, email_verified 
       FROM users 
       WHERE email = $1`,
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.redirect(
        new URL("/login?error=user_not_found", request.url)
      );
    }

    const user = rows[0];

    // Create session token
    const token = sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        userType: user.user_type,
      },
      process.env.JWT_SECRET || "your-fallback-secret",
      { expiresIn: "7d" }
    );

    // Set cookie with the token
    const cookieStore = cookies();
    (await cookieStore).set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Check if email is verified
    if (!user.email_verified) {
      return NextResponse.redirect(
        new URL(`/verify-email?email=${encodeURIComponent(email)}`, request.url)
      );
    }

    // Redirect to waitlist or dashboard based on verification status
    return NextResponse.redirect(new URL("/waitlist", request.url));
  } catch (error) {
    console.error("Callback error:", error);
    return NextResponse.redirect(
      new URL("/login?error=callback_failed", request.url)
    );
  }
}
