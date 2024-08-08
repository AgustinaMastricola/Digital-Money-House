'use client'
import Image from "next/image"
import ButtonHome from "../buttons/ButtonHome"
import iconSearch from "../../../public/search.png"
import arrow from "../../../public/Vector1.png"
import ActivityList from "../lists/ActivityList"
import { useEffect, useState } from "react"
import transactionsAPI from "@/services/transactions/transactions.service"
import { useSession } from "next-auth/react"
import CardUser from "../cards/CardUser"
import accountAPI from "@/services/account/account.service"
import { AccountData } from "@/types/account.types"
import { TransferenceType } from "@/types/transference.types"
import MenuMobile from "../menu/MenuMobile"
import Footer from "../footer/Footer"

const HomeAuthenticated = () => {
  const {data: session, status} = useSession();
  const [list, setList] = useState<TransferenceType[]>([]);
  const [myAccount, setMyAccount] = useState<AccountData>({
    "alias":'',
    "available_amount": 0,
    "cvu": '',
    "id": -1,
    "user_id": -1
  })
  const [amountFormated, setAmmountFormated] = useState('')

  const getDataActivity = async () => {
    if (session?.user?.token) {
      const res = await transactionsAPI.getAllTransactionsUser(`${session.user.token}`, 149);
      console.log(res)
      setList(res)
    }
  };
  
  const getDataAccount = async () => {
    if (session?.user?.token) {
      const res = await accountAPI.getMyAccount(`${session.user.token}`);
      console.log(res)
      setMyAccount(res)
    }
  }
  useEffect(() => {
    getDataActivity();
    getDataAccount()
    setAmmountFormated(myAccount.available_amount.toLocaleString('de-DE'))
  }, [session, list.length]);

  return (
    <>
      <div className="md:w-full md:flex md:justify-between">
        <MenuMobile/>
        <div className="flex flex-col space-y-4 items-center py-5 md:w-8/12 lg:w-9/12 xl:w-10/12">
          <div className="flex space-x-2 text-sm w-11/12">
            <Image src={arrow} alt={"flecha inicio"}/>
            <span className="underline">Inicio</span>
          </div>
          <CardUser amount={amountFormated}/>
          <ButtonHome text={"Ingresar dinero"} href={"/transactions"}/>
          <ButtonHome text={"Pago de servicios"} href={"/services"}/>
          <div className=" w-11/12">
            <div className="w-full flex items-center relative">
              <Image src={iconSearch} alt="icono buscar" className="h-min absolute left-4"/>
              <input placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
            </div>
          </div>
          <ActivityList transactions={list}/>
        </div>
      </div>
    </>
  )
}

export default HomeAuthenticated