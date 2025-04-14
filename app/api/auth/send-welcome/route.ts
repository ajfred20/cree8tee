import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    await sendWelcomeEmail(email, name);

    return NextResponse.json({ message: "Welcome email sent" });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { message: "Failed to send welcome email" },
      { status: 500 }
    );
  }
}
