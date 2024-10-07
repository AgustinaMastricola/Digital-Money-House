"use client";
import Container from "@/components/common/containers/Container";
import AddIcon from "@/components/common/icons/AddIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import ListCards from "@/components/tarjetas/ListCards";
import Link from "next/link";
import React from "react";

const TarjetasPage = () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
				<ArrowRightIcon className="#000000" />
				<span className="underline">Cargar dinero</span>
			</div>
			<Container className={"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col py-4 px-5"}>
				<h2 className="text-total-primary font-bold md:w-full">Seleccionar tarjeta</h2>
				<ListCards className="w-full px-4 py-2 mt-5" canDelete={false}/>
				<Link
					className="flex items-center space-x-4 mt-5"
					href={"/dashboard/tarjetas/agregar"}
				>
					<AddIcon />
					<p className="text-total-primary font-bold">Nueva tarjeta</p>
				</Link>
			</Container>
		</>
	);
};

export default TarjetasPage;
