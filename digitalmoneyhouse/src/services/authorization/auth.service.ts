import { TokenType } from "@/types/token.types";
import { httpsPost, httpsPostCookieToken, httpsPostLogout } from "../common/https.service";
import { UserLoginType } from "@/types/users.types";

class AuthApi {
  login = async (user:UserLoginType) =>
    httpsPostCookieToken(`/login`, user);
  logout = async ()=>
    httpsPostLogout(`/logout`)
}
const authApi = new AuthApi();
export default authApi;