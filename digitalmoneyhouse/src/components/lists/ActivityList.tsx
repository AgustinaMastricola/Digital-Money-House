import { ActivityUserType } from "@/types/activityUser.types"
import Image from "next/image"
import ellipse from "../../../public/Ellipse.png"
import { useState } from "react"
import transformDay from "@/utils/functions"

type ActivityListProps = {
  transactions: ActivityUserType[]
}

const ActivityList = ({transactions}:ActivityListProps) => {
  const transformDate = (date:string) => {
    const fecha = new Date(date)
    const dayName = fecha.getDay()
    const day = transformDay(dayName)
    return day
  }

  return (
    <div className="w-11/12 pl-2 md:pl-10 lg:pl-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
      <h1 className="text-base my-2">Tu actividad</h1>
      <div className="w-11/12 space-y-4">
        {
          transactions.map((item, index)=>(
            <div className="space-y-2">
              <hr className="text-medium-gray opacity-30"/>
              <div key={`tansaction-${index}`} className="grid gap-x-2 grid-cols-12 items-center w-full">
                <Image src={ellipse} alt="icono"/>
                <p className="col-span-6">{item.description}</p>
                <div className="flex flex-col col-span-4 items-center ">
                  <p>{item.description.match('transfriste')? `-$ ${item.amount}`: `$ ${item.amount}` }</p>
                  <p className="text-sm text-medium-gray">{transformDate(item.dated)}</p>
                </div>
              </div>
            </div>
          )) 
        }
      </div>
      <hr className="text-medium-gray opacity-30 mt-2 w-full"/>
      <button className="text-sm font-semibold py-3">Ver toda tu actividad</button>
    </div>
  )
}

export default ActivityList