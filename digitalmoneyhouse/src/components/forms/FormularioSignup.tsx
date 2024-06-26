'use client'
import { UserType } from "@/types/users.types"
import ButtonSubmit from "./buttonSubmit"
import { useForm } from "react-hook-form";
import userApi from "@/services/users/users.service";

type FormData = {
    "dni": number,
    "email": string,
    "firstname": string,
    "lastname": string,
    "password": string,
    "phone": string
}

const FormularioSignup = () => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.postUser(data)
        return response
    }
    return (
        <div className="w-3/12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid">
                        <div>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Nombre'
                                {...register('firstname')}
                            />
                        </div>
                        <div>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Apellido'
                                {...register('lastname')}
                            />
                        </div>
                        <div>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='DNI'
                                {...register('dni')}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Correo electrónico'
                                {...register('email')}
                            />
                        </div>
                        
                        <div>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='password'
                                placeholder='Contraseña'
                                {...register('password')}
                            />
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Teléfono'
                                {...register('phone')}
                            />
                        </div>
                        <ButtonSubmit text={"Crear Cuenta"}/>
                    </div>
                </form>
            </div>
    )
}

export default FormularioSignup
