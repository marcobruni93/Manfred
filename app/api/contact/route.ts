import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://n8n-hetzner.bewpot.com/webhook/eafad639-38a6-4cb8-a943-c786f5a516bb";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.nome || !payload?.cognome || !payload?.email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Webhook request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
