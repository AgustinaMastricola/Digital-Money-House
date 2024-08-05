'use client'
import {SessionProvider} from 'next-auth/react'
//Este proveedor se construye para que luego la informacion de la autenticacion, sea accesible para toda la applicacion, y saber que 
//permisos o rutas puede acceder el usuario. Tambien para poder utilizar los hooks de NextAuth como useSession()
//Este proveedor tiene que envolver a toda nuestra aplicacion, en Layout root
interface Props {
  children: React.ReactNode;
}

const SessionAuthProvider = ({children}: Props) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default SessionAuthProvider;