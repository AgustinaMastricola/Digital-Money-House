import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export {default} from "next-auth/middleware"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Check if token is expired
  if (!token) {
    // Redirect to login page if token is expired or not present
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/actividad/:path*", "/dashboard/:path*", "/perfil/:path*", "/servicios/:path*","/transacciones/:path*"] //en este array agregamos todas las rutas protgidas sobre usuarios no loggeados
}