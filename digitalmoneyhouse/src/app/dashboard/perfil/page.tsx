"use client";
import PaymentGestion from "@/components/perfil/PaymentGestion";
import ContainerDataUser from "@/components/perfil/user/ContainerDataUser";
import ContainterDataAccount from "@/components/perfil/account/ContainterDataAccount";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";

const page = () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
        <ArrowRightIcon/>
        <span className="underline">Perfil</span>
      </div>
			<ContainerDataUser/>
			<PaymentGestion />
			<ContainterDataAccount/>
		</>
	);
};

export default page;
