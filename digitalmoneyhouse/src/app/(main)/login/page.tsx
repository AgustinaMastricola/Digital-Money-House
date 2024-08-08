import FormularioLogin from '@/components/forms/FormularioLogin'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className='bg-light-black h-full flex flex-col justify-start items-center py-20'>
        <FormularioLogin/>
      </div>
    </>
  )
}

export default Login