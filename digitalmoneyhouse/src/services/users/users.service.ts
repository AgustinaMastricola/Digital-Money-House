import { UserType } from "@/types/users.types";
import { API_URL_USERS, httpGet } from "../utils/api.url";

class UserApi {
  getUserData = async (id:number) : Promise<UserType> => httpGet(`users/${id}`)
}

const userApi = new UserApi();
export default userApi;