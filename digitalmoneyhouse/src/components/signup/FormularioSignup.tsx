'use client'
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import SuccessMesage from "../signup/SuccessMesage";
import { signupSchema } from "@/lib/yup";
import { SignupFormData } from "@/types/formData.types";
import Button from "../common/buttons/Button";
import userApi from "@/services/users/user.service";
import clsx from "clsx";

const FormularioSignup = () => {
    const methods = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });
    const { handleSubmit, reset, formState: { errors } } = methods;
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (data: SignupFormData) => {
        setLoading(true);
        const response = await userApi.newUser(data);
        if (!response) {
            console.log("Error al registrar el usuario");
        } else {
            setShowSuccessMessage(true);
            reset();
        }
    }

    return (
        <>
            {showSuccessMessage &&
                <SuccessMesage style="visible" textH2={"Registro exitoso"} textP={'Usted se registró correctamente. Haga click en el siguiente botón para ingresar a su cuenta.'} buttonText={"Iniciar sesión"} buttonHREF={'/login'} styleH2={"text-total-white"} styleP={"text-total-white md:w-6/12"} />
            }
            <h1 className={`${!showSuccessMessage ? 'text-total-white text-base md:text-lg mt-4 md:mt-10 md:mb-4 visible' : 'hidden'}`}>Crear Cuenta</h1>
            <div className={`${!showSuccessMessage ? 'w-full flex flex-col items-center visible' : 'hidden'}`}>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center mb-4">
                        <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 md:grid md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='text'
                                placeholder='Nombre*'
                                fieldName='firstname' />
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='text'
                                placeholder='Apellido*'
                                fieldName='lastname' />
                            <InputText
                                className="hide-arrow p-3 my-3 md:my-4 w-full"
                                type='number'
                                placeholder='DNI*'
                                fieldName='dni' />
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='email'
                                placeholder='Correo electrónico*'
                                fieldName='email' />
                        </div>
                        <h5 className="text-light-primary text-xs w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">Usa entre 6 y 20 caracteres (debe contener al menos 1 carácter especial, 1 letra mayúscula y un número).</h5>
                        <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 md:grid md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='password'
                                placeholder='Contraseña*'
                                fieldName='password' />
                            <InputText
                                className="p-3 my-3 md:my-4 w-full"
                                type='password'
                                placeholder='Confirmar contraseña*'
                                fieldName='passwordConfirmed' />
                            <InputText
                                className="hide-arrow p-3 my-3 md:my-4 w-full"
                                type='number'
                                placeholder='Teléfono (opcional)'
                                fieldName='phone' />
                            <Button 
                                title={"Crear cuenta"} 
                                type="submit" 
                                className={clsx("p-3 w-full my-4 bg-total-primary border-total-primary", {
									'animate-pulse': loading,
									'animate-none': !loading
                                })}
                            />
                            {Object.values(errors).length > 0 && (
                                <div className="text-error-text">
                                    {Object.values(errors).map((error, index) => (
                                        <div key={index} className="italic mt-2">{error.message}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}

export default FormularioSignup;
