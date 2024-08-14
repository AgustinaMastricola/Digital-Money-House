import Link from 'next/link'
import arrow from "../../../public/flechaNegra.png"
import Image from "next/image"

const PaymentGestion = () => {
  return (
    <div className='bg-total-primary w-11/12 rounded-lg py-5 md:py-10 text-base md:text-xl flex items-center justify-between px-5 font-bold'>
      <Link href={'/tarjetas'}>Gestioná los medios de pago</Link>
      <Link href={'/tarjetas'}>
        <Image src={arrow} alt={"flecha"} className="h-max"/>
      </Link>
    </div>
  )
}

export default PaymentGestion