import { UserType } from '@/types/users.types'
import React, { useState } from 'react'

type FormProps = {
  userData: UserType,
  isOpen: boolean
}
const FormularioEditUser = ({userData, isOpen}: FormProps) => {

  return (
		<form className={`w-full ${isOpen ? "hidden" : "block"}`}>
			<h1 className="text-lg my-2">Tus datos</h1>
			<div className="w-full">
				<div className="w-full flex flex-col space-y-1">
					<label htmlFor="email">Email</label>
					<input
						name="email"
						className="p-2 focus:outline-none"
						placeholder={userData.email}
					/>
					<hr className="text-medium-gray opacity-30" />
					<label htmlFor="names">Nombre y apellido</label>
					<input
						name="names"
						className="p-2 focus:outline-none "
						placeholder={`${userData.firstname} ${userData.lastname}`}
					/>
					<hr className="text-medium-gray opacity-30" />
					<label htmlFor="dni">DNI</label>
					<input
						name="dni"
						className="p-2 focus:outline-none"
						placeholder={`${userData.dni}`}
					/>
					<hr className="text-medium-gray opacity-30" />
					<label htmlFor="phoneTel">Teléfono</label>
					<input
						name="phoneTel"
						className="p-2 focus:outline-none"
						placeholder={userData.phone}
					/>
					<hr className="text-medium-gray opacity-30" />
					<label htmlFor="pass">Constraseña</label>
					<input
						name="pass"
						className="p-2 focus:outline-none"
						placeholder="*******"
					/>
					<hr className="text-medium-gray opacity-30" />
				</div>
			</div>
			<div className="flex items-center space-x-2">
				<button
					type="submit"
					className="p-2 mb-2 mt-4 w-4/12 font-bold rounded-lg bg-total-primary border border-total-primary text-total-black"
				>
					CONFIRMAR
				</button>
			</div>
		</form>
	);
}

export default FormularioEditUser