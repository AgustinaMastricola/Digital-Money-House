type ButtonProps= {
    text: string;
}
const ButtonSubmit = ({text}:ButtonProps) => {
    return (
        <button type="submit" className="p-3 mb-4 w-full rounded bg-total-primary border border-total-primary text-total-black  ">{text}</button>
    )
}

export default ButtonSubmit;