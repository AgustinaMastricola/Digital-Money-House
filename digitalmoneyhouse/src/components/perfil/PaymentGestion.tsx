import Link from 'next/link'
import arrow from "../../../public/flechaNegra.png"
import Image from "next/image"
import ArrowRightIcon from '../common/icons/ArrowRight'

const PaymentGestion = () => {
  return (
    <div className='bg-total-primary w-11/12 rounded-lg py-5 md:py-10 text-base md:text-xl flex items-center justify-between px-5 font-bold'>
      <Link href={'/tarjetas'}>Gestioná los medios de pago</Link>
      <Link href={'/tarjetas'}>
        <ArrowRightIcon className='#000000'/>
      </Link>
    </div>
  )
}

export default PaymentGestion