'use client'
import ButtonSubmit from "./buttonSubmit";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";
import { useState } from "react";

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
        const dniNumber = Number(data.dni);

        if (isNaN(dniNumber)) {
            console.error('El valor de DNI no es un número válido.');
            return;
        }
        const formData: FormData = {
            ...data,
            dni: dniNumber,
        };

        console.log(JSON.stringify(formData))
        const response = await userApi.login(formData)
        console.log(JSON.stringify(response))
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
                            type='number'
                            placeholder='DNI'
                            fieldName='dni'
                        /> 
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
