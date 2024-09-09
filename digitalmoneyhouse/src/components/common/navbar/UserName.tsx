
import { useUserContext } from "@/context/UserContextProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserName = () => {
	const [initalsName, setInitialsName] = useState("");
	const {firstname,lastname,token,user_id,account_id} = useUserContext()

	function getInitialsName() {
			const f = firstname.charAt(0).toUpperCase();
			const l = lastname.charAt(0).toUpperCase();
			setInitialsName(f + l);
		}
	
	useEffect(() => {
		getInitialsName();
	}, [firstname]);

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
function getInitialsName() {
	throw new Error("Function not implemented.");
}

