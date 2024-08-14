import { UserType } from "@/types/users.types"
import iconEdit from '../../../public/IconoEditar.png'
import Image from "next/image"
import DataRow from "./DataRow"
import FormularioEditUser from "./FormularioEditUser"
import { useState } from "react"

type DataProps = {
  user: UserType
}
const UserInfo = ({ user }: DataProps) => {
	const [closeForm , setCloseForm] = useState(true)
	return (
		<div className="w-11/12 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
			<h1 className={`text-lg my-2 ${closeForm? 'block':'hidden'}`}>Tus datos</h1>
			<div className={`w-full ${closeForm? 'block':'hidden'}`}>
				<ul className="w-full flex flex-col space-y-3">
					<div className="flex items-center justify-between">
						<DataRow data={user.email} title={"Email"} />
						<button className="col-start-4" onClick={()=>setCloseForm(false)}>
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</div>
					
					<hr className="text-medium-gray opacity-30" />
					
					<div className="flex items-center justify-between">
						<DataRow data={`${user.firstname} ${user.lastname}`} title={"Nombre y apellido"} />
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</div>
					
					<hr className="text-medium-gray opacity-30" />

					<div className="flex items-center justify-between">
						<DataRow data={user.dni} title={"DNI"} />
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</div>
					
					<hr className="text-medium-gray opacity-30" />

					<div className="flex items-center justify-between">
						<DataRow data={user.phone} title={"Teléfono"} />
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</div>
					
					<hr className="text-medium-gray opacity-30" />

					<div className="flex items-center justify-between">
						<DataRow data={'*******'} title={"Contraseña"} />
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</div>
					
					<hr className="text-medium-gray opacity-30" />
				</ul>
			</div>
			<FormularioEditUser userData={user} isOpen={closeForm} />
			<button
				onClick={() => setCloseForm(true)}
				className={`p-2 mb-4 w-4/12 font-bold rounded-lg  border border-total-primary text-total-black ${
					closeForm ? "hidden" : "block"
				}`}
			>
				CANCELAR
			</button>
		</div>
	);
};

export default UserInfo