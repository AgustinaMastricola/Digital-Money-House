import { UserType } from '@/types/users.types';
import DataRow from './DataRow';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import accountAPI from '@/services/account/account.service';
import userApi from '@/services/users/user.service';

const ContainerDataUser = () => {
  const { data: session, status, update } = useSession();
  const [userData, setUserData] = useState<UserType>({
		dni: 0,
		email: "",
		firstname: "",
		lastname: "",
		password: "",
		phone: "",
	});

  const getDataUser = async () => {
		if (session?.user?.token) {
			const getAccount = await accountAPI.getMyAccount(`${session.user.token}`);
			const res = await userApi.getUserData(
				`${session.user.token}`,
				getAccount.user_id
			);
			console.log(res);
			setUserData(res);
		}
	};
	useEffect(() => {
		getDataUser();
	}, [session?.user?.token]);

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