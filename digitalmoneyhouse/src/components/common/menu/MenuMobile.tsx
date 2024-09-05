import { useSession } from "next-auth/react";
import Menu from "./Menu"
import { useEffect, useState } from "react";
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";

type MenuMobileProps= {
	onClickLink?: () => void 
}

const MenuMobile = ({ onClickLink }: MenuMobileProps) => {
	const { data: session, status } = useSession();
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	
	const getDataUser = async () => {
		if (session?.user?.token) {
			const getAccount = await accountAPI.getMyAccount(`${session.user.token}`);
			const res = await userApi.getUserData(
				`${session.user.token}`,
				getAccount.user_id
			);
			console.log(res);
			setFirstname(res.firstname);
			setLastname(res.lastname);
		}
	};
	useEffect(() => {
		getDataUser();
	}, [session?.user?.email]);

	return (
		<div className="bg-total-primary z-10 h-screen absolute right-0 top-0 w-3/5 md:hidden">
			<div className="bg-footer-gray py-14">
				<p className="text-total-primary font-bold text-2xl pl-10">
					Hola, <br /> {firstname} {lastname}
				</p>
			</div>
			<Menu onClickLink={onClickLink}/>
		</div>
	);
};

export default MenuMobile