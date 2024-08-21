'use client'
import ButtonSubmit from "../common/buttons/buttonSubmitForm";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import SuccessMesage from "../signup/SuccessMesage";
import { signupSchema } from "@/lib/yup";
import { SignupFormData } from "@/types/formData.types";
import userApi from "@/services/users/user.service";

const FormularioSignup = () => {
    const methods = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema)
    });
    const {handleSubmit, reset, formState:{errors}} =  methods;
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    
    const onSubmit = async (data: SignupFormData) => {
        const { passwordConfirmed, ...userData } = data;
        await userApi.newUser(userData)
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
                                className="p-3 my-3 md:my-4 w-full"
                                type='text'
                                placeholder='Nombre*'
                                fieldName='firstname'/>
                            <InputText 
                                className="p-3 my-3 md:my-4 w-full"
                                type='text'
                                placeholder='Apellido*'
                                fieldName='lastname'/>
                            <InputText
                                className="hide-arrow p-3 my-3 md:my-4 w-full"
                                type='number'
                                placeholder='DNI*'
                                fieldName='dni'/> 
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='email'
                                placeholder='Correo electrónico*'
                                fieldName='email'/>  
                        </div>
                        <h5 className="text-light-primary text-sm w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">Usa entre 6 y 20 carácteres (debe contener al menos 1 caracter especial, 1 letra mayúscula y un número).</h5>
                        <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 md:grid md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <InputText 
                                className="p-3 my-3 md:my-4 w-full"
                                type='password'
                                placeholder='Contraseña*'
                                fieldName='password'/>
                            <InputText
                                className="p-3 my-3 md:my-4 w-full" 
                                type='password'
                                placeholder='Confirmar contraseña*'
                                fieldName='passwordConfirmed'/>    
                            <InputText
                                className="hide-arrow p-3 my-3 md:my-4 w-full"
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
