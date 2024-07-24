'use client'
import authApi from '@/services/authorization/auth.service'
import NavLinks from './NavLinks'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../../public/LogoNegro.png'

const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-primary border-total-black text-total-black"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-black border-total-primary text-total-primary"}
]

const NavbarMain = () => {
  const router = useRouter();
  const handdleLogout = async () => {
    await authApi.logout()
    router.push('/')
}

  return (
    <nav className="p-3 bg-total-primary ">
      <div className='flex items-center'>
        <Link href='/' className='col-span-2 col-start-1'>
            <Image src={icon} alt="Icono brand" priority/>
        </Link>
        {/* <button className="p-3 mb-4 mt-4 w-full rounded bg-total-primary border border-total-primary text-total-black" onClick={handdleLogout}>logout </button> */}
      </div>
    </nav>
  )
}
export default NavbarMain;