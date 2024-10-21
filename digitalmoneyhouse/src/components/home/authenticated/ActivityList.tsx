import Button from "@/components/common/buttons/Button";
import ElipseIcon from "@/components/common/icons/ElipseIcon";
import useActivities from "@/hooks/useActivities";
import transformDate from "@/utils/functions/transformDate";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ActivityListProps {
	filter: string | null;
	accountId: number;
	token: string;
	valueInputSearch: string | null;
	page: number;
	onPageChange: (newPage: number) => void;
	showPagination: boolean;
}

const ActivityList = ({
	filter,
	accountId,
	token,
	valueInputSearch,
	page,
	onPageChange,
	showPagination,
}: ActivityListProps) => {
	const { filteredActivities, loading, totalPages } = useActivities(
		filter,
		accountId,
		token,
		valueInputSearch,
		page
	);
	const location = usePathname();
	const [shouldShowArrows, setShouldShowArrows] = useState(false);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

	useEffect(() => {
		const updateShouldShowArrows = () => {
			if (totalPages > 3){
        setShouldShowArrows(true);
      }
		};
		updateShouldShowArrows();
	}, [totalPages]);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 768) {
        const start = Math.max(0, page - 3);
        const end = Math.min(totalPages, start + 3);
        setVisiblePages(Array.from({ length: end - start }, (_, i) => start + i + 1));
      }
      if (width >= 768 && width < 1024) {
        const start = Math.max(0, page - 3);
        const end = Math.min(totalPages, start + 6);
        setVisiblePages(Array.from({ length: end - start }, (_, i) => start + i + 1));
      }
      if (width >= 1024) {
        const start = Math.max(0, page - 3);
        const end = Math.min(totalPages, start + 10);
        setVisiblePages(Array.from({ length: end - start }, (_, i) => start + i + 1));
      }
    }
    window.addEventListener("resize", updateWidth);

    updateWidth()
		return () => {
			window.removeEventListener("resize", updateWidth);
		};

  }, [page, totalPages]);

	return (
		<>
			<div className="w-11/12 flex flex-col">
				{loading ? (
					<p className="my-4">Cargando...</p>
				) : filteredActivities.length > 0 ? (
					filteredActivities.map((item, index) => (
						<Link
							key={`transaction-${index}`}
							href={
								location === "/dashboard/actividad"
									? `/dashboard/actividad/detalle/${item.id}`
									: `dashboard/actividad/detalle/${item.id}`
							}
						>
							<div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
								<div className="xl:ml-6">
									<ElipseIcon
										className={"fill-total-primary"}
										width="18"
										height="18"
									/>
								</div>
								<p className="col-span-6 ml-2">{item.description}</p>
								<div className="flex flex-col col-span-5 items-start col-start-9 lg:col-start-11 xl:col-start-12">
									<p>
										{item.description.match("transfriste")
											? `$ ${item.amount}`
											: `$ ${item.amount.toLocaleString("de-DE")}`}
									</p>
									<p className="text-sm text-medium-gray">
										{transformDate(item.dated)}
									</p>
								</div>
							</div>
							<hr className="text-medium-gray opacity-30" />
						</Link>
					))
				) : (
					<p className="my-4">No tienes transacciones en tu cuenta</p>
				)}
			</div>
			{showPagination && location === '/dashboard/actividad' && totalPages >= 1 && (
        <div className="flex items-center justify-center w-10/12">
          {shouldShowArrows && (
            <Button
              title="<"
              onClick={() => onPageChange(page > 1 ? page - 1 : 1)}
              className="border-none my-3 mx-2 py-2 px-3"
            />
          )}

          {visiblePages.map((pageNumber) => (
            <Button
              key={pageNumber}
              title={pageNumber.toString()}
              onClick={() => onPageChange(pageNumber)}
              className={page === pageNumber ? "bg-light-gray border-none my-3 mx-2 py-2 px-3" : "border-none my-3 mx-2 py-2 px-3"}
            />
          ))}

          {shouldShowArrows && (
            <Button
              title=">"
              onClick={() => onPageChange(page < totalPages ? page + 1 : totalPages)}
              className="border-none my-3 mx-2 py-2 px-3"
            />
          )}
        </div>
      )}
    </>
  );
};

export default ActivityList;
