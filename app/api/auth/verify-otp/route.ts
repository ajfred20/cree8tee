import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if OTP is valid
    if (user.otpCode !== otp) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }

    // Check if OTP is expired
    if (user.otpExpiry && new Date() > user.otpExpiry) {
      return NextResponse.json({ message: "OTP expired" }, { status: 400 });
    }

    // Update user as verified
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        emailVerified: true,
        otpCode: null,
        otpExpiry: null,
      },
    });

    // Return user (excluding sensitive information)
    return NextResponse.json({
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        userType: updatedUser.userType,
        emailVerified: updatedUser.emailVerified,
      },
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { message: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
