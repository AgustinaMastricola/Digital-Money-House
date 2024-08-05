import { AccountData } from "@/types/account.types";

class AccountAPI {

  getMyAccount = async (token: string):Promise<AccountData> => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
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

  updateMyAlias = async (token: string, account_id: number, alias: object):Promise<AccountData> => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
      body: JSON.stringify(alias)
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  } 
}
const accountAPI = new AccountAPI();
export default accountAPI; 