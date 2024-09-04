import Link from "next/link";
import React from "react";
import AddIcon from "../common/icons/AddIcon";
import ArrowRightIcon from "../common/icons/ArrowRight";

const AddCard = () => {
	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-3 flex flex-col py-8 md:px-5 space-y-8">
			<h2 className="text-total-white text-center md:text-start">
				Agregá tu tarjeta de débito o crédito
			</h2>
			<div className="flex items-center justify-between  mt-5 md:mt-10 ">
				<Link
					className="flex items-center space-x-4"
					href={"/dashboard/tarjetas/agregar"}
				>
					<AddIcon />
					<p className="text-total-primary">Nueva tarjeta</p>
				</Link>
				<Link href={"/dashboard/tarjetas/agregar"}>
					<ArrowRightIcon className="fill-total-primary" />
				</Link>
			</div>
		</div>
	);
};

export default AddCard;
