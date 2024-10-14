'use client'
import { useAccountContext } from '@/context/AccountContextProvider';
import { formatAmount } from '@/utils/functions/formatAmount';

const AvailableAmount = () => {
  const {available_amount} = useAccountContext();
  const amount = formatAmount(`${available_amount}`);
  return (
    <p className='border-2 rounded-full border-total-primary font-bold text-center px-3 py-2 text-xl lg:text-3xl'>
      {amount}
    </p>
  )
}

export default AvailableAmount