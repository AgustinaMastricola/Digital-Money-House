import FormularioLogin from '@/components/login/FormularioLogin'
import React from 'react'

const Login = () => {
  return (
    <main>
      <div className='bg-light-black h-full flex flex-col justify-start items-center py-20 pb-52 md:pb-32'>
        <FormularioLogin/>
      </div>
    </main>
  )
}

export default Login