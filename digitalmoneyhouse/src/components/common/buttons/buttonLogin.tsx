import Link from "next/link";
import { FieldValues } from "react-hook-form";

type ButtonProps<T>= {
    text: string;
}
const ButtonPrimary = <T extends FieldValues,> ({text}:ButtonProps<T>) => {
    
    return (
        <Link 
            className="text-center text-lg font-bold mb-4 mt-4 rounded-lg bg-total-primary border border-total-primary text-total-black" 
            href={"/login"}>
            {text}
        </Link>
    )
}

export default ButtonPrimary;