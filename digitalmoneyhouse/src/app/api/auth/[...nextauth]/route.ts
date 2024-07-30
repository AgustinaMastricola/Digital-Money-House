import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const res = await fetch(`https://digitalmoney.digitalhouse.com/api/login`, {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: {
              'Content-Type':'application/json'
            }
          }
        )
        const user = await res.json();
        
        if(user.error) throw user;
        return user;
      }
    }),
  ],
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