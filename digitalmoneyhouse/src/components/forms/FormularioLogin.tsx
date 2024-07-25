'use client'
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "../buttons/buttonSubmit";
import InputText from "../inputs/inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";
import authApi from "@/services/authorization/auth.service";
import { useState } from "react";
import ButtonPrimary from "../buttons/buttonPrimary";

type FormData = {
    "email": string,
    "password": string,
}

const schema = yup.object({
    email: yup.string().required('Completá los campos requeridos.'),
    password: yup.string().required('Completá campos requeridos.').min(6, 'La contraseña debe tener 6 caracteres como mínimo.'),
}).required()

const FormularioLogin = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, reset, watch, setError, formState:{errors}} =  methods;

    const [step, setStep] = useState<number>(1);
    const handleEmailSubmit =  () => {
        const isValidEmail = watch('email') 
        if (isValidEmail) {
            setStep(2)
            console.log(schema.fields.email)
        }
        setError('email', {type: 'required'})
    }
    const router = useRouter();
    const onSubmit = async (data: FormData) => {
        await authApi.login(data)
        reset()
        setTimeout(()=>{
            router.push('/')
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
                                type='email'
                                placeholder={'Correo electrónico'}
                                fieldName={"email"}
                            />
                            <button 
                                onClick={handleEmailSubmit} 
                                className="w-full text-center text-lg font-bold py-3 mb-4 mt-4 rounded-lg bg-total-primary border border-total-primary text-total-black"
                                >
                                <ButtonPrimary text={"Continuar"}/>
                            </button>
                            <div className="text-error-text text-center">{errors.email?.message}</div>  
                        </div>
                        <div className={step === 2? 'visible':'hidden'}>
                            <h1 className='text-total-white mb-4 text-center'>Ingresá tu contraseña</h1>
                            <InputText 
                                type='password'
                                placeholder={'Contraseña'} 
                                fieldName={"password"}/>
                            <ButtonSubmit text={"Ingresar"} onSubmit={onSubmit}/>
                            <div className="text-error-text italic text-center">{errors.password?.message}</div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}

export default FormularioLogin;