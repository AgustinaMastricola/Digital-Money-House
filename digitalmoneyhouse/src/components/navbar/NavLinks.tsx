'use client'
import { LinksType } from "@/types/links.types"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavbarProps= {
    links: LinksType[]
}

const NavLinks = ({links}:NavbarProps) => {
    const pathname = usePathname();

    return (
        <ul className='w-full grid grid-cols-7 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10'>
            <div className="flex space-x-3 col-span-6 col-start-8 sm:col-start-8 ">
                {links.map((link, index)=>(
                    <li 
                        key={`navbar-link-${index}`} 
                        className={link.style && `${link.style} px-3 py-2 text-xs rounded-lg border font-bold`}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </div>
        </ul>
    )
}
export default NavLinks