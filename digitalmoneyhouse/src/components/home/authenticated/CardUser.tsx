import Link from 'next/link'
import AvailableAmount from './AvailableAmount'

const CardUser = () => {
  return (
    <div className='bg-total-black w-11/12 rounded-lg p-2 md:mt-4'>
      <div className='text-total-white text-sm flex justify-end items-center space-x-2'>
        <Link className='underline' href={'/dashboard/tarjetas'}>Ver tarjetas</Link>
        <Link className='underline' href={'/dashboard/perfil'}>Ver CVU</Link>
      </div>
      <div className='text-total-white my-5 ml-3 w-max space-y-2'>
        <h2>Dinero disponible</h2>
        <AvailableAmount/>
      </div>
    </div>
  )
}

export default CardUser