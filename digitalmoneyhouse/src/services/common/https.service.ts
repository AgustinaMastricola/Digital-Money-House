import { URLSearchParams } from "url";
const API_URL_BASE = 'https://digitalmoney.digitalhouse.com/api'
const API_URL_SERVICE = 'https://digitalmoney.digitalhouse.com/service'

export const httpsGet = async <T>(endpoint:string, params?:URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL_BASE}${endpoint}${params ? `?${params}` : '' }`)
    if(!res.ok){
        throw new Error(res.statusText)
    }
    return res.json()
}
export const httpsGetPublic = () => {

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
    if (res.status===200){
        window.location.replace('/')
    }
    return res.json()
}
export const httpsPostPublic = () => {
    
}