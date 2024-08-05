import Link from "next/link";
import { FieldValues } from "react-hook-form";

type ButtonProps<T>= {
    text: string;
    href: string
}
const ButtonHome = <T extends FieldValues,> ({text, href}:ButtonProps<T>) => {
    
    return (
        <Link 
            className="w-11/12 text-center text-lg font-bold p-3 rounded-lg bg-total-primary border border-total-primary text-total-black" 
            href={href}>
            {text}
        </Link>
    )
}

export default ButtonHome;