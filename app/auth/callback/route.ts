import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL("/waitlist", request.url));
}
