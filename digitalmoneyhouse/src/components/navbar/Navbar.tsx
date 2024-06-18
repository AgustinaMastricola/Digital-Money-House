import NavLinks from './NavLinks'
import NavLogo from './NavLogo'

const links = [
  {href:"/login", name:"Iniciar Sesión"},
  {href:"/signup", name: "Registrarme"}
]

const Navbar = () => {
  return (
    <nav className="p-3 bg-total-black ">
      <div className='grid grid-cols-12 items-center'>
        <NavLogo/>
        <NavLinks links={links}/>
      </div>
    </nav>
  )
}
export default Navbar