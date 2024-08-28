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
                    className={clsx('px-3 py-1.5 text-xs rounded-[5px] border font-bold' ,{
                        'bg-total-primary text-total-black border-none': !link.outline && !link.solid,
                        'bg-total-black text-total-primary border-total-primary': link.outline,
                        'bg-footer-gray border-footer-gray text-total-white':link.solid
                    })}
                    href={link.href}>
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
export default NavLinks