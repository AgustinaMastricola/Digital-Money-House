import Header from "@/components/common/navbar/Header";
import FormularioLogin from "@/components/login/FormularioLogin";

const Login = () => {
	return (
		<>
			<Header
				logoSrc={"LogoNegro.png"}
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
