'use client'
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "./buttonSubmit";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";

type FormData = {
    "email": string,
    "password": string,
}

const FormularioLogin = () => {
    const methods = useForm<FormData>();
    const {handleSubmit} =  methods;

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.getUser(285)
        return response
    }

    return (
        <div className="w-3/12 ">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <InputText 
                            type='email'
                            placeholder={'Correo electrónico'}
                            fieldName={"email"} />
                    </div>
                    <div>
                        <InputText 
                            type='password'
                            placeholder={'Contraseña'} 
                            fieldName={"password"}/>
                    </div>
                    <ButtonSubmit text={"Ingresar"} onSubmit={onSubmit}/>
                </form>
            </FormProvider>
        </div>
    )
}

export default FormularioLogin;