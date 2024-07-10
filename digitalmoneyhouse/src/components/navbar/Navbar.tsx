'use client'
import authApi from '@/services/authorization/auth.service'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { useRouter } from 'next/navigation'

const links = [
  {href:"/login", name:"Ingresar", style:" bg-total-black border-total-primary text-total-primary"},
  {href:"/signup", name: "Crear cuenta", style:"bg-total-primary border-total-primary text-total-black"}
]

const Navbar = () => {
  const router = useRouter();
  const handdleLogout = async () => {
    await authApi.logout()
    router.push('/')
}

  return (
    <nav className="p-3 bg-total-black ">
      <div className='flex items-center'>
        <NavLogo/>
        <NavLinks links={links}/>
        {/* <button className="p-3 mb-4 mt-4 w-full rounded bg-total-primary border border-total-primary text-total-black" onClick={handdleLogout}>logout </button> */}
      </div>
    </nav>
  )
}
export default Navbar