"use client";
import PaymentGestion from "@/components/perfil/PaymentGestion";
import ContainerDataUser from "@/components/perfil/user/ContainerDataUser";
import ContainterDataAccount from "@/components/perfil/account/ContainterDataAccount";

const page = () => {
	return (
		<>
			<ContainerDataUser/>
			<PaymentGestion />
			<ContainterDataAccount/>
		</>
	);
};

export default page;
