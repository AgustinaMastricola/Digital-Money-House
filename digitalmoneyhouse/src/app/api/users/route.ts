import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({hola: "hola"})
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({data})
}