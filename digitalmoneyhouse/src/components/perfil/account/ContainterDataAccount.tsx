import React, { useEffect, useState } from "react";
import DataRow from "./DataRow";
import { useSession } from "next-auth/react";
import { AccountData } from "@/types/account.types";
import accountAPI from "@/services/account/account.service";

const ContainterDataAccount = () => {
	const { data: session, status, update } = useSession();
	const [accountData, setAccountData] = useState<AccountData>({
		alias: "",
		available_amount: 0,
		cvu: "",
		id: 0,
		user_id: 0,
	});
	
	const getAccountUser = async () => {
		if (session?.user?.token) {
			const getAccount = await accountAPI.getMyAccount(`${session.user.token}`);
			setAccountData(getAccount);
		}
	};
	
	useEffect(() => {
		getAccountUser();
	}, [session?.user?.token]);

	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-2 space-y-8 py-5 md:py-10 px-5">
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div>
        <DataRow accountData={accountData.cvu} title={'CVU'}/>
        <DataRow accountData={accountData.alias} title={'ALIAS'}/>
      </div>
		</div>
	);
};

export default ContainterDataAccount;
