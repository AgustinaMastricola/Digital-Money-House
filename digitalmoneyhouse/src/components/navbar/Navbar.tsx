import NavLinks from './NavLinks'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../../public/LogoVerde.png'

const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-black border-total-primary text-total-primary"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-primary border-total-primary text-total-black"},
]

const Navbar = () => {
  return (
    <nav className="p-3 bg-total-black ">
      <div className='flex items-center justify-between'>
        <Link href='/' className='col-span-2 col-start-1'>
          <Image src={icon} alt="Icono brand" priority/>
        </Link>
        <NavLinks links={links}/>
      </div>
    </nav>
  )
}

export default Navbar;