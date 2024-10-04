'use client'
import Container from "@/components/common/containers/Container";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import ListCards from "@/components/tarjetas/ListCards";
import React from "react";

const TarjetasPage = () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 items-center md:hidden my-2">
				<ArrowRightIcon className="#000000" />
				<span className="underline">Cargar dinero</span>
			</div>
      <Container className={'bg-total-black'}>
        <div className="mt-4 mb-6x mx-5">
        <h2 className="text-total-primary font-bold">Seleccionar tarjeta</h2>
        <ListCards/>
        </div>
      </Container>
		</>
	);
};

export default TarjetasPage;
