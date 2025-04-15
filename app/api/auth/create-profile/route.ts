import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { query, transaction } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, name, userType, otp, otpExpiry } = await request.json();

    // Generate a temporary password for now (we'll implement password setup later)
    const temporaryPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await hash(temporaryPassword, 10);

    if (!email || !name || !userType) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: email, name, and userType are required",
        },
        { status: 400 }
      );
    }

    const result = await transaction(async (client) => {
      // Check if user exists
      const existingUser = await client.query(
        "SELECT id FROM users WHERE email = $1",
        [email.toLowerCase()]
      );

      if (existingUser.rows.length > 0) {
        return { userId: existingUser.rows[0].id, existing: true };
      }

      // Create new user with hashed password
      const {
        rows: [user],
      } = await client.query(
        `INSERT INTO users (
          email, 
          name, 
          user_type, 
          password_hash,
          verification_otp, 
          verification_token_expires_at
        )
        VALUES ($1, $2, $3, $4, $5, NOW() + INTERVAL '30 minutes')
        RETURNING id`,
        [email.toLowerCase(), name, userType, hashedPassword, otp]
      );

      return { userId: user.id, existing: false };
    });

    return NextResponse.json({
      success: true,
      userId: result.userId,
      existing: result.existing,
      message:
        "Profile created successfully. Please verify your email to set up your password.",
    });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error: "Failed to create profile",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
