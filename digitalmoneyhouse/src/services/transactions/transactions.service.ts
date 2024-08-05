import { ActivityUserType } from "@/types/activityUser.types";

class TransactionsAPI {

  getActivitiesUser = async (token: string, account_id: number) => {
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