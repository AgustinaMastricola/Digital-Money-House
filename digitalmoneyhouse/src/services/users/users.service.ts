import { UserData, UserType } from "@/types/users.types";
import { httpsGet, httpsPost } from "../common/https.service";

class UserApi {
  getUser = async (id:number) : Promise<UserType> => 
    httpsGet(`/users/${id}`);
  postUser = async (user:object):Promise<UserData>=>
    httpsPost(`/users`,{user:user})
}

const userApi = new UserApi();
export default userApi;