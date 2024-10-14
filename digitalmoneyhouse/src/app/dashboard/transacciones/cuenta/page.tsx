"use client";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import ContainterDataAccount from "@/components/perfil/account/ContainterDataAccount";
import { useAccountContext } from "@/context/AccountContextProvider";
import React from "react";

const SelectMethodPage = () => {
	const account = useAccountContext();
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
				<ArrowRightIcon className="#000000" />
				<span className="underline">Cargar dinero</span>
			</div>
			<ContainterDataAccount account={account} className="md:mt-6 px-6 md:px-8 " />
		</>
	);
};

export default SelectMethodPage;
