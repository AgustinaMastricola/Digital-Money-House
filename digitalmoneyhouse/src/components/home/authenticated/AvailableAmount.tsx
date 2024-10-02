'use client'
import { useAccountContext } from '@/context/AccountContextProvider';
import { formatAmount } from '@/utils/functions/formatAmount';

const AvailableAmount = () => {
  const {available_amount} = useAccountContext();
  const amount = formatAmount(`${available_amount}`);
  return (
    <p className='border rounded-full border-total-primary text-center px-8 py-2 text-xl'>
      {amount}
    </p>
  )
}

export default AvailableAmount