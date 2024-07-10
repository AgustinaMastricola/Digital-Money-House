'use client'
import ButtonSubmit from "./buttonSubmit";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";
import { UserData } from "@/types/users.types";

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
    dni: yup.number().positive().integer().required(),
    email: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required().min(6).max(20),
    passwordConfirmed: yup.string().oneOf([yup.ref('password')]).required(),
    phone: yup.string().optional()
}).required()

const FormularioSignup = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, reset, formState:{errors}} =  methods;
    
    const router = useRouter();
    const onSubmit = async (data: FormData) => {
        const { passwordConfirmed, ...userData } = data;
        await userApi.createNewUser(userData)
        reset()
        router.push('/login')
    }
    return (
        <div className="w-full flex flex-col items-center">
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
                        <InputText 
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
                        <InputText 
                            type='text'
                            placeholder='Teléfono (opcional)'
                            fieldName='phone'/>
                        <ButtonSubmit text={"Crear cuenta"} onSubmit={onSubmit}/>                            
                        {errors.password?.type === "required" || errors.email?.type === 'required' &&
                            <div className="text-error-text italic text-center">Completar campos requeridos</div>} 
                        {errors.password?.type === "min" &&
                            <div className="text-error-text italic">La contraseña debe tener 6 caracteres como mínimo</div>} 
                        {errors.passwordConfirmed &&
                            <div className="text-error-text italic">Las contraseñas deben coincidir</div>}                                                   
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default FormularioSignup
