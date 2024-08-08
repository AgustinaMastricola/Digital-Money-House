import Link from "next/link";
import { FieldValues } from "react-hook-form";

type ButtonProps<T>= {
    text: string;
    href: string
}
const ButtonHome = <T extends FieldValues,> ({text, href}:ButtonProps<T>) => {
    
    return (
        <Link 
            className="bg-total-primary border border-total-primary text-total-black w-11/12 text-center font-bold p-3 rounded-lg text-lg md:p-5 md:h-20 md:text-2xl  " 
            href={href}>
            {text}
        </Link>
    )
}

export default ButtonHome;