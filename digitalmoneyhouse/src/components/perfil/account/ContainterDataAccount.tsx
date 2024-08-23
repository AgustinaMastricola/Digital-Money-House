import React, { useEffect, useState } from "react";
import DataRow from "./DataRow";
import { useSession } from "next-auth/react";
import accountAPI from "@/services/account/account.service";

const ContainterDataAccount = async () => {
	const { data: session, status, update } = useSession();
	const token = session?.user.token;
  const getAccount = await accountAPI.getMyAccount(token)

	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-2 space-y-8 py-5 md:py-10 px-5">
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div>
        <DataRow accountData={getAccount.cvu} title={'CVU'}/>
        <DataRow accountData={getAccount.alias} title={'ALIAS'}/>
      </div>
		</div>
	);
};

export default ContainterDataAccount;
