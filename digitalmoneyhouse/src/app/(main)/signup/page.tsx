import FormularioSignup from '@/components/forms/FormularioSignup'
import React from 'react'

const Signup = () => {
  return (
    <main>
      <div className='bg-light-black h-full flex flex-col items-center'>
        <h1 className='text-total-white mt-4 md:mt-10 md:mb-4'>Crear Cuenta</h1>
        <FormularioSignup/>
      </div>
    </main>
  )
}

export default Signup