import { AccountData } from "@/types/account.types";

class AccountAPI {
  getMyAccount = async (token: string):Promise<AccountData> => {
    const res = await fetch(`http://localhost:3000/api/account`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    return res.json();
  }
}
const accountAPI = new AccountAPI();
export default accountAPI; 