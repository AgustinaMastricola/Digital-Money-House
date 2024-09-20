import DataRow from "./DataRow";
import { AccountData } from "@/types/account.types";
import Container from "@/components/common/containers/Container";

type ContainerDataProps = {
  account: AccountData 
}
const ContainterDataAccount = ({account} : ContainerDataProps) => {
	return (
		<Container className={'bg-total-black'}>
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
      <div>
        <DataRow accountData={account.cvu} title={'CVU'}/>
        <DataRow accountData={account.alias} title={'ALIAS'}/>
      </div>
		</Container>
	);
};

export default ContainterDataAccount;
