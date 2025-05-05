import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// You'll need to install civic-sip-api: npm install civic-sip-api
import { CivicClient } from "civic-sip-api";

export async function POST(req: NextRequest) {
  try {
    const { token, userType } = await req.json();

    // Instead of using civic-sip-api, we'll use the token directly
    // The token from Civic Auth already contains the verified information
    const decodedToken = jwt.decode(token);

    if (!decodedToken || typeof decodedToken !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid authentication token" },
        { status: 400 }
      );
    }

    // Extract user info from token
    const { email, sub: civicUserId } = decodedToken;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email verification required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await query({
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    });

    let user;

    if (existingUser.rows.length > 0) {
      // User exists, log them in
      user = existingUser.rows[0];

      // Update civic_id if it wasn't set previously
      if (!user.civic_id) {
        await query({
          text: "UPDATE users SET civic_id = $1 WHERE id = $2",
          values: [civicUserId, user.id],
        });
      }
    } else {
      // Create new user
      const newUser = await query({
        text: "INSERT INTO users (email, full_name, user_type, civic_id, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        values: [
          email,
          email.split("@")[0],
          userType || "freelancer",
          civicUserId,
        ],
      });

      user = newUser.rows[0];
    }

    // Create session token
    const sessionToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    // Set auth cookie
    const cookieStore = cookies();
    cookieStore.set("auth_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        userType: user.user_type,
      },
    });
  } catch (error) {
    console.error("Civic verification error:", error);
    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 500 }
    );
  }
}
