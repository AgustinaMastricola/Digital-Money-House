import { useState } from "react";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { UpdateUserData } from "@/types/formData.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "@/lib/yup";
import userApi from "@/services/users/user.service";
import InputText from "@/components/common/inputs/inputText";
import Button from "@/components/common/buttons/Button";
import EditIcon from "@/components/common/icons/EditIcon";
import { useUserContext } from "@/context/UserContextProvider";
import { useAccountContext } from "@/context/AccountContextProvider";
import VerifiedIcon from "@/components/common/icons/VerifiedIcon";
import CancelIcon from "@/components/common/icons/CancelIcon";

type FormUpdateProp = {
  userInfo: string[],
  atribut: string[],
}
const FormUpdate = ({userInfo, atribut}:FormUpdateProp) => {
  const [showInput, setShowInput] = useState(false);
	const {token, loading} = useUserContext()
	const {user_id} = useAccountContext()

  const methods = useForm<UpdateUserData>({
		resolver: yupResolver(updateUserSchema),
	});

  const { handleSubmit, reset, formState: { errors }} = methods;

	const onSubmit = async (data: UpdateUserData) => {
		if (token) {
			try{
				await userApi.updateUserData(token, user_id, data)
				reset();
				setShowInput(false)
				window.location.reload()
			}
			catch(error){
				console.log("no se pudo modificar el usuario")
			}
		}
	};

  return (
    <div>
      <div 
        className={clsx({
          "flex justify-between items-center w-full":!showInput,
          "hidden":showInput
        })}>
        <p className="text-total-gray ">
					{loading? ' Cargando... ' : userInfo}
				</p>
        <button 
					className={clsx('col-span-1',{
						'hidden':atribut[0] === 'email' || atribut[0] === 'dni'
					})}
					onClick={()=>setShowInput(true)}
					>
          <EditIcon className="m-2"/>
        </button>
      </div>

      <div 
        className={clsx({
          "block": showInput,
          "hidden": !showInput
        })}>
          
        <FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="lg:space-y-0 lg:space-x-2 grid grid-cols-2 lg:grid-cols-6">
            <div className="flex flex-row w-full col-span-2">
							<InputText
								type={
									atribut[0] === 'password' ? "password" :
									atribut[0] === 'dni' ? 'number' :
									'text'
								}
								fieldName={`${atribut[0]}`}
								placeholder={`${userInfo[0]}`}
								className="w-10/12 lg:w-11/12 hide-arrow border-none col-start-1"
							/>
							<InputText
								type="text"
								fieldName={`${atribut[1]}`}
								placeholder={`${userInfo[1]}`}
								className={clsx("border-none col-start-2",{
									"hidden": atribut.length === 1,
									"w-10/12": atribut.length === 2
								})}
							/>
						</div>
						<div className="flex items-center justify-end col-start-3 lg:col-start-6">
							<Button
								title={""}
								className="p-2 border-none"
								onClick={() => handleSubmit(onSubmit)}
							>
								<VerifiedIcon className="w-5 h-5"/>
								</Button>
							<Button
								title={""}
								className="p-2 border-none"
								type="button"
								onClick={() => setShowInput(false)}
							>
								<CancelIcon className="w-5 h-5"/>
							</Button>
						</div>
					</form>
				</FormProvider>
      </div>
    </div>
  )
}

export default FormUpdate