import { NextRequest, NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email, name, token } = await request.json();

    await sendVerificationEmail(email, name, token);

    return NextResponse.json({ message: "Verification email sent" });
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return NextResponse.json(
      { message: "Failed to send verification email" },
      { status: 500 }
    );
  }
}
