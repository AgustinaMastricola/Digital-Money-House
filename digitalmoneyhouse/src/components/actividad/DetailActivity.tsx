import React, { useEffect, useState } from 'react'
import Container from '../common/containers/Container'
import { useAccountContext } from '@/context/AccountContextProvider'
import { useUserContext } from '@/context/UserContextProvider'
import CheckedIcon from '../common/icons/CheckedIcon'
import { TransferenceType } from '@/types/transference.types'
import transactionsAPI from '@/services/transactions/transactions.service'

const DetailActivity = () => {
  const {id} = useAccountContext()
  const {token} = useUserContext()
  const [activity, setActivity] = useState<TransferenceType>()

  useEffect(()  =>  {
    const fetchActivity = async () => {
    const path = window.location.pathname;
    const parts = path.split('/');
    const transaction_id = parseInt(parts[parts.length - 1], 10);
    const res = await transactionsAPI.getASpecificTransactionUser(token, id, transaction_id);
    setActivity(res);
  }
  fetchActivity()
  }, []);

  return (
    <Container className={"bg-total-black w-11/12 md:w-10/12"}>
				<div className="flex items-center ml-2">
					<CheckedIcon width="30px" />
					<h1 className="text-total-primary ml-3">Aprobada</h1>
				</div>
        <hr className="text-total-white" />
        <p className="text-total-white text-xs my-3">Creada el {''} de {'mes'} {'año'} a las {'horas'}:{'minutos'} hs.</p>
        <h3 className="text-total-white">
          {activity?.description}
        </h3>
			</Container>
  )
}

export default DetailActivity