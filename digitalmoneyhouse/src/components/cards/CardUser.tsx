import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type CardUserProps = {
  amount: string
}
const CardUser = ({amount}:CardUserProps) => {
  return (
    <div className='bg-total-black w-11/12 h-1/4 rounded-lg p-2'>
      <div className='text-total-white text-sm flex justify-end items-center space-x-2'>
        <Link className='underline ' href={'/tarjetas'}>Ver tarjetas</Link>
        <button className='underline'>Ver CVU</button>
      </div>
      <div className='text-total-white my-8 ml-3 w-max space-y-2'>
        <h2>Dinero disponible</h2>
        <p className='border rounded-full border-total-primary text-center p-1 py-2 text-2xl'>$ {amount},00</p>
      </div>
    </div>
  )
}

export default CardUser