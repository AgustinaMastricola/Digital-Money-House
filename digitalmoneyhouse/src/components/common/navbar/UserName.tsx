import { useUserContext } from "@/context/UserContextProvider";
import { initialsOfNames } from "@/utils/functions/initialsOfNames";
import Link from "next/link";
import { useState } from "react";

const UserName = () => {
	const { firstname, lastname, token } = useUserContext();
	const [initials, setInitials] = useState<string>("");

	if (token && !initials) {
		setInitials(initialsOfNames(firstname, lastname));
	}

	return (
		<div className="flex items-center space-x-3">
			<Link
				className="text-total-black bg-total-primary uppercase p-[0.4rem] rounded-lg font-bold md:text-lg"
				href={"/dashboard"}
			>
				{initials}
			</Link>
			<Link
				className="hidden md:items-center md:space-x-2 md:text-total-primary md:pr-5 md:flex"
				href={"/dashboard"}
			>
				Hola, {firstname} {lastname}
			</Link>
		</div>
	);
};
export default UserName;