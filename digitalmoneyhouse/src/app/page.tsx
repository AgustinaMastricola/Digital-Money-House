import Header from "@/components/common/navbar/Header";
import InfoHome from "@/components/home/anauthenticated/InfoHome";

const links = [
  {href:"/login", name:"Ingresar", outline: true},
  {href:"/signup", name: "Crear cuenta"},
] 

export default function Home() {

	return (
		<>
			<Header logoSrc={"LogoVerde.png"} headerClassName="bg-total-black" links={links}/>
			<main className="w-full bg-bg-img-mobile sm:bg-bg-img-tablet bg-cover space-y-32 lg:space-y-44 ">
					<section className="ml-4 sm:ml-12 ">
						<p className="w-6/12 sm:w-5/12 lg:w-2/6   text-total-white text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-light pt-8 lg:pt-11">
							De ahora en adelante, hacés más con tu dinero
						</p>
						<hr className="underline my-2 w-5 text-total-primary border-2 sm:hidden" />
						<h5 className="text-total-primary text-lg sm:hidden">
							Tu nueva <br />
							<span className="font-semibold">billetera virtual</span>{" "}
						</h5>
						<h5 className="text-total-primary text-lg hidden sm:block lg:text-2xl">
							Tu nueva <span className="font-semibold">billetera virtual</span>{" "}
						</h5>
					</section>
					<section className="bg-total-primary rounded-t-3xl">
						<div className="h-full w-full">
							<div className="space-y-4 flex flex-col items-center -translate-y-16 lg:flex-row lg:justify-center lg:space-x-2 lg:space-y-0">
								<InfoHome
									title="Transferí dinero"
									paragraph="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual."
								/>
								<InfoHome
									title="Pago de servicios"
									paragraph="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel."
									/>
							</div>
						</div>
					</section>
			</main>
		</>
	);
}
