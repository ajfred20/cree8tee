import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { query } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const { rows } = await query("SELECT * FROM users WHERE email = $1", [
      email.toLowerCase(),
    ]);

    if (!rows[0]) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];
    const passwordValid = await compare(password, user.password_hash);

    if (!passwordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.user_type,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
