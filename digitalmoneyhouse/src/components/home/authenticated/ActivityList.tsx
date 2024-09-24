'use client'
import ElipseIcon from "@/components/common/icons/ElipseIcon"
import { useAccountContext } from "@/context/AccountContextProvider";
import { useUserContext } from "@/context/UserContextProvider";
import transactionsAPI from "@/services/transactions/transactions.service"
import { TransferenceType } from "@/types/transference.types";
import transformDate from "@/utils/functions/transformDate";
import { usePathname } from "next/navigation";
import { memo, useEffect, useState } from "react"

const ActivityList = () => {
  const {token} = useUserContext()
  const {id} = useAccountContext() 
  const [activityList, setActivityList] = useState<TransferenceType[]>([]);
  const location = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const data = await transactionsAPI.getAllTransactionsUser(id, token);
      setActivityList(data);
    };
    fetchData();
  }, [token, id]);

  const orderedList = Array.isArray(activityList) ? activityList.toReversed() : [];
  const lastTenResults = orderedList.slice(-10);

  return (
    <div className="w-11/12 flex flex-col-reverse">
        { lastTenResults.length > 0 ?
          lastTenResults.map((item, index)=>( 
            <div key={`transaction-${index}`}>
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
          <p>No tienes transacciones en tu cuenta</p>
        }
      </div>
  )
}

export default memo(ActivityList)