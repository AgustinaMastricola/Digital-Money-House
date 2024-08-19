import Header from "@/components/common/navbar/Header";
import FormularioSignup from "@/components/signup/FormularioSignup";

const links = [{ href: "/login", name: "Ingresar", solid: true }];

const Signup = () => {
	return (
		<>
			<Header
				logoSrc={"LogoNegro.png"}
				headerClassName="bg-total-primary"
				links={links}
			/>
			<main>
				<div className="bg-light-black h-full flex flex-col items-center pb-28">
					<FormularioSignup />
				</div>
			</main>
		</>
	);
};

export default Signup;
