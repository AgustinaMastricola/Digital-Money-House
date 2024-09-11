'use client'
import ElipseIcon from "@/components/common/icons/ElipseIcon"
import { useUserContext } from "@/context/UserContextProvider";
import transactionsAPI from "@/services/transactions/transactions.service"
import { TransferenceType } from "@/types/transference.types";
import transformDay from "@/utils/functions"
import { memo, useEffect, useState } from "react"

const ActivityList = () => {
  const {token, account_id} = useUserContext();
  const [transactions, setTransactions] = useState<TransferenceType[]>([]);

  useEffect(() => {
    const fetchTransactions = () => {
      transactionsAPI.getAllTransactionsUser(token, account_id)
        .then(result => {
          setTransactions(result.slice(0, 10));
        })
        .catch(error => {
          console.error('Error fetching transactions:', error);
        });
    };
    fetchTransactions();
  }, []);
  
  const transformDate = (date:string) => {
    const fecha = new Date(date)
    const dayName = fecha.getDay()
    const day = transformDay(dayName)
    return day
  }  
  const lastTenResults = Array.isArray(transactions) ? transactions.slice(0, 10) : []

  return (
    <div className="w-11/12 flex flex-col-reverse">
        { lastTenResults.length > 0 ?
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
  )
}

export default memo(ActivityList)