import { UserType } from "@/types/users.types";
import { httpsGet } from "../common/https.service";

class UserApi {
  getUser = async (id:number) : Promise<UserType> => 
    httpsGet(`/users/${id}`)
}

const userApi = new UserApi();
export default userApi;