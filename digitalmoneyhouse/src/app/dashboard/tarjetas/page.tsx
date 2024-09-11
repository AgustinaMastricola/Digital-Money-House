"use client";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import AddCard from "@/components/tarjetas/AddCard";
import ListCards from "@/components/tarjetas/ListCards";

const CardsPage = () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
        <ArrowRightIcon/>
        <span className="underline">Tarjetas</span>
      </div>
			<AddCard/>
			<ListCards/>
		</>
	);
};

export default CardsPage;
