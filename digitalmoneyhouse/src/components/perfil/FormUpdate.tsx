import { useState } from "react";
import iconEdit from "../../../public/IconoEditar.png";
import Image from "next/image";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { UpdateUserData } from "@/types/formData.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "@/lib/yup";
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import InputText from "@/components/common/inputs/inputText";
import Button from "@/components/common/buttons/Button";

type FormUpdateProp = {
  userInfo: string[],
  atribut: string[],
}
const FormUpdate = ({userInfo, atribut}:FormUpdateProp) => {
  const [showInput, setShowInput] = useState(false);
  const { data: session, status } = useSession();

  const methods = useForm<UpdateUserData>({
		resolver: yupResolver(updateUserSchema),
	});

  const { handleSubmit, reset, formState: { errors }} = methods;

	const onSubmit = async (data: UpdateUserData) => {
		if (session?.user?.token) {
			const getAccount = await accountAPI.getMyAccount(`${session.user.token}`);
			const res = await userApi.updateUserData(
				session?.user.token,
				getAccount.user_id,
				data
			);
			reset();
			setShowInput(false)
		}
	};

  return (
    <div>
      <div 
        className={clsx({
          "flex justify-between w-full":!showInput,
          "hidden":showInput
        })}>
        <p className="text-total-gray ">{userInfo}</p>
        <button onClick={()=>setShowInput(true)}
					className={clsx({
						'hidden':atribut[0] === 'email' || atribut[0] === 'dni'
					})}
					>
          <Image src={iconEdit} alt={"Botón editar"} />
        </button>
      </div>

      <div 
        className={clsx({
          "block": showInput,
          "hidden": !showInput
        })}>
          
        <FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-2 lg:space-y-0 lg:space-x-2 lg:grid lg:grid-cols-6 items-center">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 w-full lg:col-span-4 lg:gap-x-4">
							<InputText
								type={
									atribut[0] === 'password' ? "password" :
									atribut[0] === 'dni' ? 'number' :
									'text'
								}
								fieldName={`${atribut[0]}`}
								placeholder={`${userInfo[0]}`}
								className="p-1 w-10/12 lg:w-11/12 hide-arrow"
							/>
							<InputText
								type="text"
								fieldName={`${atribut[1]}`}
								placeholder={`${userInfo[1]}`}
								className={clsx({
									"hidden": atribut.length === 1,
									"p-1 w-10/12": atribut.length === 2
								})}
							/>
						</div>
						<div className="flex items-center space-x-2 lg:space-y-0 lg:col-span-2">
							<Button
								children={"Modificar"}
								className="p-2 text-xs lg:text-sm bg-total-primary border-total-primary"
								onClick={() => handleSubmit(onSubmit)}
							/>
							<Button
								children={"Cancelar"}
								className="p-2 text-xs lg:text-sm text-total-black"
								onClick={() => setShowInput(false)}
							/>
						</div>
					</form>
				</FormProvider>
      </div>
    </div>
  )
}

export default FormUpdate