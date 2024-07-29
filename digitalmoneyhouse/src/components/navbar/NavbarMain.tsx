'use client'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../../public/LogoNegro.png'

const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-primary border-total-black text-total-black"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-black border-total-primary text-total-primary"}
]

const NavbarMain = () => {
  return (
    <nav className="p-3 bg-total-primary ">
      <div className='flex items-center'>
        <Link href='/' className='col-span-2 col-start-1'>
            <Image src={icon} alt="Icono brand" priority/>
        </Link>
      </div>
    </nav>
  )
}
export default NavbarMain;