import Link from "next/link"
import Image from 'next/image'
import icon from '../../../public/LogoVerde.png'

const NavLogo = () => {
    return (
        <Link href='/' className='col-span-2 col-start-1'>
            <Image src={icon} alt="Icono brand" priority/>
        </Link>
    )
}
export default NavLogo