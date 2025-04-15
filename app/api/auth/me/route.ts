import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth/verify";
import { query } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const userId = await verifyAuth(request);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Use our PostgreSQL query instead of Prisma
    const { rows } = await query(
      `SELECT id, email, name, user_type, email_verified 
       FROM users 
       WHERE id = $1`,
      [userId]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      userType: user.user_type,
      emailVerified: user.email_verified,
    });
  } catch (error) {
    console.error("Get current user error:", error);
    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 401 }
    );
  }
}
