import { createClient } from "@supabase/supabase-js";

export function getSupabaseServer() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const missingVars: string[] = [];
  if (!supabaseUrl) missingVars.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!serviceRoleKey) missingVars.push("SUPABASE_SERVICE_ROLE_KEY");

  if (missingVars.length > 0) {
    throw new Error(
      `Missing Supabase environment variables: ${missingVars.join(", ")}. Please check your .env.local file.`
    );
  }

  // For development: If SSL certificate errors occur, you can temporarily disable SSL verification
  // by setting NODE_TLS_REJECT_UNAUTHORIZED=0 in your .env.local file
  // ⚠️ WARNING: Only use this for local development, never in production!
  if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
    console.warn("⚠️  SSL certificate verification is disabled. This should only be used for development!");
  }

  // Create Supabase client with default configuration
  return createClient(supabaseUrl!, serviceRoleKey!);
}
