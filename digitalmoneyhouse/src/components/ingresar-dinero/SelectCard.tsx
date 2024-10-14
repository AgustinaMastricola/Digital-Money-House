import React, { useState } from "react";
import Container from "../common/containers/Container";
import ListCards from "../tarjetas/ListCards";
import Link from "next/link";
import AddIcon from "../common/icons/AddIcon";
import Button from "../common/buttons/Button";
import clsx from "clsx";
import { useDepositContext } from "@/context/DepositContextPrivider";
type SelectCardProps = {
	handleClickStep: (n: number) => void;
};
const SelectCard = ({ handleClickStep }: SelectCardProps) => {
	const [cardId, setCardId] = useState<number | null>();
	const { setCardIdSelected } = useDepositContext();

	const handleGetCardSelected = (card_id: number) => {
		setCardId(card_id);
		setCardIdSelected(card_id);
	};

	return (
		<>
			<Container
				className={
					"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col py-4 px-5"
				}
			>
				<h2 className="text-total-primary font-bold md:w-full">
					Seleccionar tarjeta
				</h2>
				<ListCards
					className="w-full px-4 py-2 mt-5"
					canDelete={false}
					handleGetCardSelected={handleGetCardSelected}
				/>
				<div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
					<Link
						className="flex items-center space-x-4 mt-5"
						href={"/dashboard/tarjetas/agregar"}
					>
						<AddIcon />
						<p className="text-total-primary font-bold">Nueva tarjeta</p>
					</Link>
					<Button
						title={"Continuar"}
						disabled={!cardId}
						className={clsx(
							"px-9 py-3 md:block md:w-full lg:w-auto mt-5 hidden",
							{
								"bg-total-primary border-total-primary ": cardId,
								"bg-light-gray border-ligth-gray cursor-not-allowed": !cardId,
							}
						)}
						onClick={() => handleClickStep(2)}
					/>
				</div>
			</Container>
			<div className="w-11/12 md:w-10/12 flex justify-end mt-4">
				<Button
					title={"Continuar"}
					disabled={!cardId}
					className={clsx(
						"px-9 py-3 md:hidden shadow-md shadow-light-gray border-none",
						{
							"bg-total-primary border-total-primary ": cardId,
							"bg-light-gray border-ligth-gray cursor-not-allowed": !cardId,
						}
					)}
					onClick={() => handleClickStep(2)}
				/>
			</div>
		</>
	);
};

export default SelectCard;
