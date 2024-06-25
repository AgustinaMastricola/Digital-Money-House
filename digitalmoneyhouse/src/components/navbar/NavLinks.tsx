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
        <ul className='flex w-full space-x-3 col-span-9 col-start-4 items-center sm:col-start-8 md:col-start-9 lg:col-start-10'>
            {links.map((link, index)=>(
                <li key={`navbar-link-${index}`} className="px-3 py-2 border rounded-[5px] text-xs text-total-primary font-bold">
                    <Link href={link.href}>{link.name}</Link>
                </li>
            ))}
        </ul>
    )
}
export default NavLinks