import Link from "next/link";
import { FieldValues } from "react-hook-form";

type ButtonProps<T>= {
    text: string;
}
const ButtonSecondary = <T extends FieldValues,> ({text}:ButtonProps<T>) => {
    
    return (
        <Link 
            className="text-center text-lg block font-bold p-3 mb-4 rounded-lg bg-medium-gray border border-medium-gray text-total-black" 
            href={"/signup"}>
            {text}
        </Link>
    )
}

export default ButtonSecondary;