import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// Using a simpler token generation method that's Edge compatible
function generateToken(length = 32) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
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
    const sessionToken = generateToken();

    // Store the session token in the database
    await query(
      `UPDATE users 
       SET session_token = $1, 
           session_expires_at = NOW() + INTERVAL '7 days' 
       WHERE id = $2`,
      [sessionToken, user.id]
    );

    // Set cookie with the session token
    const cookieStore = await cookies();
    cookieStore.set("auth-token", sessionToken, {
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
