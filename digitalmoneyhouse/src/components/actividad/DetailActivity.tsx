import React, { useEffect, useState } from "react";
import Container from "../common/containers/Container";
import { useAccountContext } from "@/context/AccountContextProvider";
import { useUserContext } from "@/context/UserContextProvider";
import CheckedIcon from "../common/icons/CheckedIcon";
import { TransferenceType } from "@/types/transference.types";
import transactionsAPI from "@/services/transactions/transactions.service";
import transformMonth from "@/utils/functions/transformMonth";
import { formatAmount } from "@/utils/functions/formatAmount";
import { activityDictionary } from "@/utils/functions/dictionary";

const DetailActivity = () => {
	const { id } = useAccountContext();
	const { token, loading } = useUserContext();
	const [activity, setActivity] = useState<TransferenceType>();

	useEffect(() => {
		const path = window.location.pathname;
		const parts = path.split("/");
		const transaction_id = parseInt(parts[parts.length - 1], 10);
		const fetchActivity = async () => {
			const res = await transactionsAPI.getASpecificTransactionUser(
				token,
				id,
				transaction_id
			);
			setActivity(res);
		};
		fetchActivity();
	}, [token]);

	const year = new Date(activity?.dated ?? "").getFullYear();
	const month = transformMonth(new Date(activity?.dated ?? "").getMonth() + 1);
	const day = new Date(activity?.dated ?? "").getDate();
	const hours = new Date(activity?.dated ?? "").getHours();
	const minutes = new Date(activity?.dated ?? "").getMinutes();
	const amount = formatAmount(`${activity?.amount}`.replace(/-/g, ""));
	const random = Math.floor(Math.random() * 1e11);

	return (
		<Container className={"bg-total-black w-11/12 md:w-10/12 md:mt-6"}>
			<div className="flex items-center w-full justify-between">
				<div className="flex items-center ml-2">
					<CheckedIcon width="30px" />
					<h1 className="text-total-primary ml-3">Aprobada</h1>
				</div>
				{loading ? (
					<p></p>
				) : (
					<p className="text-total-white text-xs my-3 hidden md:block">
						Creada el {day} de {month} {year} a las {hours}:{minutes} hs.
					</p>
				)}
			</div>

			<hr className="text-total-white mb-3" />
			{!loading ? (
				<>
					<p className="text-total-white text-xs my-3 md:hidden">
						Creada el {day} de {month} {year} a las {hours}:{minutes} hs.
					</p>
					<h3 className="text-total-white mb-2">
						{
							activityDictionary[
								activity?.type as keyof typeof activityDictionary
							]
						}
					</h3>
					<p className="text-total-primary font-bold text-xl mb-4">{amount}</p>
					<p className="text-total-primary font-bold text-xl">
						{activity?.description}
					</p>
					<p className="text-total-white text-xs mt-3 mb-2">
						Número de operación
					</p>
					<p className="text-total-primary text-md">{random}</p>
				</>
			) : (
				<>
					<p className="text-total-white text-xs my-3">Cargando...</p>
				</>
			)}
		</Container>
	);
};

export default DetailActivity;
