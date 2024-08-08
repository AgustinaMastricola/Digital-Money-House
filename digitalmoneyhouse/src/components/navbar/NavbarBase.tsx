'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavLinks from "./NavLinks"
import iconMenu from '../../../public/menu.png'
import Image from 'next/image'
import { useEffect, useState } from "react"
import MenuMobile from "../menu/MenuMobile"
import Menu from "../menu/Menu"
import iconClose from '../../../public/close.png'

type NavbarBaseProps = {
  bgContainer: string,
  logo: string,
  sessionStatus?: string,
}
const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-black border-total-primary text-total-primary"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-primary border-total-primary text-total-black"},
]

const NavbarBase = ({ bgContainer, logo, sessionStatus }: NavbarBaseProps) => {
	const [pathName, setPathName] = useState("");
	const location = usePathname();
	const [showMenu, setShowMenu] = useState(false);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		setPathName(location);
		console.log(location, sessionStatus);
	}, [sessionStatus]);

	return (<>
		<nav className={`p-3 flex justify-between items-center ${bgContainer}`}>
			<Link href="/">
				<img src={logo} alt="Icono brand" />
			</Link>
			{pathName === "/login" || pathName === "/signup" ? (
				<></>
			) : sessionStatus === "authenticated" ? (
				<div className="flex space-x-6 mr-2 md:w-max items-center">
					<p className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold md:text-lg">
						AM
					</p>
					<Link className="hidden md:block text-total-primary font-bold text-1xl" href={"/perfil"}>
						Hola, Agustina Mastricola
					</Link>
					<button className="block md:hidden" onClick={handleClickMenu}>
						<Image src={iconMenu} alt="Menu desplegable" />
					</button>
				</div>
			) : (
				<NavLinks links={links} />
			)}
		</nav>
		{showMenu && 
			<div>
				<button className="absolute right-5 top-6 z-30" onClick={() => setShowMenu(false)}>
					<Image src={iconClose} alt="cerrar menu" />
				</button>
				<MenuMobile firstname={"Agustina"} lastname={"Mastricola"}/>
			</div>	
		}
	</>
	);
};

export default NavbarBase