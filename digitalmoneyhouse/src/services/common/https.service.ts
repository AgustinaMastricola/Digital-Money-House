'use server'
import { TokenType } from "@/types/token.types";
import { UserData } from "@/types/users.types";
import { cookies } from "next/headers";
import { URLSearchParams } from "url";

const URL_BASE = 'https://digitalmoney.digitalhouse.com'
const API_URL_BASE = 'https://digitalmoney.digitalhouse.com/api'
const API_URL_SERVICE = 'https://digitalmoney.digitalhouse.com/service'

export const httpsGet = async <T>(endpoint:string, params?:URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL_BASE}${endpoint}${params ? `?${params}` : '' }`)
    if(!res.ok){
        throw new Error(res.statusText)
    }
    return res.json()
}

export const httpsPost = async <T>(endpoint:string, body: object, skipAuthorization?: boolean): Promise<T> => {
    const res = await fetch(`${API_URL_BASE}${endpoint}`,{
        method: 'POST',
        headers: 
            skipAuthorization ? 
            {   
                'Content-Type':'application/json',
            }
            :
            {
                'Content-Type':'application/json',
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjI4OSIsImVtYWlsIjoiYWd1c21hc3RyaWNAZ21haWwuY29tIiwiZXhwIjoxNzE5NTI4OTcyfQ.pwrLHI3ingEoZ_N2vnrFkDmD3jTElQW5plGGbmGQWOc'
            },
        body: JSON.stringify(body)
    })
    return res.json()
}

export const httpsPostCookieToken = async (endpoint:string, body: object) => {
    const response:string = await httpsPost(endpoint,body)
    const cookieStore = cookies();
    cookieStore.set({
        name: 'token',
        value: JSON.stringify(response),
        httpOnly: true,
        path: '/',
        //secure:true,
        sameSite: true 
    })
}

export const httpsPostCookieDataUser = async (endpoint:string, body: object) => {
    const response:UserData = await httpsPost(endpoint,body)
    const cookieStore = cookies();
    cookieStore.set({
        name: 'user_id',
        value: response.user_id.toString(),
        httpOnly: true,
        path: '/',
        //secure:true,
        sameSite: true 
    })
    cookieStore.set({
        name: 'account_id',
        value: response.account_id.toString(),
        httpOnly: true,
        path: '/',
        //secure:true,
        sameSite: true 
    })
    cookieStore.set({
        name: 'email',
        value: response.email.toString(),
        httpOnly: true,
        path: '/',
        //secure:true,
        sameSite: true 
    })
}
export const httpsPostLogout = async (endpoint:string) => {
    const response = httpsPost(`${API_URL_BASE}${endpoint}`,{})
    cookies().delete('token')
}
//para recuperar el token de la cookie
// cookieStore.get('token').then(cookie => {
//     if (cookie) {
//         let response = JSON.parse(cookie.value);
//         console.log(response.token);  // Utiliza el token aquí
//     }
// });

// export const httpsPatch = async <T> (endpoint:string, body:object, params?:URLSearchParams,  token:string): Promise<T> => {
//     const res = await fetch(`${API_URL_BASE}${endpoint}${params ? `?${params}` : '' }`,{
//         method: 'PATCH',
//         headers: 
//         {
//             'Content-Type':'application/json',
//             'Authorization': token
//         },
//         body: JSON.stringify(body)
//     })
//     return res.json()
// }
// export const httpsPatchPublic = () => {
    
// }