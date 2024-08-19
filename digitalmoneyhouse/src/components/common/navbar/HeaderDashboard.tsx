'use client'
import LogoHeader from "./LogoHeader";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import iconMenu from "../../../../public/menu.png";
import MenuMobile from "../menu/MenuMobile";
import iconClose from '../../../../public/close.png'
import { UserType } from "@/types/users.types";
import { useSession } from "next-auth/react";
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";

const HeaderDashboard = () => {
	const {data: session, status} = useSession();
	const [showMenu, setShowMenu] = useState(false);
	const [userData, setUserData] = useState<UserType>({
		dni: 0,
		email: "",
		firstname: "",
		lastname: "",
		password: "",
		phone: "",
	});
	const [initalsName, setInitialsName] = useState('')

	const getDataUser = async () => {
		if (session?.user?.token) {
			const getAccount = await accountAPI.getMyAccount(`${session.user.token}`);
			const res = await userApi.getUserData(
				`${session.user.token}`,
				getAccount.user_id
			);
			console.log(res);
			setUserData(res);
			const f = res.firstname.charAt(0).toUpperCase();
			const l = res.lastname.charAt(0).toUpperCase();
			setInitialsName(f+l)
		}
	};
	useEffect(() => {
		getDataUser();
	}, [session]);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<header className="flex items-center justify-between bg-total-black py-2 pr-3 md:hidden">
				<LogoHeader src="LogoVerde.png" />
				<div className="flex space-x-5 items-center">
					<Link className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold md:text-lg" href={"/perfil"}>
						{initalsName}
					</Link>
					<button className="block md:hidden" onClick={handleClickMenu}>
						<Image src={iconMenu} alt="Menu desplegable" />
					</button>
				</div>
			</header>
      {showMenu && (
				<div>
					<button
						className="absolute right-5 top-6 z-30"
						onClick={() => setShowMenu(false)}
					>
						<Image src={iconClose} alt="cerrar menu" />
					</button>
					<MenuMobile firstname={userData.firstname} lastname={userData.lastname} />
				</div>
			)}

			<header className="md:flex items-center justify-between bg-total-black py-2 pr-3 hidden">
				<LogoHeader src="LogoVerde.png" />
				<Link href={"/perfil"} className="flex items-center space-x-2">
					<p className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold md:text-lg">
						{initalsName}
					</p>
					<p className="text-total-primary">
						Hola, {userData.firstname} {userData.lastname}
					</p>
				</Link>
			</header>
		</>
	);
};

export default HeaderDashboard;
