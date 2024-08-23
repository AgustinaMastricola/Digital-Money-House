import Link from "next/link"

type LogoProps = {
  src: string,
  className?:string
}
function LogoHeader({src}:LogoProps) {
  return (
    <Link 
      href="/dashboard">
			<img src={src} alt='Logo de la marca' className='p-2' />
		</Link>
  )
}

export default LogoHeader