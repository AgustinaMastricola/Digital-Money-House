import { AccountData } from "@/types/account.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class AccountAPI {
  getMyAccount = async (token: string):Promise<AccountData> => {
    const res = await fetch(`${API_URL}account`, {
      headers: {
        Authorization : token
      },
    })
    return res.json();
  }
}
const accountAPI = new AccountAPI();
export default accountAPI; 