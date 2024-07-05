'use client'
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "./buttonSubmit";
import InputText from "./inputText";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";
import authApi from "@/services/authorization/auth.service";

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
    const {handleSubmit, reset, formState:{errors}} =  methods;

    const router = useRouter();
    const onSubmit = async (data: FormData) => {
        await authApi.login(data)
        reset()
        router.push('/')
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
                        {errors.email?.type === "required" && 
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