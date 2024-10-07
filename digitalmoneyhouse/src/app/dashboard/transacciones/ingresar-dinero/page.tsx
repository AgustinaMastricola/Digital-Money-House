"use client";
import Button from "@/components/common/buttons/Button";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import CheckDeposit from "@/components/ingresar-dinero/CheckDeposit";
import SelectAmount from "@/components/ingresar-dinero/SelectAmount";
import SelectCard from "@/components/ingresar-dinero/SelectCard";
import React, { useState } from "react";

const IngresarDineroPage = () => {
	const [stepDeposit, setStepDeposit] = useState<number>(1);

	const handleClickStep = (step: number) => {
		setStepDeposit(step);
	}
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
				<ArrowRightIcon className="#000000" />
				<span className="underline">Cargar dinero</span>
			</div>
			{stepDeposit === 1 ? (
				<SelectCard handleClickStep={handleClickStep}/>
			) : stepDeposit === 2 ? (
				<SelectAmount />
			) : stepDeposit === 3 ? (
				<CheckDeposit />
			) : (
				<></>
			)}
			<div className="w-11/12 md:w-10/12 flex justify-end mt-4">
				<Button
					title={"Continuar"}
					className={
						"bg-total-primary border-total-primary px-9 py-3 md:hidden"
					}
					onClick={() => handleClickStep(stepDeposit + 1)}
				/>
			</div>
		</>
	);
};

export default IngresarDineroPage;
