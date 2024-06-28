import { useFormContext } from "react-hook-form";
type InputTextProps = {
    type:'text' | 'password' | 'email' | 'number';
    fieldName: string;
    placeholder?: string;
}
const InputText = ({type, fieldName, placeholder }:InputTextProps) => {
    const {register} = useFormContext()
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            {...register(fieldName)} 
            className="p-3 mb-4 w-full rounded bg-total-white border border-light-primary" 
        />
    )
}

export default InputText;