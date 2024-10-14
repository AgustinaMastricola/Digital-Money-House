import Link from 'next/link'
import AvailableAmount from './AvailableAmount'
import Container from '@/components/common/containers/Container'

const CardUser = () => {
  return (
    <Container className={'bg-total-black w-11/12 md:w-10/12 md:mt-6 p-5'}>
      <div className='text-total-white text-sm flex justify-end items-center space-x-2 lg:mr-3'>
        <Link className='underline' href={'/dashboard/tarjetas'}>Ver tarjetas</Link>
        <Link className='underline' href={'/dashboard/perfil'}>Ver CVU</Link>
      </div>
      <div className='text-total-white mt-4 lg:mb-4 w-max space-y-2'>
        <h2>Dinero disponible</h2>
        <AvailableAmount/>
      </div>
    </Container>
  )
}

export default CardUser