import { useAccountContext } from "@/context/AccountContextProvider";
import Button from "../common/buttons/Button";
import Container from "../common/containers/Container";
import { useState } from "react";
import ConfirmMessage from "../common/messages/ConfirmMessage";
import Link from "next/link";
import { DepositResponseType } from "@/types/deposit.types";
import transformMonth from "@/utils/functions/transformMonth";

type DetailDepositProps = {
	deposit: DepositResponseType;
};

const DetailDeposit = ({ deposit }: DetailDepositProps) => {
	const { cvu } = useAccountContext();
	const [succesMessage, setSuccesMessage] = useState<string>("");

	const year = new Date(deposit?.dated ?? "").getFullYear();
	const month = transformMonth(new Date(deposit?.dated ?? "").getMonth() + 1);
	const day = new Date(deposit?.dated ?? "").getDate();
	const hours = new Date(deposit?.dated ?? "").getHours();
	const minutes = new Date(deposit?.dated ?? "").getMinutes();

	return (
		<>
			{succesMessage && (
				<ConfirmMessage text={"Ya cargamos el dinero en tu cuenta"} />
			)}
			<Container
				className={
					"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col"
				}
			>
				<div>
					<div className="flex items-center">
						<span className="text-total-white font-light text-xs">
							{day} de {month} {year} a las {hours}:{minutes} hs.
						</span>
					</div>
					<span className="text-total-primary font-bold mr-2 text-xl">
						${deposit.amount}
					</span>
				</div>
				<div className="mt-7">
					<div className="flex items-center">
						<span className="text-total-white font-light mr-2 text-xs">Para</span>
					</div>
					<span className="text-total-primary font-bold mr-2 text-xl">
						Cuenta propia
					</span>
				</div>
				<div className="mt-7">
					<div className="flex items-center text-total-white">
						<span className="text-total-white font-light mr-2 text-base">
							Digital Money House
						</span>
					</div>
					<span className="text-total-white text-xs">CVU</span>
					<span className="text-total-white ml-2 text-xs">{cvu}</span>
				</div>
				<div className="lg:flex lg:justify-end">
					{succesMessage && (
						<div className="w-full flex flex-col md:flex-row-reverse">
							<Button
								title={"Descargar comprobante"}
								className={
									"bg-total-primary border-total-primary px-9 py-3 md:block mt-5 text-sm lg:text-base hidden "
								}
							/>
							<Link
								className={
									"text-center font-bold border mr-3 rounded-lg bg-light-gray border-ligth-gray px-9 py-3 md:block mt-5 hidden "
								}
								href={"/dashboard"}
							>
								Ir al inicio
							</Link>
						</div>
					)}
				</div>
			</Container>
		</>
	);
};

export default DetailDeposit;
