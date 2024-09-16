import { TransferenceType } from "@/types/transference.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class TransactionsAPI {
  getAllTransactionsUser = async (account_id: number, token: string):Promise<TransferenceType[]> =>  {
    const res = await fetch(`${API_URL}account/${account_id}/activity`,
      {
        headers:{
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
    return res.json();
  }
  getASpecificTransactionUser = async (token: string, account_id: number, transaction_id: number ):Promise<TransferenceType[]> =>  {
    const res = await fetch(`${API_URL}account/${account_id}/transactions/${transaction_id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    return res.json();
  }
  createTransaction = async (token: string, account_id: number, body: object):Promise<TransferenceType> => {
    const res = await fetch(`${API_URL}account/${account_id}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
      body: JSON.stringify(body)
    })
    return res.json();
  }
}
const transactionsAPI = new TransactionsAPI();
export default transactionsAPI; 