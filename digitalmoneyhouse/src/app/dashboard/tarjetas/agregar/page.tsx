"use client";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import FormAddCard from "@/components/tarjetas/FormAddCard";
import accountAPI from "@/services/account/account.service";
import cardsAPI from "@/services/cards/cards.service";
import { useSession } from "next-auth/react";
import React from "react";

const AddNewCardPage = async () => {
	const { data: session, status } = useSession();
	const token = session?.user.token;
	const getAccount = await accountAPI.getMyAccount(token);
	const cardsList = await cardsAPI.getCardsByAccountID(token, getAccount.id);
	return (
		<>
			{cardsList.length >= 10 ? (
				<div className="w-11/12 md:mt-4 mb-4 flex items-center justify-around h-full xl:w-10/12 md:w-10/12 border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl">
					<p>El límite máximo de tarjetas asociadas a una cuenta es de 10. <br/> Para poder cargar una tarjeta nueva, deberás eliminar alguna de la lista.</p>
				</div>
			) : (
				<>
					<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
						<ArrowRightIcon />
						<span className="underline">Tarjetas / Agregar</span>
					</div>
					<FormAddCard />
				</>
			)}
		</>
	);
};

export default AddNewCardPage;
