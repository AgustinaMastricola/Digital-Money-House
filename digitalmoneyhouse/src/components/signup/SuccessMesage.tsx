import Button from '../common/buttons/Button';
import CheckedIcon from '../common/icons/CheckedIcon';

type SuccessMesageProps = {
  style: string;
}

const SuccessMesage = ({style}:SuccessMesageProps) => {
  return (
    <div className={`${style} flex flex-col items-center px-5 py-16 space-y-3`}>
      <h2 className='text-total-white text-3xl text-center'>Registro exitoso</h2>
      <CheckedIcon/>
      <p className='text-total-white text-center'>Usted se registró correctamente.<br/> Haga click en el siguiente botón para ingresar a su cuenta.</p>
      <Button children={'Iniciar sesión'} asLink={true} href='/login' className='bg-total-primary border-total-primary'/>
    </div>
  )
}

export default SuccessMesage;