'use client'
import accountAPI from '@/services/account/account.service';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'

const AvailableAmount = () => {
  const {data: session} = useSession();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await accountAPI.getMyAccount(`${session?.user.token}`);
      setAmount(data.available_amount);
    };
    fetchData();
  }, [session?.user.token]); 

  function formatAmount(amount: string){
    return `$ ${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`
  }

  return (
    <p className='border rounded-full border-total-primary text-center px-8 py-2 text-xl'>
      {formatAmount(`${amount}`)}
    </p>
  )
}

export default AvailableAmount