'use client'
import { useAccountContext } from '@/context/AccountContextProvider';
import { memo } from 'react'

const AvailableAmount = () => {
  const { available_amount } = useAccountContext();

  function formatAmount(amount: string){
    return `$ ${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`
  }

  return (
    <p className='border rounded-full border-total-primary text-center px-8 py-2 text-xl'>
      {formatAmount(`${available_amount}`)}
    </p>
  )
}

export default memo(AvailableAmount)