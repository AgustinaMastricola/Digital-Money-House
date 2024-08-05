import { AccountData } from "@/types/account.types";
import { ActivityUserType } from "@/types/activityUser.types";

class TransactionsAPI {

  getActivitiesUser = async (token: string, account_id: number):Promise<ActivityUserType[]> =>  {
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
}
const transactionsAPI = new TransactionsAPI();
export default transactionsAPI; 