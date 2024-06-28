import { UserData, UserType, UserLoginType } from "@/types/users.types";
import { httpsGet, httpsPost } from "../common/https.service";
import { TokenType } from "@/types/token.types";

class UserApi {
  login = async (user:UserLoginType) : Promise<TokenType> => 
    httpsPost(`/login`, user);
  signUp = async (user:UserType) : Promise<UserData>=>
    httpsPost(`/users`,user)
}

const userApi = new UserApi();
export default userApi;