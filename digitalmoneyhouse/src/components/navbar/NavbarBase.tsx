'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavLinks from "./NavLinks"
import iconMenu from '../../../public/menu.png'
import Image from 'next/image'
import { useEffect, useState } from "react"

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

	useEffect(() => {
		setPathName(location);
		console.log(location, sessionStatus);
	}, [sessionStatus]);

	return (
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
					<p className="hidden md:block text-total-primary font-bold text-1xl">
						Hola, Agustina Mastricola
					</p>
					<button className="block md:hidden">
						<Image src={iconMenu} alt="Menu desplegable" />
					</button>
				</div>
			) : (
				<NavLinks links={links} />
			)}
		</nav>
	);
};

export default NavbarBase