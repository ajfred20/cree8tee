import { Pool } from "pg";
import { createClient } from "@supabase/supabase-js";

// Create a Supabase client for database operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

// Create a Supabase client with the service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Function to execute Postgres queries via Supabase
export async function query(text: string, params: any[] = []) {
  try {
    const { data, error, count } = await supabase.rpc("exec_sql", {
      query_text: text,
      query_params: params,
    });

    if (error) throw error;

    return { rows: data || [], rowCount: count || 0 };
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

export async function transaction<T>(
  callback: (client: any) => Promise<T>
): Promise<T> {
  try {
    // Start transaction
    await supabase.rpc("begin_transaction");

    // Execute the callback
    const result = await callback(supabase);

    // Commit transaction
    await supabase.rpc("commit_transaction");

    return result;
  } catch (error) {
    // Rollback transaction
    await supabase.rpc("rollback_transaction");
    throw error;
  }
}
