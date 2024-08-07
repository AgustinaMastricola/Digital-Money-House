'use client'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../../public/LogoNegro.png'

const NavbarMain = () => {
  return (
    <nav className="p-3 bg-total-primary ">
      <div className='flex items-center'>
        <Link href='/'>
            <Image src={icon} alt="Icono brand" priority/>
        </Link>
      </div>
    </nav>
  )
}
export default NavbarMain;