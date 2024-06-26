'use client'
import { useForm } from "react-hook-form";
import ButtonSubmit from "./buttonSubmit";
import userApi from "@/services/users/users.service";

type FormData = {
    "email": string,
    "password": string,
}

const FormurlarioLogin = () => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.getUser(285)
        return response
    }

    return (
        <div className="w-3/12 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <input 
                        type="text" 
                        placeholder="Correo electrónico" 
                        {...register('email')}
                        className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary" 
                    />
                </div>
                <div className="">
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        {...register('password')}
                        className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary" 
                    />
                </div>
                <ButtonSubmit text={"Ingresar"}/>
            </form>
        </div>
    )
}

export default FormurlarioLogin;