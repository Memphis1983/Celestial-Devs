import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    system: "Celestial Devs Platform",
    timestamp: new Date().toISOString(),
  });
}
