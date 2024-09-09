import { useUserContext } from "@/context/UserContextProvider";
import Link from "next/link";

const UserName = () => {
	const { firstname, lastname } = useUserContext();

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
export default UserName;