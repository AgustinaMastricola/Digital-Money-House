import transformDay from "@/utils/functions"
import { TransferenceType } from "@/types/transference.types"
import Link from "next/link"
import ElipseIcon from "@/components/common/icons/ElipseIcon"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"

type ActivityListProps = {
  transactions: TransferenceType[]
}

const ActivityList = ({transactions}:ActivityListProps) => {
  const transformDate = (date:string) => {
    const fecha = new Date(date)
    const dayName = fecha.getDay()
    const day = transformDay(dayName)
    return day
  }  
  const lastTenResults = Array.isArray(transactions) ? transactions.slice(0, 10) : []
  
  return (
    <div className="w-11/12 pl-2 pt-3 md:pl-10 lg:pl-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
      <h1 className="text-base my-2">Tu actividad</h1>
      <div className="w-11/12 flex flex-col-reverse">
        { lastTenResults ?
          lastTenResults.map((item, index)=>(
            <div key={`tansaction-${index}`}>
              <hr className="text-medium-gray opacity-30"/>
              <div  className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
                <ElipseIcon className={"fill-total-primary"} width="18" height="18"/>
                <p className="col-span-6 ml-2">{item.description}</p>
                <div className="flex flex-col col-span-5 items-start col-start-9 lg:col-start-11 xl:col-start-12">
                  <p>{item.description.match('transfriste')? `$ ${item.amount}`: `$ ${item.amount.toLocaleString('de-DE')}` }</p>
                  <p className="text-sm text-medium-gray">{transformDate(item.dated)}</p>
                </div>
              </div>
            </div>
          )) 
          :
          <>
          <p>No tienes transacciones en tu cuenta</p>
          </>
        }
      </div>
        <hr className="text-medium-gray opacity-30 mt-2 w-full"/>
      <div className="flex justify-between w-full pr-5 items-center">
        <Link href={'/actividad'} className="text-sm font-semibold py-3">Ver toda tu actividad</Link>
        <ArrowRightIcon/>
      </div>
    </div>
  )
}

export default ActivityList