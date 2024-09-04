import Link from 'next/link'

type CardUserProps = {
  amount: string
}
const CardUser = ({amount}:CardUserProps) => {

  const formatAmount = (amount: string) => {
    return `$ ${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`
  }

  return (
    <div className='bg-total-black w-11/12 rounded-lg p-2 md:mt-4'>
      <div className='text-total-white text-sm flex justify-end items-center space-x-2'>
        <Link className='underline' href={'/dashboard/tarjetas'}>Ver tarjetas</Link>
        <Link className='underline' href={'/dashboard/perfil'}>Ver CVU</Link>
      </div>
      <div className='text-total-white my-5 ml-3 w-max space-y-2'>
        <h2>Dinero disponible</h2>
        <p className='border rounded-full border-total-primary text-center px-8 py-2 text-xl'>{formatAmount(amount)}</p>
      </div>
    </div>
  )
}

export default CardUser