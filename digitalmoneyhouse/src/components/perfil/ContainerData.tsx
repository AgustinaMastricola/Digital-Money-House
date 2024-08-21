import { UserType } from '@/types/users.types';
import DataRow from './DataRow';

type ContainerProps = {
	user: UserType;
};

const ContainerData = ({ user }: ContainerProps) => {
  return (
    <div  className='w-11/12 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl'>
      <h1 className='mb-4 text-lg'>Tus datos</h1>
      <div className='space-y-2 w-full'>
        <DataRow title={'Email'} atribut={['email']} userInfo={[user.email]} />
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Nombre y apellido'} atribut={['firstname','lastname']} userInfo={[`${user.firstname}`, ` ${user.lastname}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'DNI'} atribut={['dni']} userInfo={[`${user.dni}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Teléfono'} atribut={['phone']} userInfo={[`${user.phone}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Contraseña'} atribut={['password']} userInfo={['*******']}/>
        <hr className="text-medium-gray opacity-30" />
      </div>
    </div>
  )
}

export default ContainerData