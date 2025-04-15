import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { query, transaction } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, name, userType, password, otp } = await request.json();

    // Hash the password
    const hashedPassword = await hash(password, 10);

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
        VALUES ($1, $2, $3, $4, $5, NOW() + INTERVAL '24 hours')
        RETURNING id`,
        [email.toLowerCase(), name, userType, hashedPassword, otp]
      );

      return { userId: user.id, existing: false };
    });

    return NextResponse.json({
      success: true,
      userId: result.userId,
      existing: result.existing,
    });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
