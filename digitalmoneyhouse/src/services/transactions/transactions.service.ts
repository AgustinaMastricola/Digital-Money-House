import { TransferenceType } from "@/types/transference.types";
class TransactionsAPI {
  getAllTransactionsUser = async (account_id: number, token: string):Promise<TransferenceType[]> =>  {
    const res = await fetch(`http://localhost:3000/api/account/${account_id}/activity`,
      {
        headers:{
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
    return res.json();
  }
  getASpecificTransactionUser = async (token: string, account_id: number, transaction_id: number ):Promise<TransferenceType[]> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/transactions/${transaction_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error al obtener la transaccion')
    }
    return res.json();
  }
  createTransaction = async (token: string, account_id: number, body: object):Promise<TransferenceType> => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/transactions`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      console.log('error al crear una transaccion')
    }
    return res.json();
  }
}
const transactionsAPI = new TransactionsAPI();
export default transactionsAPI; 