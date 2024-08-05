'use client'

import Image from "next/image"
import ButtonHome from "../buttons/ButtonHome"
import iconSearch from "../../../public/search.png"
import ActivityList from "../lists/ActivityList"
import { useEffect, useState } from "react"
import transactionsAPI from "@/services/transactions/transactions.service"
import { useSession } from "next-auth/react"
import { ActivityUserType } from "@/types/activityUser.types"

const HomeAuthenticated = () => {
  const {data: session, status} = useSession();
  const [list, setList] = useState([]);

  const getDataActivity = async () => {
    if (session?.user?.token) {
      const res = await transactionsAPI.getActivitiesUser(`${session.user.token}`, 172);
      console.log(res)
      setList(res)
    }
  };

  useEffect(() => {
    getDataActivity();
  }, [session]);

  return (
    <div className="flex flex-col space-y-5 items-center py-5">
      <ButtonHome text={"Ingresar dinero"} href={"/transactions"}/>
      <ButtonHome text={"Pago de servicios"} href={"/services"}/>
      <div className="flex items-center w-11/12">
        <Image src={iconSearch} alt="icono buscar" className="h-min absolute left-10"/>
        <input placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 my-3 md:my-4 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
      </div>
      <ActivityList transactions={list}/>
    </div>
  )
}

export default HomeAuthenticated