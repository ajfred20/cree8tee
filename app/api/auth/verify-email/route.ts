import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Use server-side supabase client with admin privileges
    const supabase = createRouteHandlerClient({ cookies });

    // Find the user by email
    const { data: userByEmail, error: emailLookupError } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .single();

    if (emailLookupError || !userByEmail) {
      console.error("Error finding profile by email:", emailLookupError);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify the OTP
    if (userByEmail.verification_otp !== otp) {
      // Check localStorage backup via a custom admin function
      // (this is just a fallback - in production you'd use db only)
      if (userByEmail.verification_otp === null) {
        console.log("OTP already used or not set in database");
      }

      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }

    // Mark email as verified in the profiles table
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        email_verified: true,
        verification_otp: null,
        verification_token_expires_at: null,
      })
      .eq("id", userByEmail.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      return NextResponse.json(
        { error: "Failed to verify email" },
        { status: 500 }
      );
    }

    // Set email_confirmed flag in auth.users metadata
    // This is critical for login to work after verification
    const { error: updateUserError } = await supabase.auth.admin.updateUserById(
      userByEmail.id,
      { user_metadata: { email_confirmed: true } }
    );

    if (updateUserError) {
      console.error("Error updating auth user:", updateUserError);
      return NextResponse.json({
        success: true,
        warning: "Profile updated but auth user metadata update failed",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify email" },
      { status: 500 }
    );
  }
}
