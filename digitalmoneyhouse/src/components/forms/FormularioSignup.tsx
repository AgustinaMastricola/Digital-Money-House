'use client'
import ButtonSubmit from "../buttons/buttonSubmit";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../inputs/inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import SuccessMesage from "../register/SuccessMesage";
import InputNumber from "../inputs/inputNumber";

type FormData = {
    "dni": number,
    "email": string,
    "firstname": string,
    "lastname": string,
    "password": string,
    "passwordConfirmed": string,
    "phone"?: string
}

const schema = yup.object({
    dni: yup.number().required('Completá los campos requeridos.'),
    email: yup.string().email('El formato del email es inválido. Ejemplo: email@gmail.com').required('Completá los campos requeridos.'),
    firstname: yup.string().required('Completá los campos requeridos.'),
    lastname: yup.string().required('Completá los campos requeridos.'),
    password: yup.string().required('Completá los campos requeridos.').min(6,'La contraseña debe tener 6 caracteres como mínimo.').max(20),
    passwordConfirmed: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden.').required('Completá los campos requeridos.'),
    phone: yup.string().optional()
}).required()

const FormularioSignup = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, reset, formState:{errors}} =  methods;
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const onSubmit = async (data: FormData) => {
        const { passwordConfirmed, ...userData } = data;
        reset()
        setShowSuccessMessage(true)
    }
    return (
        <>
            {showSuccessMessage ? <SuccessMesage style="visible"/> : <SuccessMesage style="hidden"/>}
            <h1 className={`${!showSuccessMessage ? 'text-total-white mt-4 md:mt-10 md:mb-4 visible': 'hidden'}`}>Crear Cuenta</h1>
            <div className={`${!showSuccessMessage ? 'w-full flex flex-col items-center visible': 'hidden'}`}>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center mb-4">
                        <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 md:grid md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <InputText 
                                type='text'
                                placeholder='Nombre*'
                                fieldName='firstname'/>
                            <InputText 
                                type='text'
                                placeholder='Apellido*'
                                fieldName='lastname'/>
                            <InputNumber 
                                type='number'
                                placeholder='DNI*'
                                fieldName='dni'/> 
                            <InputText
                                type='email'
                                placeholder='Correo electrónico*'
                                fieldName='email'/>  
                        </div>
                        <h5 className="text-light-primary text-sm w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">Usa entre 6 y 20 carácteres (debe contener al menos 1 caracter especial, 1 letra mayúscula y un número).</h5>
                        <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 md:grid md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <InputText 
                                type='password'
                                placeholder='Contraseña*'
                                fieldName='password'/>
                            <InputText 
                                type='password'
                                placeholder='Confirmar contraseña*'
                                fieldName='passwordConfirmed'/>    
                            <InputNumber 
                                type='number'
                                placeholder='Teléfono (opcional)'
                                fieldName='phone'/>
                            <ButtonSubmit text={"Crear cuenta"} onSubmit={onSubmit}/>                            
                            {errors.password &&
                                <div className="text-error-text italic">{errors.password.message}</div>} 
                            {errors.firstname &&
                                <div className="text-error-text italic">{errors.firstname.message}</div>}                                  
                            {errors.lastname &&
                                <div className="text-error-text italic">{errors.lastname.message}</div>}
                            {errors.dni &&
                                <div className="text-error-text italic">{errors.dni.message}</div>}                                                                    
                            {errors.passwordConfirmed &&
                                <div className="text-error-text italic">{errors.passwordConfirmed.message}</div>} 
                            {errors.email &&
                                <div className="text-error-text italic">{errors.email.message}</div>}                                                                                   
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}

export default FormularioSignup
