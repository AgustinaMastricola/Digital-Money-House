import { UserData, UserType } from "@/types/users.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class UserAPI {
  newUser = async (data: UserType): Promise<UserData> => {
    const res = await fetch(`${API_URL}users`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    return res.json();
  }
  getUserData = async(token: string, user_id: number):Promise<UserType> => {
    const res = await fetch(`${API_URL}users/${user_id}`, {
      headers: {
        Authorization : token
      },
    })
    return res.json()
  }
  updateUserData = async(token: string, user_id: number, data:object):Promise<UserType> => {
    const res = await fetch(`${API_URL}users/${user_id}`, {
      method: 'PATCH',
      headers: {
        Authorization : token
      },
      body: JSON.stringify(data)
    })
    return res.json()
  }
}
const userApi = new UserAPI();
export default userApi;