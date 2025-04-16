import { NextRequest, NextResponse } from "next/server";
import { sendBetaConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Development fallback - just log instead of sending
    if (process.env.NODE_ENV !== "production") {
      console.log(`[DEV MODE] Would send beta confirmation to: ${email}`);
      return NextResponse.json({
        success: true,
        message: "Beta confirmation email would be sent in production",
      });
    }

    // Production email sending with better error handling
    try {
      await sendBetaConfirmationEmail(email, name || email.split("@")[0]);

      return NextResponse.json({
        success: true,
        message: "Beta confirmation email sent successfully",
      });
    } catch (emailError) {
      console.error("Error sending beta confirmation:", emailError);

      // Return success even if email fails - we don't want to block the user
      // but log the error for monitoring
      return NextResponse.json({
        success: true,
        emailSent: false,
        message: "Registered for beta but email notification failed",
      });
    }
  } catch (error: any) {
    console.error("Beta confirmation error:", error);
    return NextResponse.json(
      { error: "Failed to process beta confirmation" },
      { status: 500 }
    );
  }
}
