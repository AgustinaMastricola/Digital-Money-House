import { FieldValues, useFormContext } from "react-hook-form";

type ButtonProps<T>= {
    text: string;
    onSubmit: (data: T)=> void;
}
const ButtonSubmit = <T extends FieldValues,> ({text, onSubmit}:ButtonProps<T>) => {
    const {handleSubmit} = useFormContext<T>()
    return (
        <button 
            type="submit"
            onClick={handleSubmit(onSubmit)} 
            className="p-3 mb-4 mt-4 w-full font-bold rounded-lg bg-total-primary border border-total-primary text-total-black  ">
            {text}
        </button>
    )
}

export default ButtonSubmit;