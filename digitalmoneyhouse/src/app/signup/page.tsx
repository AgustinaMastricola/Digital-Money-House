import FormularioSignup from '@/components/forms/FormularioSignup'
import React from 'react'

const Signup = () => {
  return (
    <div className='bg-light-black h-screen flex flex-col justify-start items-center'>
      <h1 className='text-total-white mb-4  '>Crear Cuenta</h1>
      <FormularioSignup/>
    </div>
  )
}

export default Signup