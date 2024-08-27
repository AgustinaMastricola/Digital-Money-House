'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuMobile from "../menu/MenuMobile";
import { UserType } from "@/types/users.types";
import { useSession } from "next-auth/react";
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import LogoBrand from "../icons/LogoBrand";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";

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
		setShowMenu(false)
	}, [session?.user?.token]);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<header className="flex items-center justify-between bg-total-black md:hidden">
				<LogoBrand href={"/dashboard"} className="fill-total-primary"/>
				<div className="flex space-x-4 items-center pr-3">
					<Link className="text-total-black bg-total-primary uppercase p-[0.4rem] rounded-lg font-bold md:text-lg" href={"/dashboard/perfil"}>
						{initalsName}
					</Link>
					<button className="block md:hidden" onClick={handleClickMenu}>
						<MenuIcon/>
					</button>
				</div>
			</header>
      {showMenu && (
				<div>
					<button
						className="absolute right-5 top-6 z-30"
						onClick={() => setShowMenu(false)}
					>
						<CloseIcon className={"fill-total-primary"}/>
					</button>
					<MenuMobile firstname={userData.firstname} lastname={userData.lastname} />
				</div>
			)}

			<header className="md:flex items-center justify-between bg-total-black hidden">
				<LogoBrand href={"/dashboard"} className="fill-total-primary"/>
				<Link href={"/dashboard/perfil"} className="flex items-center space-x-2">
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
