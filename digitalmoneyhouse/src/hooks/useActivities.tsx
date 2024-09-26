import { useState, useEffect } from "react";
import transactionsAPI from "@/services/transactions/transactions.service";
import { TransferenceType } from "@/types/transference.types";
import { usePathname } from "next/navigation";

const useActivities = (
	account_id: number,
	token: string,
	filter: string | null,
	page: number
) => {
	const [activities, setActivities] = useState<TransferenceType[]>([]);
	const [filteredActivities, setFilteredActivities] = useState<TransferenceType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
  const location = usePathname();

	useEffect(() => {
		//Busco en el back la lista de actividades completa y la guardo en el estado l-11
		const fetchActivities = async () => {
			setLoading(true);
			const data = await transactionsAPI.getAllTransactionsUser(
				account_id,
				token
			);
			setActivities(data);
			setLoading(false);
		};
		fetchActivities();
	}, [account_id, token, filter]);

	useEffect(() => {
		const applyFilter = () => {
			let filtered = activities;
			const now = new Date();
      
      //Aplico el filtro fecha a la lista completa de actividades y guardo el resultado en el estado l-12
			if(filter !== null && location === '/dashboard/actividad'){
        switch (filter) {
          case "today":
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate.toDateString() === now.toDateString();
            });
            break;
          case "yesterday":
            const yesterday = new Date(now);
            yesterday.setDate(now.getDate() - 1);
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate.toDateString() === yesterday.toDateString();
            });
            break;
          case "lastWeek":
            const lastWeek = new Date(now);
            lastWeek.setDate(now.getDate() - 7);
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate >= lastWeek && activityDate <= now;
            });
            break;
          case "last15days":
            const last15days = new Date(now);
            last15days.setDate(now.getDate() - 15);
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate >= last15days && activityDate <= now;
            });
            break;
          case "lastMonth":
            const lastMonth = new Date(now);
            lastMonth.setMonth(now.getMonth() - 1);
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate >= lastMonth && activityDate <= now;
            });
            break;
          case "lastYear":
            const lastYear = new Date(now);
            lastYear.setFullYear(now.getFullYear() - 1);
            filtered = activities.filter((activity) => {
              const activityDate = new Date(activity.dated);
              return activityDate >= lastYear && activityDate <= now;
            });
            break;
          default:
            break;
        }
        setFilteredActivities(filtered);
        // // Paginar resultados
        // const startIndex = (page - 1) * 10;
        // const paginated = filtered.slice(startIndex, startIndex + 10);
      }
      const lastTenResults = filtered.slice(-10);
      setFilteredActivities(lastTenResults)
		};
		applyFilter();
	}, [activities, activities.length, filter, page]);

	return { filteredActivities, loading };
};

export default useActivities;
