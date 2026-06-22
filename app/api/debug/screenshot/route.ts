import { NextResponse } from "next/server";
import { writeFileSync } from "fs";

export async function POST(req: Request) {
  const { data } = await req.json();
  const buf = Buffer.from(data, "base64");
  writeFileSync("/tmp/mammoth_scene.jpg", buf);
  return NextResponse.json({ ok: true });
}
