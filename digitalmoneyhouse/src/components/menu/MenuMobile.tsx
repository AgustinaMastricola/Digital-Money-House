import Link from 'next/link';
import Image from 'next/image'
import iconClose from '../../../public/close.png'
import { signOut } from 'next-auth/react'

const MenuMobile = () => {
  const menuLinks = [
    {href:"/", name:"Inicio"},
    {href:"/dashboard", name:"Actividad"},
    {href:"/profile", name:"Tu perfil"},
    {href:"/transactions", name:"Cargar dinero"},
    {href:"/services", name:"Pagar servicios"},
    {href:"/tarjetas", name:"Tarjetas"},
  ]
  return (
		<div className="hidden md:block bg-total-primary z-10 h-full absolute left-0 w-2/3 md:w-4/12 lg:w-3/12 xl:w-2/12">
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
	);
}

export default MenuMobile