'use client'
import iconBrand from '../../../public/LogoVerde.png'
import iconMenu from '../../../public/menu.png'
import iconClose from '../../../public/close.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

type NavbarDashProps= {
  firstname:string,
  lastname: string,
}
const menuLinks = [
  {href:"/", name:"Inicio"},
  {href:"/dashboard", name:"Actividad"},
  {href:"/profile", name:"Tu perfil"},
  {href:"/transactions", name:"Cargar dinero"},
  {href:"/services", name:"Pagar servicios"},
  {href:"/tarjetas", name:"Tarjetas"},
]

const NavbarDashboard = ({ firstname, lastname }: NavbarDashProps) => {
	const iniciales = `${firstname.charAt(0) + lastname.charAt(0)}`;
	const [showMenu, setShowMenu] = useState(false);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<>
			<nav className="p-3 bg-total-black flex flex-col">
				<div className="flex items-center justify-between w-full">
					<Link href="/" className="col-span-2 col-start-1">
						<Image src={iconBrand} alt="Icono de la marca" priority />
					</Link>
					<div className="flex space-x-6 mr-2">
						<p className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold text-lg">
							{iniciales}
						</p>
						<button onClick={handleClickMenu}>
							<Image src={iconMenu} alt="Menu desplegable" />
						</button>
					</div>
				</div>
			</nav>
			{showMenu && (
				<div className='bg-total-primary z-10 h-full absolute right-0 top-0 w-2/3 md:w-5/12'>
					<div className="bg-footer-gray py-14">
						<button
							onClick={() => setShowMenu(false)}
							className="absolute right-5 top-6"
						>
							<Image src={iconClose} alt="cerrar menu" />
						</button>
						<p className="text-total-primary font-bold text-2xl pl-10">
							Hola, <br /> {firstname} {lastname}
						</p>
					</div>
					<ul className="pl-10 pt-10 space-y-4">
						{menuLinks.map((link, index) => (
							<li className="text-total-black">
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
						<button className="text-total-black" onClick={() => signOut()}>
							Cerrar sesión
						</button>
					</ul>
				</div>
			)}
		</>
	);
};

export default NavbarDashboard