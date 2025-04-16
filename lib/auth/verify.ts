import { query } from "@/lib/db";

export async function verifyToken(token: string) {
  return await query(
    `SELECT id, email, name, user_type 
     FROM users 
     WHERE session_token = $1 
     AND session_expires_at > NOW()`,
    [token]
  );
}

export async function verifyAuth(request: Request) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((cookie) => {
      const [name, value] = cookie.trim().split("=");
      return [name, value];
    })
  );

  const token = cookies["auth-token"];
  if (!token) return null;

  try {
    const { rows } = await verifyToken(token);
    return rows.length > 0 ? rows[0].id : null;
  } catch (error) {
    return null;
  }
}
