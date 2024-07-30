'use client'
import NavLinks from './NavLinks'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../../public/LogoVerde.png'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-black border-total-primary text-total-primary"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-primary border-total-primary text-total-black"},
]

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession()
  
  return (
    <nav className="p-3 bg-total-black ">
      <div className='flex items-center justify-between'>
        <Link href='/' className='col-span-2 col-start-1'>
          <Image src={icon} alt="Icono brand" priority/>
        </Link>
        {session ? 
          <button 
            className=' bg-total-black border-total-primary text-total-primary px-3 py-2 text-xs rounded-lg border font-bold'
            onClick={()=>signOut()}>
              Cerrar sesión
          </button>
          :
          <NavLinks links={links}/>
        }
      </div>
    </nav>
  )
}

export default Navbar;