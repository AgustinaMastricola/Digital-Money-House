import FormularioLogin from '@/components/forms/FormularioLogin'
import React from 'react'

const Login = () => {
  return (
    <div className='bg-light-black h-screen flex flex-col justify-start items-center'>
      <h1 className='text-total-white mb-4 mt-48 '>Iniciar sesión</h1>
      <FormularioLogin/>
    </div>
  )
}

export default Login