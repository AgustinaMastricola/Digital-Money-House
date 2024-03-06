import Image from 'next/image'
import icon from '../../../public/LogoVerde.png'

const Navbar = () => {
  return (
    <div className="p-3 bg-total-black">
      <div className='grid grid-cols-12 items-center'>
        <div className='col-span-2 col-start-2'>
          <Image
            src={icon}
            alt="Icono brand"
            priority
          />
        </div>
        <div className='space-x-4 col-span-10 col-start-6 lg:col-start-10'>
          <button className=" px-3 py-2 border rounded-[5px] text-xs md:text-base md:text-total-black text-total-primary font-extrabold">Ingresar</button>
          <button className=" px-3 py-2 border rounded-[5px] text-xs border-total-primary text-total-black bg-total-primary font-extrabold">Crear cuenta</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar