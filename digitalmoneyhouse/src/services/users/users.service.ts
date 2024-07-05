import { UserData, UserType, UserLoginType } from "@/types/users.types";
import { httpsGet, httpsPostCookieDataUser } from "../common/https.service";

class UserApi {
  createNewUser = async (user:UserType)=>
    httpsPostCookieDataUser(`/users`,user);
  getUserDataById = async (user_id:number) : Promise<UserType>=>
    httpsGet(`/users/${user_id}`);
  // updateUserData = async (token: string, body:UserType, params:number,) : Promise<UserType>=>
  //   httpsPatch(`/users/`, body, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjI4OSIsImVtYWlsIjoiYWd1c21hc3RyaWNAZ21haWwuY29tIiwiZXhwIjoxNzE5NTI4OTcyfQ.pwrLHI3ingEoZ_N2vnrFkDmD3jTElQW5plGGbmGQWOc');

}
const userApi = new UserApi();
export default userApi;