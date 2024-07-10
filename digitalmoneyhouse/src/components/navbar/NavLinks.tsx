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
        <ul className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10'>
            <div className="col-start-2 flex col-span-2">
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