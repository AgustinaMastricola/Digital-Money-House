'use client'
import ButtonSubmit from "./buttonSubmit";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
    "dni": number,
    "email": string,
    "firstname": string,
    "lastname": string,
    "password": string,
    "phone"?: string
}

const schema = yup.object({
    dni: yup.number().positive().integer().required(),
    email: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required().min(8),
    phone: yup.string().optional()
}).required()

const FormularioSignup = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, reset, formState:{errors}} =  methods;

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.createNewUser(data)
        console.log(JSON.stringify(response))
        reset()
        return response
    }
    return (
        <div className="w-3/12 ">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid">
                        <InputText 
                            type='text'
                            placeholder='Nombre*'
                            fieldName='firstname'/>
                        {errors?.firstname && 
                            <div className="text-error-text">Campo obligatorio</div>}                            
                        <InputText 
                            type='text'
                            placeholder='Apellido*'
                            fieldName='lastname'/>
                        {errors?.lastname && 
                            <div className="text-error-text">Campo obligatorio</div>}                              
                        <InputText 
                            type='number'
                            placeholder='DNI*'
                            fieldName='dni'
                        /> 
                        {errors?.dni && 
                            <div className="text-error-text">Campo obligatorio</div>}                          
                        <InputText
                            type='email'
                            placeholder='Correo electrónico*'
                            fieldName='email'/>  
                        {errors?.email && 
                            <div className="text-error-text">Campo obligatorio</div>}                                
                    </div>
                    <div>
                        <InputText 
                            type='password'
                            placeholder='Contraseña*'
                            fieldName='password'/>
                        {errors.password?.type === "required" &&
                            <div className="text-error-text">Campo obligatorio</div>} 
                        {errors.password?.type === "min" &&
                            <div className="text-error-text">La contraseña debe tener 8 caracteres como mínimo</div>}                                                          
                        <InputText 
                            type='text'
                            placeholder='Teléfono (opcional)'
                            fieldName='phone'/>
                        <ButtonSubmit text={"Crear cuenta"} onSubmit={onSubmit}/>
                    </div>
                </form>
            </FormProvider>
            </div>
    )
}

export default FormularioSignup
