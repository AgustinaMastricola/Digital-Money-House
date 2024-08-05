import { TransferenceType } from "@/types/transference.types";
class TransactionsAPI {

  getAllTransactionsUser = async (token: string, account_id: number):Promise<TransferenceType[]> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/activity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error')
    }
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
      console.log('error')
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
      console.log('error')
    }
    return res.json();
  }
}
const transactionsAPI = new TransactionsAPI();
export default transactionsAPI; 