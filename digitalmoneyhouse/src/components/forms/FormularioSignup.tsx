'use client'
import { UserType } from "@/types/users.types"
import ButtonSubmit from "../ui/buttons/buttonSubmit"
import { useForm } from "react-hook-form";

type FormData = {
    user: UserType;
}

const FormularioSignup = () => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data))
    }
    return (
        <div className="w-3/12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid">
                        <div>
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Nombre'
                                {...register('user.firstname')}
                            />
                        </div>
                        <div>
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Apellido'
                                {...register('user.lastname')}
                            />
                        </div>
                        <div>
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='DNI'
                                {...register('user.dni')}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Correo electrónico'
                                {...register('user.email')}
                            />
                        </div>
                        
                        <div>
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Contraseña'
                                {...register('user.password')}
                            />
                            <label></label>
                            <input 
                                className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary"
                                type='text'
                                placeholder='Teléfono'
                                {...register('user.phone')}
                            />
                        </div>
                        <ButtonSubmit text={"Crear Cuenta"}/>
                    </div>
                </form>
            </div>
    )
}

export default FormularioSignup
