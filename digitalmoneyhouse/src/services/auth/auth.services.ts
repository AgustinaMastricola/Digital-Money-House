import { TokenType } from "@/types/token.types";
import { httpsGet } from "../common/https.service";

class AuthAPI {
    getToken = async (user:object) : Promise<TokenType>=>{
        httpsGet('/login')
    }
}
const authAPI = new AuthAPI();
export default authAPI;