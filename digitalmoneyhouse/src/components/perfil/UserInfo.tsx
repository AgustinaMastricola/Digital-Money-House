import { UserType } from "@/types/users.types"
import iconEdit from '../../../public/IconoEditar.png'
import Image from "next/image"
import DataRow from "./DataRow"

type DataProps = {
  user: UserType
}
const UserInfo = ({ user }: DataProps) => {
	return (
		<div className="w-11/12 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
			<h1 className="text-lg my-2">Tus datos</h1>
			<div className="w-full">
				<ul className="w-full flex flex-col space-y-3">
          <DataRow data={user.email} title={"Email"}/>
					<hr className="text-medium-gray opacity-30" />
          <DataRow data={`${user.firstname} ${user.lastname}`} title={"Nombre y apellid"}/>
					<hr className="text-medium-gray opacity-30" />
          <DataRow data={user.dni} title={"DNI"}/>
					<hr className="text-medium-gray opacity-30" />
          <DataRow data={user.phone} title={"Teléfono"}/>
					<hr className="text-medium-gray opacity-30" />
          <DataRow data={'*******'} title={"Constraseña"}/>
					<hr className="text-medium-gray opacity-30" />
				</ul>
			</div>
		</div>
	);
};

export default UserInfo