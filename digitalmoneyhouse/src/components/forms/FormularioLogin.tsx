'use client'
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "./buttonSubmit";
import userApi from "@/services/users/users.service";
import InputText from "./inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
    "email": string,
    "password": string,
}

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(8),
}).required()

const FormularioLogin = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, formState:{errors}} =  methods;

    const onSubmit = async (data: FormData) => {
        console.log(JSON.stringify(data))
        const response = await userApi.login(data)
        console.log(JSON.stringify(response))
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
                        {errors?.email && 
                            <div className="text-error-text">Campo obligatorio</div>}                            
                    </div>
                    <div>
                        <InputText 
                            type='password'
                            placeholder={'Contraseña'} 
                            fieldName={"password"}/>
                        {errors.password?.type === "required" &&
                            <div className="text-error-text">Campo obligatorio</div>} 
                        {errors.password?.type === "min" &&
                            <div className="text-error-text">La contraseña debe tener 8 caracteres como mínimo</div>}                             
                    </div>
                    <ButtonSubmit text={"Ingresar"} onSubmit={onSubmit}/>
                </form>
            </FormProvider>
        </div>
    )
}

export default FormularioLogin;