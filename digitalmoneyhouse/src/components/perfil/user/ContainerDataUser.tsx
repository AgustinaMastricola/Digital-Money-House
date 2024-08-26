import DataRow from './DataRow';
import { useSession } from 'next-auth/react';
import accountAPI from '@/services/account/account.service';
import userApi from '@/services/users/user.service';

const ContainerDataUser = async () => {
  const { data: session, status, update } = useSession();
  const token = session?.user.token;
  const getAccount = await accountAPI.getMyAccount(token)
  const userData = await userApi.getUserData(token, getAccount.user_id)

  return (
    <div  className='w-11/12 px-2 pt-3 md:px-10 lg:px-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl'>
      <h1 className='mb-4 text-lg'>Tus datos</h1>
      <div className='space-y-2 w-full'>
        <DataRow title={'Email'} atribut={['email']} userInfo={[userData.email]} />
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Nombre y apellido'} atribut={['firstname','lastname']} userInfo={[`${userData.firstname}`, ` ${userData.lastname}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'DNI'} atribut={['dni']} userInfo={[`${userData.dni}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Teléfono'} atribut={['phone']} userInfo={[`${userData.phone}`]}/>
        <hr className="text-medium-gray opacity-30" />
        <DataRow title={'Contraseña'} atribut={['password']} userInfo={['*******']}/>
        <hr className="text-medium-gray opacity-30" />
      </div>
    </div>
  )
}

export default ContainerDataUser