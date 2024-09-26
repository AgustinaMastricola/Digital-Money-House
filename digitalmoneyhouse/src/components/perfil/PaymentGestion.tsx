import Link from 'next/link'
import ArrowRightIcon from '../common/icons/ArrowRight'

const PaymentGestion = () => {
  return (
    <div className='bg-total-primary mb-4 w-11/12 md:w-10/12 rounded-lg py-5 md:py-8 text-base md:text-xl flex items-center justify-between px-5 font-bold'>
      <Link href={'/dashboard/tarjetas'}>Gestioná los medios de pago</Link>
      <Link href={'/dashboard/tarjetas'}>
        <ArrowRightIcon className='#000000'/>
      </Link>
    </div>
  )
}

export default PaymentGestion