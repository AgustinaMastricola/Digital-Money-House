'use client'
import ButtonSubmit from "./buttonSubmit"
import { FormProvider, useForm } from "react-hook-form";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";

type FormData = {
    "dni": number,
    "email": string,
    "firstname": string,
    "lastname": string,
    "password": string,
    "phone": string
}

const FormularioSignup = () => {
    const methods = useForm<FormData>();
    const {handleSubmit} =  methods;

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.postUser(data)
        return response
    }
    return (
        <div className="w-3/12 ">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid">
                        <InputText 
                            type='text'
                            placeholder='Nombre'
                            fieldName='firstname'/>                        
                        <InputText 
                            type='text'
                            placeholder='Apellido'
                            fieldName='lastname'/>
                        <InputText 
                            type='text'
                            placeholder='DNI'
                            fieldName='dni'/>
                        <InputText 
                            type='email'
                            placeholder='Correo electrónico'
                            fieldName='email'/>    
                    </div>
                    <div>
                        <InputText 
                            type='password'
                            placeholder='Contraseña'
                            fieldName='password'/>
                        <InputText 
                            type='text'
                            placeholder='Teléfono'
                            fieldName='phone'/>
                        <ButtonSubmit text={"Crear cuenta"} onSubmit={onSubmit}/>
                    </div>
                </form>
            </FormProvider>
            </div>
    )
}

export default FormularioSignup
