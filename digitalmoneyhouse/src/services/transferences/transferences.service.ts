import { DepositType } from "@/types/deposit.types";
import { TransferenceType } from "@/types/transference.types";

class TransferencesAPI {

  createDeposit = async (token: string, account_id: number, data:object):Promise<DepositType> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/deposits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      console.log('error al crear un deposito')
    }
    return res.json();
  }
  getAllTransferences = async (token: string, account_id: number):Promise<TransferenceType[]> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/transferences`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error al obtener las transferencias')
    }
    return res.json();
  }
  createTransference = async (token: string, account_id: number, data:object):Promise<TransferenceType> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/transferences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      console.log('error al crear una transferencia')
    }
    return res.json();
  }
}
const transferencesAPI = new TransferencesAPI();
export default transferencesAPI;