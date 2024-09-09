import { useUserContext } from "@/context/UserContextProvider";
import Link from "next/link";
import { memo, useRef } from "react";

const UserName = () => {
	const { firstname, lastname } = useUserContext();
	const renderCount = useRef(0);
	renderCount.current += 1;

	function getInitialsName(firstname: string, lastname: string) {
		const f = firstname.charAt(0).toUpperCase();
		const l = lastname.charAt(0).toUpperCase();
		return `${f}${l}`;
	}

	return (
		<div className="flex items-center space-x-3">
			<Link
				className="text-total-black bg-total-primary uppercase p-[0.4rem] rounded-lg font-bold md:text-lg"
				href={"/dashboard/perfil"}
			>
				{getInitialsName(firstname, lastname)}
				me renderice : {renderCount.current} veces
			</Link>
			<Link
				className="hidden md:items-center md:space-x-2 md:text-total-primary md:pr-5 md:flex"
				href={"/dashboard/perfil"}
			>
				Hola, {firstname} {lastname}
			</Link>
		</div>
	);
};
export default memo(UserName);