export {default} from "next-auth/middleware"

export const config = {
  matcher: ["/actividad/:path*", "/dashboard/:path*", "/perfil/:path*", "/servicios/:path*","/transacciones/:path*"] //en este array agregamos todas las rutas protgidas sobre usuarios no loggeados
}