import Image from 'next/image'
import icon from '../../../public/LogoVerde.png'
import Link from 'next/link'
import { LinksType } from '@/types/links.types'

type NavbarProps= {
  links: LinksType[]
}

const Navbar = ({links}:NavbarProps) => {
  return (
    <nav className="p-3 bg-total-black ">
      <div className='grid grid-cols-12 items-center'>
        <div className='col-span-2 col-start-1'>
          <Image
            src={icon}
            alt="Icono brand"
            priority
          />
        </div>
        <ul className='flex w-full space-x-4 col-span-6 col-start-7 items-center sm:col-start-8 md:col-start-9 lg:col-start-10'>
          {
            links.map((link, index)=>(
              <li key={`navbar-link-${index}`} className="px-3 py-2 border rounded-[5px] text-xs text-total-primary font-bold">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar