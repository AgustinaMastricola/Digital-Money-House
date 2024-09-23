'use client'
import ElipseIcon from "@/components/common/icons/ElipseIcon"
import { useAccountContext } from "@/context/AccountContextProvider";
import { useUserContext } from "@/context/UserContextProvider";
import transactionsAPI from "@/services/transactions/transactions.service"
import { TransferenceType } from "@/types/transference.types";
import transformDay from "@/utils/functions"
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

  const transformDate = (date: string) => {
    const dateTransaction = new Date(date);
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    const dayTransaction = dateTransaction.getDate();
    const monthNow = dateNow.getMonth();
    const monthTransaction = dateTransaction.getMonth();
    const difDays = dayNow - dayTransaction;
  
    // Verificar si la diferencia de días es mayor a 7 o menor a -7, o si son de meses diferentes
    if (difDays > 7 || difDays < -7 || monthNow !== monthTransaction) {
      const dayName = transformDay(dateTransaction.getDay());
      const day = dateTransaction.getDate();
      const month = dateTransaction.toLocaleString('default', { month: 'short' });
      return `${dayName} ${day} ${month}`;
    } else {
      const dayName = transformDay(dateTransaction.getDay());
      return dayName;
    }
  }

  const getFilteredActivityList = () => {
    // Ordenar el array por fecha en orden descendente
    if(!Array.isArray(activityList)) {
      return [];
    }
    const sortedActivityList = [...activityList].sort((a, b) => new Date(a.dated).getTime() - new Date(b.dated).getTime());

    if(location === '/dashboard'){
      // Tomar los primeros 10 elementos del array ordenado
      return sortedActivityList.slice(-10);
    }
    return sortedActivityList;
  }

  const filteredActivityList = getFilteredActivityList();

  return (
    <div className="w-11/12 flex flex-col-reverse">
        { filteredActivityList.length > 0 ?
          filteredActivityList.map((item, index)=>( 
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