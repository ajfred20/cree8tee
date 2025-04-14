import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email, name, token } = await request.json();

    if (!email || !name || !token) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendVerificationEmail(email, name, token);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
