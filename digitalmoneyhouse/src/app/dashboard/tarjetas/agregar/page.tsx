import CardPicture from '@/components/tarjetas/CardPicture'
import FormAddCard from '@/components/tarjetas/FormAddCard'
import React from 'react'

const CargarTarjeta = () => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <CardPicture/>
      <FormAddCard/>
    </div>
  )
}

export default CargarTarjeta