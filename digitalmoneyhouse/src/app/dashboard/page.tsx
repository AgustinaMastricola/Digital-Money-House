'use client'
import CardUser from "@/components/home/authenticated/CardUser";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import Button from "@/components/common/buttons/Button";
import { useState } from "react";
import Container from "@/components/common/containers/Container";
import ActivityList from "@/components/home/authenticated/ActivityList";
import Link from "next/link";
import { useAccountContext } from "@/context/AccountContextProvider";
import { useUserContext } from "@/context/UserContextProvider";

export default function DashboardPage() {
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1); // Estado para la página actual
  const { id } = useAccountContext();
  const { token } = useUserContext();

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      setValueInput(null);
      return;
    }
    setValueInput(value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Inicio</span>
      </div>
      <CardUser/>
      <div className="flex flex-col items-center space-y-4 w-11/12 md:w-10/12 lg:flex-row lg:items-center lg:space-x-4">
        <Button title={"Ingresar dinero"} asLink={true} href={"/transacciones"} className="bg-total-primary border border-total-primary text-total-black w-full text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl mt-4"/>
        <Button title={"Pago de servicios"} asLink={true} href={"/servicios"} className="bg-total-primary border border-total-primary text-total-black w-full text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl"/>
      </div>
      <div className=" w-11/12 md:w-10/12">
        <div className="w-full flex items-center relative my-4">
          <SearchIcon className="h-min absolute left-2"/>
          <input onChange={handleInputSearchChange} placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
        </div>
      </div>
      <Container className="border border-total-gray border-opacity-15 bg-total-white drop-shadow-2xl w-11/12 md:w-10/12 flex flex-col  pl-3 pt-3 mb-4">
        <h1 className="text-base my-2">Tu actividad</h1>
        <ActivityList 
          filter={null} 
          accountId={id} 
          token={token} 
          valueInputSearch={valueInput} 
          page={page} 
          onPageChange={handlePageChange} 
          showPagination={false}
        />
        <div className="flex justify-between w-11/12 pr-5 mt-2 items-center">
          <Link href={'/dashboard/actividad'} className="text-sm font-semibold py-3">Ver toda tu actividad</Link>
          <ArrowRightIcon className="#000000"/>
        </div>
      </Container>
    </>
  );
}