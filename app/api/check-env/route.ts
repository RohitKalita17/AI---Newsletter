import { NextResponse } from "next/server";

export async function GET() {
  // This endpoint helps debug environment variable issues
  // Remove this in production for security
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  return NextResponse.json({
    hasSupabaseUrl: hasUrl,
    hasServiceRoleKey: hasKey,
    urlLength: process.env.NEXT_PUBLIC_SUPABASE_URL?.length || 0,
    keyLength: process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0,
    message: hasUrl && hasKey 
      ? "All environment variables are set" 
      : `Missing: ${!hasUrl ? "NEXT_PUBLIC_SUPABASE_URL " : ""}${!hasKey ? "SUPABASE_SERVICE_ROLE_KEY" : ""}`,
  });
}

