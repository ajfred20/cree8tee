import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { sendWelcomeEmail, sendVerificationEmail } from "@/lib/email";
import { generateOTP } from "@/lib/auth/otp";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, userType } = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Generate OTP
    const otpCode = generateOTP();
    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 15); // OTP valid for 15 minutes

    // Create new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        userType,
        otpCode,
        otpExpiry,
      },
    });

    // Send welcome and verification emails
    await sendWelcomeEmail(email, name);
    await sendVerificationEmail(email, name, otpCode);

    // Return user (excluding sensitive information)
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
        emailVerified: user.emailVerified,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
}
