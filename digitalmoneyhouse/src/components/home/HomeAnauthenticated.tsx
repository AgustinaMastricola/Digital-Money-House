import CardInfoHome from "../cards/CardInfoHome";

const HomeAnauthenticated = () => {
	return (
		<main>
			<div className="w-full h-full bg-bg-img-mobile sm:bg-bg-img-tablet bg-cover space-y-32 lg:space-y-44 ">
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
				<section className="h-1/2 sm:h-1/3 sm:absolute sm:bottom-14">
					<div className="h-full bg-total-primary w-full rounded-t-3xl">
						<div className="space-y-4 flex flex-col items-center -translate-y-16 lg:flex-row lg:justify-center lg:space-x-2 lg:space-y-0">
							<CardInfoHome
								title="Transferí dinero"
								paragraph="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual."
							/>
							<CardInfoHome
								title="Pago de servicios"
								paragraph="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel."
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default HomeAnauthenticated;
