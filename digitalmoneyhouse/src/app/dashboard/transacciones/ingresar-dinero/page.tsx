"use client";
import Button from "@/components/common/buttons/Button";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import CheckDeposit from "@/components/ingresar-dinero/CheckDeposit";
import SelectAmount from "@/components/ingresar-dinero/SelectAmount";
import SelectCard from "@/components/ingresar-dinero/SelectCard";
import DepositProvider from "@/context/DepositContextPrivider";
import { useState } from "react";

const IngresarDineroPage = () => {
	const [stepDeposit, setStepDeposit] = useState<number>(1);

	const handleClickStep = (step: number) => {
		setStepDeposit(step);
	};
	return (
		<>
			<DepositProvider>
				<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
					<ArrowRightIcon className="#000000" />
					<span className="underline">Cargar dinero</span>
				</div>
				{stepDeposit === 1 ? (
					<SelectCard handleClickStep={handleClickStep} />
				) : stepDeposit === 2 ? (
					<SelectAmount handleClickStep={handleClickStep} />
				) : stepDeposit === 3 ? (
					<CheckDeposit handleClickStep={handleClickStep} />
				) : (
					<></>
				)}
			</DepositProvider>
		</>
	);
};

export default IngresarDineroPage;
