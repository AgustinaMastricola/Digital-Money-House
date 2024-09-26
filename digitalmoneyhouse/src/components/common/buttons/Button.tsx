import clsx from "clsx"
import Link from "next/link"

type ButtonProps = {
  title: string,
  className?: string,
  href?:string,
  asLink?:boolean,
  onClick?:()=>void,
  type?: 'button' | 'submit' | 'reset',
  children?: React.ReactNode
}

function Button({title, className, href, asLink = false, onClick, type, children}:ButtonProps) {
  if(asLink && href) {
    return (
      <Link 
        href={href}
        className={clsx( "text-center font-bold p-3 border rounded-lg", className )}>
        {title}
      </Link>
    )
  }
  
  return (
    <button 
      className={clsx("text-center font-bold border rounded-lg", className )}
      onClick={onClick}
      type={type}
      >
      {title}
      {children}
    </button>
  )
}

export default Button