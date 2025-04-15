import { NextResponse } from "next/server";
import { sendBetaConfirmationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    await sendBetaConfirmationEmail(email, name);

    return NextResponse.json({
      success: true,
      message: "Beta confirmation email sent successfully",
    });
  } catch (error: any) {
    console.error("Error sending beta confirmation:", error);
    return NextResponse.json(
      { error: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
}
