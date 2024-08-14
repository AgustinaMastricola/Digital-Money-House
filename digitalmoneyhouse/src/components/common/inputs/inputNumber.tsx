import { useFormContext } from "react-hook-form";
type InputNumberProps = {
    type:'text' | 'password' | 'email' | 'number';
    fieldName: string;
    placeholder?: string;
}
const InputNumber = ({type, fieldName, placeholder }:InputNumberProps) => {
    const {register} = useFormContext()
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            {...register(fieldName)} 
            className="hide-arrow p-3 my-3 md:my-4 w-full rounded-lg bg-total-white border border-light-primary" 
        />
    )
}

export default InputNumber;