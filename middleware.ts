import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Public paths that don't require authentication
  const publicPaths = [
    "/login",
    "/signup",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
    "/",
  ];
  const isPublicPath = publicPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (!session && !isPublicPath) {
    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (session && !isPublicPath) {
    // For authenticated users, check if email is verified
    const { data: profile } = await supabase
      .from("profiles")
      .select("email_verified")
      .eq("id", session.user.id)
      .single();

    if (!profile?.email_verified) {
      // Redirect users with unverified emails to verification reminder page
      return NextResponse.redirect(new URL("/verify-email", req.url));
    }
  }

  return res;
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
    "/((?!_next/static|_next/image|favicon.ico|assets/|api/).*)",
  ],
};
