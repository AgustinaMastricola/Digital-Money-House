import Button from "@/components/common/buttons/Button";
import Header from "@/components/common/navbar/Header";
import FormularioLogin from "@/components/login/FormularioLogin";
import React from "react";

const Login = () => {
	return (
		<>
			<Header
				logoSrc={"LogoNegro.png"}
				logoClassName={"p-2"}
				headerClassName="bg-total-primary"
			/>
			<main>
				<div className="bg-light-black h-full flex flex-col justify-start items-center py-20 pb-52 md:pb-32">
					<FormularioLogin />
				</div>
			</main>
		</>
	);
};

export default Login;
