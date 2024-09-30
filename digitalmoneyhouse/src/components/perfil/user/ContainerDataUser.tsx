import Container from '@/components/common/containers/Container';
import DataRow from './DataRow';
import { UserContextType } from '@/types/users.types';

type ContainerProps = {
  user: UserContextType
}
const ContainerDataUser = ({user}: ContainerProps) => {
  return (
      <Container className={'border border-total-gray md:mt-6 border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl w-11/12 md:w-10/12 flex flex-col'}>
        <h1 className='mb-4 text-lg'>Tus datos</h1>
        <div className='space-y-2 w-full'>
          <DataRow title={'Email'} atribut={['email']} userInfo={[`${user.email}`]} />
          <hr className="text-medium-gray opacity-30" />
          <DataRow title={'Nombre y apellido'} atribut={['firstname','lastname']} userInfo={[`${user.firstname}`, ` ${user.lastname}`]}/>
          <hr className="text-medium-gray opacity-30" />
          <DataRow title={'DNI'} atribut={['dni']} userInfo={[`${user.dni}`]} />
          <hr className="text-medium-gray opacity-30" />
          <DataRow title={'Teléfono'} atribut={['phone']} userInfo={[`${user.phone}`]} />
          <hr className="text-medium-gray opacity-30" />
          <DataRow title={'Contraseña'} atribut={['password']} userInfo={['*******']} />
          <hr className="text-medium-gray opacity-30" />
        </div>
      </Container>
  )
}

export default ContainerDataUser