import Button from "@/components/common/buttons/Button";
import ElipseIcon from "@/components/common/icons/ElipseIcon";
import useActivities from "@/hooks/useActivities";
import transformDate from "@/utils/functions/transformDate";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActivityListProps {
  filter: string | null;
  accountId: number;
  token: string;
  valueInputSearch: string | null;
  page: number;
  onPageChange: (newPage: number) => void;
  showPagination: boolean; 
}

const ActivityList = ({ filter, accountId, token, valueInputSearch, page, onPageChange, showPagination }: ActivityListProps) => {
  const { filteredActivities, loading, totalPages } = useActivities(filter, accountId, token, valueInputSearch, page);
  const location = usePathname();

  return (
    <>
      <div className="w-11/12 flex flex-col">
        {loading ? (
          <p>Cargando...</p>
        ) : filteredActivities.length > 0 ? (
          filteredActivities.map((item, index) => (
            <Link key={`transaction-${index}`} 
            href={
              location === '/dashboard/actividad' ? `/dashboard/actividad/detalle/${item.id}` : `dashboard/actividad/detalle/${item.id}`
            }>
              <div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
                <div className="xl:ml-6">

                <ElipseIcon className={"fill-total-primary"} width="18" height="18" />
                </div>
                <p className="col-span-6 ml-2">{item.description}</p>
                <div className="flex flex-col col-span-5 items-start col-start-9 lg:col-start-11 xl:col-start-12">
                  <p>{item.description.match('transfriste') ? `$ ${item.amount}` : `$ ${item.amount.toLocaleString('de-DE')}`}</p>
                  <p className="text-sm text-medium-gray">{transformDate(item.dated)}</p>
                </div>
              </div>
              <hr className="text-medium-gray opacity-30" />
            </Link>
          ))
        ) : (
          <p>No tienes transacciones en tu cuenta</p>
        )}
      </div>
      {showPagination && location === '/dashboard/actividad' && totalPages >= 1 && (
        <div className="flex items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              title={(index + 1).toString()}
              onClick={() => onPageChange(index + 1)}
              className={page === index + 1 ? "bg-light-gray bg-opacity-30 border-none my-3 mx-2 py-2 px-3" : "border-none my-3 mx-2 py-2 px-3"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ActivityList;