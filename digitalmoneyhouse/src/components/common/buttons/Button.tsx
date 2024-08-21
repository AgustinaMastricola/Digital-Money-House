import clsx from "clsx"
import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode,
  className?: string,
  href?:string,
  asLink?:boolean,
  onClick?:()=>void,
  type?: 'button' | 'submit' | 'reset'
}

function Button({children, className, href, asLink = false, onClick, type}:ButtonProps) {
  if(asLink && href) {
    return (
      <Link 
        href={href}
        className={clsx( "text-center font-bold p-3 border rounded-lg text-lg", className )}>
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      className={clsx("text-center font-bold border rounded-lg", className )}
      onClick={onClick}
      type={type}
      >
      
      {children}
    </button>
  )
}

export default Button