'use client'
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LoginFormData } from "@/types/formData.types";
import { loginSchema } from "@/lib/yup";
import Button from "../common/buttons/Button";

const FormularioLogin = () => {
    const methods = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema)
    });
    const {handleSubmit, reset, watch, setError, formState:{errors}} =  methods;
    const [step, setStep] = useState<number>(1);

    const handleEmailSubmit =  () => {
        const isValidEmail = watch('email') 
        if (isValidEmail) {
            setStep(2)
        }
        setError('email', {type: 'required'})
    }

    const router = useRouter();
    const onSubmit = async (dataForm: LoginFormData) => {
        const responseNextAuth = await signIn('credentials', {...dataForm, redirect:false})
        if (responseNextAuth?.error) {
            alert('credenciales invalidas')
            reset()
            setStep(1)
            return
        }
        setTimeout(()=>{
            router.push('/dashboard')
        }, 1000)
    }

    return (
        <>
            <div className='w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 flex justify-center'>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 flex flex-col">
                        <div className={step === 1? '':'hidden'}>
                            <h1 className='text-total-white mb-4 text-center'>¡Hola! Ingresá tu e-mail</h1>
                            <InputText 
                                className="w-full p-3"
                                type='email'
                                placeholder={'Correo electrónico'}
                                fieldName={"email"}
                            />
                            <Button title={'Continuar'} onClick={handleEmailSubmit} type="button" className="p-3 w-full my-4 bg-total-primary border-total-primary"/>
                            <Button title={'Crear cuenta'} onClick={handleEmailSubmit} asLink={true} href={'/signup'} type="button" className="p-3 w-full bg-light-gray border-light-gray block"/>               
                            <div className="text-error-text text-center">{errors.email?.message}</div>  
                        </div>
                        <div className={step === 2? 'visible':'hidden'}>
                            <h1 className='text-total-white mb-4 text-center'>Ingresá tu contraseña</h1>
                            <InputText 
                                className="w-full p-3"
                                type='password'
                                placeholder={'Contraseña'} 
                                fieldName={"password"}/>
                            <Button title={"Ingresar"} type="submit" className="p-3 w-full my-4 bg-total-primary border-total-primary"/>
                            <div className="text-error-text italic text-center">{errors.password?.message}</div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}

export default FormularioLogin;