import Link from 'next/link';
import { signOut } from 'next-auth/react'

const Menu = () => {
  const menuLinks = [
    {href:"/", name:"Inicio"},
    {href:"/actividad", name:"Actividad"},
    {href:"/perfil", name:"Tu perfil"},
    {href:"/transacciones", name:"Cargar dinero"},
    {href:"/servicios", name:"Pagar servicios"},
    {href:"/tarjetas", name:"Tarjetas"},
  ]

  return (
		<div className="bg-total-primary z-10 md:w-full md:h-full">
			<ul className="pl-10 py-10 space-y-4 w-full">
				{menuLinks.map((link, index) => (
					<li className="text-total-black" key={`option-menu-${index}`}>
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

export default Menu