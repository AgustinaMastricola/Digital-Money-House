export const API_URL = "https://digitalmoney.ctd.academy/api"
export const API_URL_USERS = `${API_URL}/users`

//endpoint que representan los metodos http

//GET GENERICO
export const httpGet = async<T> (endpoint:string, params?: URLSearchParams) : Promise<T> => {
  const res = await fetch(`${API_URL}/${endpoint}${params ? `?${params}` : ''}`);
  if(!res.ok){
    throw new Error('Error al recibir' + endpoint)
  }
  return res.json();
}
