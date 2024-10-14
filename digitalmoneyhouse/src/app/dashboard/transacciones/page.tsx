"use client";
import Container from "@/components/common/containers/Container";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import IconSelectCard from "@/components/common/icons/IconSelectCard";
import IconTransference from "@/components/common/icons/IconTransference";
import Link from "next/link";

const DepositPage = () => {
	return (
		<>
			<div className='flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2'>
				<ArrowRightIcon className="#000000" />
				<span className="underline">Cargar dinero</span>
			</div>
			<Container className={"bg-total-black  w-11/12 md:w-10/12 md:mt-6 py-9 md:py-10 pl-[26px] pr-[23px] md:pl-[35px]"}>
				<Link href={'/dashboard/transacciones/cuenta'} className="text-total-white flex items-center justify-between">
					<div className="flex items-center justify-start">
						<IconTransference/>
						<h2 className="text-xl font-bold text-total-primary pl-5">
							Transferencia bancaria
						</h2>
					</div>
					<ArrowRightIcon className="#0AEB8C" width="38px" height="38px" />
				</Link>
			</Container>
			<Container className={"bg-total-black  w-11/12 md:w-10/12 mt-3 py-9 md:py-10 pl-[26px] pr-[23px] md:pl-[35px]"}>
				<Link href={'/dashboard/transacciones/ingresar-dinero'} className="text-total-white flex items-center justify-between">
					<div className="flex items-center justify-start">
						<IconSelectCard />
						<h2 className="text-xl font-bold text-total-primary pl-5">
							Seleccionar tarjeta          
						</h2>
					</div>
					<ArrowRightIcon className="#0AEB8C" width="38px" height="38px" />
				</Link>
			</Container>
		</>
	);
};

export default DepositPage;
