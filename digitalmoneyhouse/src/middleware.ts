export {default} from "next-auth/middleware"

export const config = {
  matcher: ['/pofile'] //en este array agregamos todas las rutas protgidas sobre usuarios no loggeados
}