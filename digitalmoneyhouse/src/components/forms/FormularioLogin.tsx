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
    password: yup.string().required().min(6),
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
        <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 flex justify-center">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 flex flex-col">
                    <div>
                        <InputText 
                            type='email'
                            placeholder={'Correo electrónico'}
                            fieldName={"email"} />
                    </div>
                    <div>
                        <InputText 
                            type='password'
                            placeholder={'Contraseña'} 
                            fieldName={"password"}/>
                    </div>
                    <ButtonSubmit text={"Ingresar"} onSubmit={onSubmit}/>
                    {errors.email?.type === "required" && 
                        <div className="text-error-text">Campo obligatorio</div>}                            
                    {errors.password?.type === "required" &&
                        <div className="text-error-text italic text-center">Completar campos requeridos</div>} 
                    {errors.password?.type === "min" &&
                        <div className="text-error-text italic">La contraseña debe tener 6 caracteres como mínimo</div>} 
                </form>
            </FormProvider>
        </div>
    )
}

export default FormularioLogin;