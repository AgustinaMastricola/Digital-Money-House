import { UserType } from "@/types/users.types"
import iconEdit from '../../../public/IconoEditar.png'
import Image from "next/image"

type DataProps = {
  user: UserType
}
const UserInfo = ({ user }: DataProps) => {
	return (
		<div className="w-11/12 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
			<h1 className="text-lg my-2">Tus datos</h1>
			<div className="w-full">
				<ul className="w-full flex flex-col space-y-3">
					<li className="w-full grid grid-cols-3">
						<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:col-span-2">
							<span>Email </span>
							<p className="text-total-gray">{user.email}</p>
						</div>
						<button className="col-start-4 invisible">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</li>
					<hr className="text-medium-gray opacity-30" />

					<li className="w-full grid grid-cols-3">
						<div className="grid grid-rows-2 col-span-2 md:grid-cols-2 md:grid-rows-1">
							<span>Nombre y apellido </span>
							<p className="text-total-gray">
								{" "}
								{user.firstname} {user.lastname}{" "}
							</p>
						</div>
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</li>
					<hr className="text-medium-gray opacity-30" />

					<li className="w-full grid grid-cols-3">
						<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:col-span-2">
							<span>DNI </span>
							<p className="text-total-gray">{user.dni}</p>
						</div>
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</li>
					<hr className="text-medium-gray opacity-30" />

					<li className="w-full grid grid-cols-3">
						<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:col-span-2">
							<span>Teléfono </span>
							<p className="text-total-gray">{user.phone}</p>
						</div>
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</li>
					<hr className="text-medium-gray opacity-30" />

					<li className="w-full grid grid-cols-3">
						<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:col-span-2">
							<span>Contraseña </span>
							<p className="text-total-gray">*******</p>
						</div>
						<button className="col-start-4">
							<Image src={iconEdit} alt={"Botón editar"} />
						</button>
					</li>
					<hr className="text-medium-gray opacity-30" />
				</ul>
			</div>
		</div>
	);
};

export default UserInfo