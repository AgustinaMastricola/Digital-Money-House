import DataRow from "./DataRow";
import { AccountData } from "@/types/account.types";
import Container from "@/components/common/containers/Container";
import clsx from "clsx";

type ContainerDataProps = {
  account: AccountData;
	className? : string; 
}
const ContainterDataAccount = ({account, className} : ContainerDataProps) => {
	return (
		<Container className={clsx('bg-total-black w-11/12 md:w-10/12 pl-6 md:pl-9' , className)}>
			<p className="text-total-white text-sm md:text-base md:font-semibold mt-[18px] mb-[6px] md:my-10">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div className="md:space-y-9 md:mb-8 ">
        <DataRow accountData={account.cvu} title={'CVU'}/>
				<hr className="text-total-white md:hidden my-0.5 md:my-0" />
        <DataRow accountData={account.alias} title={'ALIAS'}/>
      </div>
		</Container>
	);
};

export default ContainterDataAccount;
