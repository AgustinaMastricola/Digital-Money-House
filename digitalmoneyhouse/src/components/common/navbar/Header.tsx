import { LinksType } from "@/types/links.types"
import LogoHeader from "./LogoHeader"
import NavLinks from "./NavLinks"
import clsx from "clsx"

type HeaderProps ={
  logoSrc:string,
  headerClassName?: string,
  links?: LinksType[]
}

function Header({logoSrc, headerClassName, links}:HeaderProps) {
  return (
    <header className={clsx('flex items-center justify-between py-2',headerClassName)}>
      <LogoHeader src={logoSrc}/>
      <NavLinks links={links}/>
    </header>
  )
}

export default Header