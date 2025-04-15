import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Pages that don't require authentication
  const publicPaths = ["/login", "/signup", "/verify-email", "/reset-password"];
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    verify(token, process.env.JWT_SECRET || "your-fallback-secret");
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/signup",
    "/verify-email",
    "/reset-password",
  ],
};
