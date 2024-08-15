import Link from "next/link"

type LogoProps = {
  src: string,
  className?:string
}
function LogoHeader({src, className}:LogoProps) {
  return (
    <Link 
      href="/">
			<img src={src} alt='Logo de la marca' className={className} />
		</Link>
  )
}

export default LogoHeader