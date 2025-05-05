import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { redirect } from "next/navigation";

// Using a simpler token generation method that's Edge compatible
function generateToken(length = 32) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

export async function GET(req: NextRequest) {
  // Get the token from the URL
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    // Redirect to login page if no token
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify the token with Civic
    const response = await fetch(`${url.origin}/api/auth/civic-verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to dashboard or appropriate page on successful auth
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      // Redirect to login page with error
      return NextResponse.redirect(
        new URL(
          `/login?error=${encodeURIComponent(
            data.message || "Authentication failed"
          )}`,
          req.url
        )
      );
    }
  } catch (error) {
    console.error("Auth callback error:", error);
    return NextResponse.redirect(
      new URL("/login?error=Authentication+failed", req.url)
    );
  }
}
