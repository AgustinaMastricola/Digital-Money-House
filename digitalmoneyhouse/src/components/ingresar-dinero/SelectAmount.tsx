import React, { useState } from "react";
import Container from "../common/containers/Container";
import Button from "../common/buttons/Button";
import clsx from "clsx";
import { useDepositContext } from "@/context/DepositContextPrivider";
type SelectAmountProps = {
	handleClickStep: (n: number) => void;
};
const SelectAmount = ({ handleClickStep }: SelectAmountProps) => {
	const [amount, setAmount] = useState<number | null>();
	const { setAmountSelected } = useDepositContext();

	const handleGetAmount = (amount: string) => {
		const amountParsed = parseInt(amount);
		setAmount(amountParsed);
		setAmountSelected(amountParsed);
	};
	return (
		<>
			<Container
				className={
					"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col py-4 px-5"
				}
			>
				<h2 className="text-total-primary font-bold md:w-full">
					¿Cuánto querés ingresar a la cuenta?
				</h2>
				<div className="flex items-center justify-between">
					<input
						type="number"
						onChange={(e) => handleGetAmount(e.target.value)}
						placeholder="$0"
						className="mt-3 py-3 px-2 mb-4 w-full lg:w-4/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow"
					/>
				</div>
				<div className="flex w-full justify-end">
					<Button
						title={"Continuar"}
						disabled={!amount}
						className={clsx(
							"px-9 py-3 md:block md:w-full lg:w-auto mt-5 hidden",
							{
								"bg-total-primary border-total-primary ": amount,
								"bg-light-gray border-ligth-gray cursor-not-allowed": !amount,
							}
						)}
						onClick={() => handleClickStep(3)}
					/>
				</div>
			</Container>
			<div className="w-11/12 md:w-10/12 flex justify-end mt-4">
				<Button
					title={"Continuar"}
					disabled={!amount}
					className={clsx(
						"px-9 py-3 md:hidden shadow-md shadow-light-gray border-none",
						{
							"bg-total-primary border-total-primary ": amount,
							"bg-light-gray border-ligth-gray cursor-not-allowed": !amount,
						}
					)}
					onClick={() => handleClickStep(3)}
				/>
			</div>
		</>
	);
};

export default SelectAmount;
