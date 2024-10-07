"use client";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import AddCard from "@/components/tarjetas/AddCard";
import ListCards from "@/components/tarjetas/ListCards";

const CardsPage = () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Tarjetas</span>
      </div>
			<AddCard/>
			<ListCards className="w-11/12 md:w-10/12 mt-4 md:mt-6 px-5 py-2" canDelete={true}/>
		</>
	);
};

export default CardsPage;
