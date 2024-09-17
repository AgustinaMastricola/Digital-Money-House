import { useUserContext } from '@/context/UserContextProvider';
import DataRow from './DataRow';

const ContainerDataUser = () => {
  const {email, firstname, lastname, dni, phone} = useUserContext();

  return (
    <div  className='w-11/12 md:mt-4 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl mb-4'>
      <h1 className='mb-4 text-lg'>Tus datos</h1>
      <div className='space-y-2 w-full'>
        <DataRow title={'Email'} atribut={['email']} userInfo={[`${email}`]} />
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Nombre y apellido'} atribut={['firstname','lastname']} userInfo={[`${firstname}`, ` ${lastname}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'DNI'} atribut={['dni']} userInfo={[`${dni}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Teléfono'} atribut={['phone']} userInfo={[`${phone}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Contraseña'} atribut={['password']} userInfo={['*******']}/>
        <hr className="text-medium-gray opacity-30" />
      </div>
    </div>
  )
}

export default ContainerDataUser