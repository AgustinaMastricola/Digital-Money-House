import FormularioSignup from '@/components/signup/FormularioSignup'
import React from 'react'

const Signup = () => {
  return (
    <main>
      <div className='bg-light-black h-full flex flex-col items-center pb-28'>
        <FormularioSignup/>
      </div>
    </main>
  )
}

export default Signup