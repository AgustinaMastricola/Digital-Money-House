import { TokenType } from "@/types/token.types";
import { httpsPost, httpsPostCookie } from "../common/https.service";
import { UserLoginType } from "@/types/users.types";

class AuthApi {
  login = async (user:UserLoginType) =>
    httpsPostCookie(`/login`, user);
  logout = async () : Promise<TokenType>=>
    httpsPost(`/logout`,{})
}
const authApi = new AuthApi();
export default authApi;