import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role for admin access
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const { userId, email, name, userType, otp, otpExpiry } =
      await request.json();

    if (!userId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Creating profile for:", email);

    try {
      // First create a user in auth.users if it doesn't exist
      // Since we can't directly insert into auth.users, we'll use signUp
      try {
        // Generate a random password - user will reset this later
        const tempPassword = Math.random().toString(36).slice(2, 10);

        // Create user in auth.users
        const { data: authData, error: authError } =
          await supabase.auth.admin.createUser({
            email: email.toLowerCase(),
            password: tempPassword,
            email_confirm: true, // Mark as confirmed so they can sign in
            user_metadata: {
              name,
              user_type: userType,
            },
          });

        if (authError) {
          // If user already exists, this is fine
          if (!authError.message.includes("already exists")) {
            console.error("Auth user creation error:", authError);
          } else {
            console.log("User already exists in auth.users");
          }
        } else {
          console.log("Created user in auth.users with ID:", authData.user.id);
          // If we successfully created a user, use that ID
          userId = authData.user.id;
        }
      } catch (authError: any) {
        console.error("Error creating auth user:", authError);
        // Continue anyway - we'll try to use the provided ID
      }

      // Try to create or update the profile using upsert
      // For development only: if strictForeignKeys is an issue, we can use custom SQL
      if (process.env.NODE_ENV !== "production") {
        // Disable RLS temporarily for the profile creation
        try {
          // Use RPC to execute SQL directly (more flexible than normal operations)
          const { error: sqlError } = await supabase.rpc(
            "create_profile_safely",
            {
              p_id: userId,
              p_email: email.toLowerCase(),
              p_name: name,
              p_user_type: userType,
              p_verified: false,
              p_otp: otp,
              p_otp_expires: otpExpiry,
            }
          );

          if (sqlError) {
            console.error("SQL RPC error:", sqlError);
            throw sqlError;
          }

          console.log("Profile created via RPC");
          return NextResponse.json({
            success: true,
            message: "Profile created successfully via RPC",
          });
        } catch (rpcError: any) {
          console.error("RPC error:", rpcError);
          // Fall back to normal upsert
        }
      }

      // Standard upsert as fallback
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: userId,
        email: email.toLowerCase(),
        name,
        user_type: userType,
        email_verified: false,
        verification_otp: otp,
        verification_token_expires_at: otpExpiry,
      });

      if (profileError) {
        console.error("Profile creation error:", profileError);

        // Development workaround: if we're still having FK issues, store in localStorage only
        if (
          profileError.code === "23503" &&
          process.env.NODE_ENV !== "production"
        ) {
          console.log("⚠️ Using localStorage fallback for development");

          return NextResponse.json({
            success: true,
            message: "Using localStorage fallback for development",
            fallback: true,
            userData: {
              userId,
              email,
              name,
              userType,
              otp,
            },
          });
        }

        return NextResponse.json(
          { error: `Failed to create profile: ${profileError.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Profile created successfully",
      });
    } catch (dbError: any) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
