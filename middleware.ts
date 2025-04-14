import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  const publicPaths = ["/", "/login", "/signup", "/terms", "/privacy", "/faqs"];

  const path = request.nextUrl.pathname;

  // Check if the path is public
  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = request.cookies.get("auth-token")?.value;

  // If there's no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

    // If the token is valid, let's handle the special case for email verification
    if (path === "/verify-email") {
      // Only allow access to verify-email if user exists but is not verified
      // This check would ideally happen with an API call, but for simplicity
      // we'll just allow access to the page and let client-side handle it
      return NextResponse.next();
    }

    // Token is valid, continue
    return NextResponse.next();
  } catch (error) {
    // Token is invalid, redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
