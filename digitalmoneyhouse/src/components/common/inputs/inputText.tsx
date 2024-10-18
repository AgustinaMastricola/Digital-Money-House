import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type InputTextProps = {
    type:'text' | 'password' | 'email' | 'number';
    fieldName?: string;
    placeholder?: string;
    className?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?:(e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
}
const InputText = ({type, fieldName, placeholder, className, onChange, onFocus, value}:InputTextProps) => {
    const {register} = useFormContext()
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            {...(fieldName ? register(fieldName) : {})} 
            className={clsx("bg-total-white border border-medium-gray rounded-lg outline-none", className)}
            autoFocus={true}
            onChange={onChange}
            onFocus={onFocus}
            value={value}
        />
    )
}

export default InputText;