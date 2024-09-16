import { DepositType } from "@/types/deposit.types";
import { TransferenceType } from "@/types/transference.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class TransferencesAPI {
  createDeposit = async (token: string, account_id: number, data:object):Promise<DepositType> =>  {
    const res = await fetch(`${API_URL}account/${account_id}/deposits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
      body: JSON.stringify(data)
    })
    return res.json();
  }
}
const transferencesAPI = new TransferencesAPI();
export default transferencesAPI;