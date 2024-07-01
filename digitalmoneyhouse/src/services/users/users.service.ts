import { UserData, UserType, UserLoginType } from "@/types/users.types";
import { httpsGet, httpsGetPublic, httpsPost } from "../common/https.service";
import { TokenType } from "@/types/token.types";

class UserApi {
  login = async (user:UserLoginType) : Promise<TokenType> => 
    httpsPost(`/login`, user);
  signUp = async (user:UserType) : Promise<UserData>=>
    httpsPost(`/users`,user);
  getUserById = async (user_id:number) : Promise<UserType>=>
    httpsGet(`/users/${user_id}`);
}

const userApi = new UserApi();
export default userApi;