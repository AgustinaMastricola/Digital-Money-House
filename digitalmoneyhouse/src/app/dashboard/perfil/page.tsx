"use client";
import PaymentGestion from "@/components/perfil/PaymentGestion";
import ContainerDataUser from "@/components/perfil/user/ContainerDataUser";
import ContainterDataAccount from "@/components/perfil/account/ContainterDataAccount";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import { useUserContext } from "@/context/UserContextProvider";
import { useAccountContext } from "@/context/AccountContextProvider";

const ProfilePage = () => {
	const user = useUserContext()
	const account = useAccountContext()

	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Perfil</span>
      </div>
			<ContainerDataUser user={user}/>
			<PaymentGestion />
			<ContainterDataAccount account={account}/>
		</>
	);
};

export default ProfilePage;
