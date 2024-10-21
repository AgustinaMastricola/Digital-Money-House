import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/navbar/Header";
import InfoHome from "@/components/home/anauthenticated/InfoHome";

const links = [
	{ href: "/login", name: "Ingresar", outline: true },
	{ href: "/signup", name: "Crear cuenta" },
];

export default function Home() {
	return (
		<>
			<Header
				colorLogo="fill-total-primary"
				headerClassName="bg-total-black"
				links={links}
			/>
			<main className="w-full flex flex-col justify-between bg-bg-img-mobile md:bg-bg-img-tablet md:bg-left bg-cover bg-center bg-no-repeat">
				<section className="ml-4 sm:ml-12 pt-8 pb-48 md:pb-52">
					<p className="w-8/12 md:hidden text-total-white text-3xl">
						De ahora <br />
						en adelante, <br />
						hacés más <br />
						con tu dinero
					</p>
					<p className="hidden md:block md:w-8/12 md:text-5xl text-total-white lg:pt-11 md:pt-8 md:font-light">
						De ahora en <br /> adelante, hacés <br />
						más con tu dinero
					</p>
					<hr className="underline my-2 w-5 text-total-primary border-2 sm:hidden" />
					<h5 className="text-total-primary text-lg sm:hidden mt-2">
						Tu nueva <br />
						<span className="font-semibold">billetera virtual</span>
					</h5>
					<h5 className="text-total-primary text-xl hidden sm:block md:text-3xl mt-1">
						Tu nueva <span className="font-semibold">billetera virtual</span>
					</h5>
				</section>
				<section className="bg-total-primary rounded-t-3xl w-full md:h-7/12 mt-20">
					<div className="space-y-4 flex flex-col items-center -translate-y-8 2xl:-translate-y-16 lg:flex-row lg:justify-center lg:space-x-2 2xl:space-x-4 lg:space-y-0">
						<InfoHome
							title="Transferí dinero"
							paragraph="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual."
						/>
						<InfoHome
							title="Pago de servicios"
							paragraph="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel."
						/>
					</div>
				</section>
			</main>
			<Footer
				styleContainer="bg-total-black"
				styleParagraph="text-total-primary"
			/>
		</>
	);
}
