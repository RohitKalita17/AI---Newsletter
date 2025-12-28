import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    // Parse request body
    let email: string;
    try {
      const body = await req.json();
      email = body.email;
    } catch (parseError) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get Supabase client - this might throw if env vars are missing
    let supabaseServer;
    try {
      supabaseServer = getSupabaseServer();
    } catch (supabaseError) {
      const errorMessage = supabaseError instanceof Error ? supabaseError.message : "Unknown error";
      console.error("Supabase initialization error:", errorMessage);
      
      // Return a more helpful error message
      if (errorMessage.includes("Missing Supabase environment variables")) {
        return NextResponse.json(
          { error: "Server configuration error: Missing environment variables. Please check server logs." },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseServer
      .from("subscribers")
      .insert([{ email }])
      .select();

    if (error) {
      // Handle duplicate email error (PostgreSQL unique constraint violation)
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Email already subscribed" },
          { status: 409 }
        );
      }

      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
