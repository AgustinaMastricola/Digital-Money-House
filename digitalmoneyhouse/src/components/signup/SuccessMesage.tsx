import Image from 'next/image'
import check from '../../../public/Check.png'
import ButtonPrimary from '../common/buttons/buttonLogin'

type SuccessMesageProps = {
  style: string;
}

const SuccessMesage = ({style}:SuccessMesageProps) => {
  return (
    <div className={`${style} flex flex-col items-center px-5 py-16 space-y-3`}>
      <h2 className='text-total-white text-3xl text-center'>Registro exitoso</h2>
      <Image src={check} alt={'Icono tilde verde'}/>
      <p className='text-total-white text-center'>Usted se registró correctamente.<br/> Haga click en el siguiente botón para ingresar a su cuenta.</p>
      <ButtonPrimary text={'Iniciar sesión'}/>
    </div>
  )
}

export default SuccessMesage;