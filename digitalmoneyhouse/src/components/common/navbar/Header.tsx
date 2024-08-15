import { LinksType } from "@/types/links.types"
import LogoHeader from "./LogoHeader"
import NavLinks from "./NavLinks"
import clsx from "clsx"

type HeaderProps ={
  logoSrc:string,
  logoClassName: string,
  headerClassName?: string,
  links?: LinksType[]
}

function Header({logoSrc, logoClassName, headerClassName, links}:HeaderProps) {
  return (
    <header className={clsx('flex items-center justify-between',headerClassName)}>
      <LogoHeader src={logoSrc} className={logoClassName}/>
      <NavLinks links={links}/>
    </header>
  )
}

export default Header