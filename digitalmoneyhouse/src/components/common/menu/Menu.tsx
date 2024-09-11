import Link from "next/link";
import { signOut } from "next-auth/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type MenuProps = {
	onClickLink?: () => void;
};
const Menu = ({ onClickLink }: MenuProps) => {
	const [currentPath, setCurrentPath] = useState("");
	const location = usePathname();

	useEffect(() => {
		setCurrentPath(location);
	}, [location]);

	const menuLinks = [
		{ href: "/dashboard", name: "Inicio" },
		{ href: "/dashboard/actividad", name: "Actividad" },
		{ href: "/dashboard/perfil", name: "Tu perfil" },
		{ href: "/dashboard/transacciones", name: "Cargar dinero" },
		{ href: "/dashboard/servicios", name: "Pagar servicios" },
		{ href: "/dashboard/tarjetas", name: "Tarjetas" },
	];

	return (
		<div className="bg-total-primary z-10 md:w-full md:h-full">
			<ul className="pl-10 py-10 space-y-4 w-full">
				{menuLinks.map((link, index) => (
					<li
						className={clsx("text-footer-gray hover:text-total-black", {
							"font-bold": currentPath === link.href,
							"font-bold ": currentPath === "/dashboard/tarjetas/agregar" && link.href === "/dashboard/tarjetas",
						})}
						key={`option-menu-${index}`}
					>
						<Link href={link.href} onClick={onClickLink}>
							{link.name}
						</Link>
					</li>
				))}
				<button
					className="text-total-black opacity-60"
					onClick={() => signOut()}
				>
					Cerrar sesión
				</button>
			</ul>
		</div>
	);
};

export default Menu;
