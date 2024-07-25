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
            className="p-3 my-3 md:my-4 w-full rounded-lg bg-total-white border border-light-primary" 
            autoFocus={true}
        />
    )
}

export default InputText;