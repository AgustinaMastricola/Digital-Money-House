import { useState, useEffect } from "react";
import transactionsAPI from "@/services/transactions/transactions.service";
import { TransferenceType } from "@/types/transference.types";
import { usePathname } from "next/navigation";

const useActivities = (
  filter: string | null,
  account_id: number,
  token: string,
  valueInputSearch: string | null,
  page: number,
) => {
  const [activities, setActivities] = useState<TransferenceType[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<TransferenceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const location = usePathname();
  const resultPerPage = 10;

  useEffect(() => {
    // Fetch activities from the backend and store them in the state
    const fetchActivities = async () => {
      setLoading(true);
      const data = await transactionsAPI.getAllTransactionsUser(
        account_id,
        token
      );
      const sortedData = Array.isArray(data) ? data.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime()) : [];
      setActivities(sortedData);
      setLoading(false);
    };
    fetchActivities();
  }, [account_id, token]);

  useEffect(() => {
    const applyFilter = () => {
      let filtered: TransferenceType[] = activities;
      const now = new Date();

      // Apply date filter
      if (filter !== null && location === '/dashboard/actividad') {
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
      }

      // Apply search filter
      if (valueInputSearch !== null && valueInputSearch !== '') {
        filtered = filtered.filter((activity) => {
          return (
            typeof activity.description === 'string' &&
            typeof valueInputSearch === 'string' &&
            activity.description.toLowerCase().includes(valueInputSearch.toLowerCase())
          );
        });
      }

      // Calculate total pages based on filtered results
      const calculatedTotalPages = Math.ceil(filtered.length / resultPerPage);
      setTotalPages(calculatedTotalPages);

      // Apply pagination
      const startPage = (page - 1) * resultPerPage;
      const endPage = startPage + resultPerPage;
      const paginated = filtered.slice(startPage, endPage);
      setFilteredActivities(paginated);
    };

    applyFilter();
  }, [activities, filter, page, valueInputSearch, location]);

  return { filteredActivities, loading, totalPages };
};

export default useActivities;