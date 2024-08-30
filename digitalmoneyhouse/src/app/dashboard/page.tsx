"use client";
import ActivityList from "@/components/home/authenticated/ActivityList";
import CardUser from "@/components/home/authenticated/CardUser";
import { useSession } from "next-auth/react";
import accountAPI from "@/services/account/account.service";
import transactionsAPI from "@/services/transactions/transactions.service";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import Button from "@/components/common/buttons/Button";

export default async function DashboardPage() {
	const {data: session, status} = useSession();
  const token = session?.user.token;
  const getAccount = await accountAPI.getMyAccount(token)
  const activitiesList = await transactionsAPI.getAllTransactionsUser(token, getAccount.id)

  return (
    <>
      <div className="flex space-x-2 text-sm w-11/12 items-center md:hidden">
        <ArrowRightIcon/>
        <span className="underline">Inicio</span>
      </div>
      <CardUser amount={`${getAccount.available_amount}`}/>
      <div className="flex flex-col items-center w-full space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row lg:w-11/12">
        <Button children={"Ingresar dinero"} asLink={true} href={"/transacciones"} className="bg-total-primary border border-total-primary text-total-black w-11/12 text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl"/>
        <Button children={"Pago de servicios"} asLink={true} href={"/servicios"} className="bg-total-primary border border-total-primary text-total-black w-11/12 text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl"/>
      </div>
      <div className=" w-11/12">
        <div className="w-full flex items-center relative">
          <SearchIcon className="h-min absolute left-2"/>
          <input placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
        </div>
      </div>
      <ActivityList transactions={activitiesList}/>
    </>
  )
}