'use client'
import { useAccountContext } from '@/context/AccountContextProvider';
import { memo, useRef } from 'react'

const AvailableAmount = () => {
  const { available_amount } = useAccountContext();
  const renderCount = useRef(0);
	renderCount.current += 1;

  function formatAmount(amount: string){
    return `$ ${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`
  }

  return (
    <p className='border rounded-full border-total-primary text-center px-8 py-2 text-xl'>
      {formatAmount(`${available_amount}`)}
      me renderice : {renderCount.current} veces
    </p>
  )
}

export default memo(AvailableAmount)