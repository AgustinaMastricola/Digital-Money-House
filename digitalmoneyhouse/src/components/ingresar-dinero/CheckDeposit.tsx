import { useAccountContext } from "@/context/AccountContextProvider";
import Button from "../common/buttons/Button";
import Container from "../common/containers/Container";
import IconEditMont from "../common/icons/IconEditMont";
import { useDepositContext } from "@/context/DepositContextPrivider";
import { useState } from "react";
import transactionsAPI from "@/services/transactions/transactions.service";
import { useUserContext } from "@/context/UserContextProvider";
import ConfirmMessage from "../common/messages/ConfirmMessage";
import Link from "next/link";
import DetailDeposit from "./DetailDeposit";
import { DepositResponseType } from "@/types/deposit.types";
import clsx from "clsx";

type CheckDepositProps = {
	handleClickStep: (n: number) => void;
};

const CheckDeposit = ({ handleClickStep }: CheckDepositProps) => {
	const { token } = useUserContext();
	const { cvu, id } = useAccountContext();
	const { origin, amount } = useDepositContext();
	const [dataDeposit, setDataDeposit] = useState<DepositResponseType>();
	const [succesMessage, setSuccesMessage] = useState<string>("");

	const handleSubmit = () => {
		const postDeposit = async () => {
			const res = await transactionsAPI
				.createDeposit(token, id, {
					amount: amount,
					origin: origin,
					destination: cvu,
					dated: new Date().toISOString(),
				})
				.then((res) => {
					setSuccesMessage("Ya cargamos el dinero en tu cuenta");
					setDataDeposit(res);
				})
				.catch((err) => {
					console.log(err);
					setDataDeposit(undefined);
				});
			console.log(res);
		};
		if (token) {
			postDeposit();
		}
	};

	return (
		<>
			{succesMessage && (
				<ConfirmMessage text={"Ya cargamos el dinero en tu cuenta"} />
			)}
			<Container
				className={
					"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col py-4 px-5 mb-4"
				}
			>
				{!succesMessage && (
					<>
						<h2 className="text-total-primary font-bold md:w-full">
							Revisá que está todo bien
						</h2>
						<hr className="text-medium-gray md:hidden my-4" />
						<div>
							<div className="flex items-center md:mt-4">
								<span className="text-total-white font-light mr-2">
									Vas a transferir
								</span>
								<Button onClick={() => handleClickStep(2)} title={""}>
									<IconEditMont />
								</Button>
							</div>
							<span className="text-total-white font-bold mr-2">${amount}</span>
						</div>
						<div className="mt-7">
							<div className="flex items-center">
								<span className="text-total-white font-light mr-2">Para</span>
							</div>
							<span className="text-total-white font-bold mr-2 text-xl">
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
							<Button
								title={"Confirmar"}
								className={clsx(
									"bg-total-primary border-total-primary px-9 py-3 md:block md:w-full lg:w-4/12 hidden mt-5",
									{ hidden: succesMessage }
								)}
								onClick={handleSubmit}
							/>
						</div>
					</>
				)}
				{succesMessage && dataDeposit && (
					<>
						<DetailDeposit deposit={dataDeposit} />
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
					</>
				)}
			</Container>
			{succesMessage && dataDeposit && (
				<>
					<div className=" w-11/12 flex flex-col md:hidden">
						<Button
							title={"Descargar comprobante"}
							className={
								"bg-total-primary border-total-primary px-9 py-3 border-none"
							}
						/>
						<Link
							className={
								"text-center font-bold border rounded-lg bg-light-gray border-none px-9 py-3 my-3"
							}
							href={"/dashboard"}
						>
							Ir al inicio
						</Link>
					</div>
				</>
			)}
			<div className="flex justify-end w-11/12 md:w-10/12 md:hidden">
				<Button
					title={"Confirmar"}
					className={clsx(
						"bg-total-primary border-total-primary px-9 py-3 md:w-full lg:w-4/12",
						{ hidden: succesMessage }
					)}
					onClick={handleSubmit}
				/>
			</div>
		</>
	);
};

export default CheckDeposit;
