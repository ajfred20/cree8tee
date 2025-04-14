import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function verifyAuth(request: NextRequest): Promise<string | null> {
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return verified.payload.userId as string;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
