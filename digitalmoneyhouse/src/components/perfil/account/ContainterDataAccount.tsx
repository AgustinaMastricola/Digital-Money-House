import { useSession } from "next-auth/react";
import DataRow from "./DataRow";
import { useEffect, useState } from "react";
import accountAPI from "@/services/account/account.service";
import { AccountData } from "@/types/account.types";

type ContainerProps = {
  account: AccountData 
}
const ContainterDataAccount = ({account} : ContainerProps) => {
	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-2 space-y-8 py-5 md:py-10 px-5 mb-4">
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div>
        <DataRow accountData={account.cvu} title={'CVU'}/>
        <DataRow accountData={account.alias} title={'ALIAS'}/>
      </div>
		</div>
	);
};

export default ContainterDataAccount;
