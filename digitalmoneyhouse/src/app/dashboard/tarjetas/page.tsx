"use client";

import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import AddCard from "@/components/tarjetas/AddCard";
import ListCards from "@/components/tarjetas/ListCards";
import accountAPI from "@/services/account/account.service";
import cardsAPI from "@/services/cards/cards.service";
import { useSession } from "next-auth/react";

const page = async () => {
	const {data: session, status} = useSession();
  const token = session?.user.token;
  const getAccount = await accountAPI.getMyAccount(token)
  const cardsList = await cardsAPI.getCardsByAccountID(token, getAccount.id)
	
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
        <ArrowRightIcon/>
        <span className="underline">Tarjetas</span>
      </div>
			<AddCard/>
			<ListCards cardsList={cardsList}/>
		</>
	);
};

export default page;
