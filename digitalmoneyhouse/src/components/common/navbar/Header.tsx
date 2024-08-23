import { LinksType } from "@/types/links.types"
import NavLinks from "./NavLinks"
import clsx from "clsx"
import LogoBrand from "../icons/LogoBrand"

type HeaderProps ={
  colorLogo:string,
  headerClassName?: string,
  links?: LinksType[]
}

function Header({colorLogo, headerClassName, links}:HeaderProps) {
  return (
    <header className={clsx('flex items-center justify-between', headerClassName)}>
			<LogoBrand href={"/dashboard"} className={colorLogo}/>
      <NavLinks links={links}/>
    </header>
  )
}

export default Header