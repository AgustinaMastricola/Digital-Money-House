import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const URL_BACK = process.env.API_URL_BACK_END
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        console.log(req.body);
        try {
          const res = await fetch(`${URL_BACK}login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (!res.ok) {
            // Si la respuesta no es exitosa, lanzar un error
            const errorResponse = await res.text();
            throw new Error(`Error al iniciar sesión: ${errorResponse}`);
          }

          const user = await res.json();
          if (user.error) throw user;
          return user;
        } catch (error) {
          console.error("Error en la autorización:", error);
          throw new Error("Error en la autorización");
        }
      }
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  
  callbacks:{
    //Esto sirve para agregarle mas informacion a la sesion que la que viene por defecto
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session, token}) {
      session.user = token as any;
      return session;
    }
  },
  pages:{
    signIn: '/login',
    
  }
})

export { handler as GET, handler as POST }
