// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const GS_ENDPOINT = process.env.GS_ENDPOINT!; // server-only, no NEXT_PUBLIC_

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic server-side validation
    if (!body.name || !body.phone || !body.email || !body.brand) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gsRes = await fetch(GS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" }, // Apps Script needs text/plain to avoid CORS preflight
      body: JSON.stringify(body),
    });

    const result = await gsRes.json();

    if (result.result === "success") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Sheet write failed" }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}