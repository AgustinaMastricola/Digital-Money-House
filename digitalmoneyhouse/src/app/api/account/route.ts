import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
// https://digitalmoney.digitalhouse.com/api/

export async function GET() {
  try{
    const response = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjUxNSIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiZXhwIjoxNzI2MjUyMzM1fQ.tUQbaoh_zIBi9ag_kOf7WyDbRIN4nqJd4RvEweGZABc`,
      },
    });
    if (!response.ok) {
      // Manejo de errores HTTP
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${response.status}: ${errorText}` }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching account data:", error);
    return NextResponse.json({ error: "Error fetching account data" }, { status: 500 });
  }
}