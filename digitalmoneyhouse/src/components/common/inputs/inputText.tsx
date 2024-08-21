import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type InputTextProps = {
    type:'text' | 'password' | 'email' | 'number';
    fieldName: string;
    placeholder?: string;
    className?:string
}
const InputText = ({type, fieldName, placeholder, className}:InputTextProps) => {
    const {register} = useFormContext()
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            {...register(fieldName)} 
            className={clsx("bg-total-white border border-medium-gray rounded-lg outline-none", className)}
            autoFocus={true}
        />
    )
}

export default InputText;