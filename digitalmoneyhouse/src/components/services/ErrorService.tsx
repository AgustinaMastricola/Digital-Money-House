import React from 'react'
import Container from '../common/containers/Container'
import ErrorIcon from '../common/icons/ErrorIcon'
import Button from '../common/buttons/Button'

const ErrorService = () => {
  return (
    <>
      <Container className='bg-total-black py-10 space-y-3 w-11/12 md:w-10/12 md:mt-6 flex flex-col items-center text-total-white'>
        <ErrorIcon/>
        <h1>No encontramos facturas asociadas a este dato</h1>
        <hr className="text-medium-gray w-9/12" />
        <p>Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura.</p>
      </Container>
      <div className='flex w-11/12 md:w-10/12 flex-col mt-4 items-end'>
    <Button title={'Revisar dato'} className='bg-total-primary border-total-primary py-3 px-10'/>
      </div>
    </>
  )
}

export default ErrorService