import { memo } from "react";
import DataRow from "./DataRow";
import { useAccountContext } from "@/context/AccountContextProvider";

const ContainterDataAccount = () => {
	const {cvu, alias} = useAccountContext()

	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-2 space-y-8 py-5 md:py-10 px-5 mb-4">
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div>
        <DataRow accountData={cvu} title={'CVU'}/>
        <DataRow accountData={alias} title={'ALIAS'}/>
      </div>
		</div>
	);
};

export default memo(ContainterDataAccount);
