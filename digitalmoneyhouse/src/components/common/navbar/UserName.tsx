import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserName = () => {
	const { data: session, status } = useSession();
	const [initalsName, setInitialsName] = useState("");
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
			const f = res.firstname.charAt(0).toUpperCase();
			const l = res.lastname.charAt(0).toUpperCase();
			setInitialsName(f + l);
      setFirstname(res.firstname);
			setLastname(res.lastname);
		}
	};
	useEffect(() => {
		getDataUser();
	}, [session?.user]);

	return (
		<div className="flex items-center space-x-3">
			<Link
				className="text-total-black bg-total-primary uppercase p-[0.4rem] rounded-lg font-bold md:text-lg"
				href={"/dashboard/perfil"}
			>
				{initalsName}
			</Link>
			<Link 
        className="hidden md:items-center md:space-x-2 md:text-total-primary md:pr-5 md:flex"
        href={"/dashboard/perfil"} >
					Hola, {firstname} {lastname}
			</Link>
		</div>
	);
};

export default UserName;
