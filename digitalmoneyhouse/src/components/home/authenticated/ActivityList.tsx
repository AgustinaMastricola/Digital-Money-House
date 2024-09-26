'use client'
import ElipseIcon from "@/components/common/icons/ElipseIcon";
import useActivities from "@/hooks/useActivities";
import transformDate from "@/utils/functions/transformDate";
interface ActivityListProps {
  filter: string | null;
  accountId: number;
  token: string;
}

const ActivityList = ({ filter, accountId, token }:ActivityListProps) => {
  const { filteredActivities, loading } = useActivities(accountId, token, filter, 1);
  
  return (
    <div className="w-11/12 flex flex-col-reverse">
      {
      loading ? <p>Cargando...</p>
      :
      filteredActivities.length > 0 
      ?
      filteredActivities.map((item, index) => (
          <div key={`transaction-${index}`}>
            <hr className="text-medium-gray opacity-30" />
            <div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
              <ElipseIcon className={"fill-total-primary"} width="18" height="18" />
              <p className="col-span-6 ml-2">{item.description}</p>
              <div className="flex flex-col col-span-5 items-start col-start-9 lg:col-start-11 xl:col-start-12">
                <p>{item.description.match('transfriste') ? `$ ${item.amount}` : `$ ${item.amount.toLocaleString('de-DE')}`}</p>
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

export default ActivityList;