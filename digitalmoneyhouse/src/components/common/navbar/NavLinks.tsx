'use client'
import { LinksType } from "@/types/links.types"
import clsx from "clsx"
import Link from "next/link"

type NavbarProps= {
    links?: LinksType[]
}

const NavLinks = ({links}:NavbarProps) => {
    return (
        <div className="flex space-x-3 mr-2">
            {links && links.map((link, index)=>(
                <Link 
                    key={`navbar-link-${index}`}
                    className={clsx('px-3 py-2 text-xs rounded-lg border font-bold' ,{
                        'bg-total-primary text-total-black border-none': !link.outline && !link.solid,
                        'bg-total-black text-total-primary border-total-primary': link.outline,
                        'bg-total-gray border-total-gray':link.solid
                    })} 
                    href={link.href}>
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
export default NavLinks