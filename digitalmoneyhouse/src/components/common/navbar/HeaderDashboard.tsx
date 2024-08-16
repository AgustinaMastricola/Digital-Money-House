import LogoHeader from "./LogoHeader";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import iconMenu from "../../../../public/menu.png";
import MenuMobile from "../menu/MenuMobile";
import iconClose from '../../../../public/close.png'

type HeaderDashProps = {
	firstname: string;
	lastname: string;
};

const HeaderDashboard = ({ firstname, lastname }: HeaderDashProps) => {
	const f = firstname.charAt(0).toUpperCase();
	const l = lastname.charAt(0).toUpperCase();
	const [showMenu, setShowMenu] = useState(false);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<header className="flex items-center justify-between bg-total-black py-2 pr-3 md:hidden">
				<LogoHeader src="LogoVerde.png" />
				<button className="block md:hidden" onClick={handleClickMenu}>
					<Image src={iconMenu} alt="Menu desplegable" />
				</button>
			</header>
      {showMenu && (
				<div>
					<button
						className="absolute right-5 top-6 z-30"
						onClick={() => setShowMenu(false)}
					>
						<Image src={iconClose} alt="cerrar menu" />
					</button>
					<MenuMobile firstname={"Agustina"} lastname={"Mastricola"} />
				</div>
			)}

			<header className="md:flex items-center justify-between bg-total-black py-2 pr-3 hidden">
				<LogoHeader src="LogoVerde.png" />
				<Link href={"/perfil"} className="flex items-center space-x-2">
					<p className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold md:text-lg">
						{f + l}
					</p>
					<p className="text-total-primary">
						Hola, {firstname} {lastname}
					</p>
				</Link>
			</header>
		</>
	);
};

export default HeaderDashboard;
