import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { query, transaction } from "@/lib/db";
import crypto from "crypto";
import { sendWelcomeEmail, sendVerificationEmail } from "@/lib/email";
import { generateOTP } from "@/lib/auth/otp";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, userType } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate verification OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date();
    otpExpiry.setHours(otpExpiry.getHours() + 24);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use a transaction to create the user
    const result = await transaction(async (client) => {
      // Check if user already exists
      const userCheck = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email.toLowerCase()]
      );

      if (userCheck.rows.length > 0) {
        throw new Error("User with this email already exists");
      }

      // Create the user
      const userResult = await client.query(
        `INSERT INTO users (email, password, name, user_type, created_at) 
         VALUES ($1, $2, $3, $4, NOW()) 
         RETURNING id`,
        [email.toLowerCase(), hashedPassword, name, userType]
      );

      const userId = userResult.rows[0].id;

      // Create the user's verification data
      await client.query(
        `INSERT INTO user_verification (user_id, verification_code, expires_at) 
         VALUES ($1, $2, $3)`,
        [userId, otp, otpExpiry]
      );

      return { userId, email, name };
    });

    // Send verification email
    await sendVerificationEmail(result.email, result.name, otp);

    return NextResponse.json({
      success: true,
      userId: result.userId,
      email: result.email,
      verificationSent: true,
    });
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: error.message || "Signup failed" },
      { status: error.message.includes("already exists") ? 409 : 500 }
    );
  }
}
