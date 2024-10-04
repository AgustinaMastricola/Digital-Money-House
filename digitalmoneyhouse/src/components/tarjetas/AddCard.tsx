import Link from "next/link";
import React from "react";
import AddIcon from "../common/icons/AddIcon";
import ArrowRightIcon from "../common/icons/ArrowRight";
import Container from "../common/containers/Container";

const AddCard = () => {
	return (
		<Container className={'bg-total-black w-11/12 md:w-10/12 md:mt-6 p-5'}>
			<h2 className="text-total-white text-start">
				Agregá tu tarjeta de débito o crédito
			</h2>
			<div className="flex items-center justify-between  mt-5 md:mt-10 ">
				<Link
					className="flex items-center space-x-4"
					href={"/dashboard/tarjetas/agregar"}
				>
					<AddIcon />
					<p className="text-total-primary font-bold">Nueva tarjeta</p>
				</Link>
				<Link href={"/dashboard/tarjetas/agregar"}>
					<ArrowRightIcon className="#0aeb8c" width="32" height="32"/>
				</Link>
			</div>
		</Container>
	);
};

export default AddCard;
