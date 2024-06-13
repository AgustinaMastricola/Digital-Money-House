import { URLSearchParams } from "url";
const URL_BASE = 'https://digitalmoney.digitalhouse.com/api'

export const httpsGet = async <T>(endpoint:string, params?:URLSearchParams): Promise<T> => {
    const res = await fetch(`${URL_BASE}${endpoint}${params? `?${params}` : '' }`)
    if(!res.ok){
        throw new Error(res.statusText)
    }
    return res.json()
}