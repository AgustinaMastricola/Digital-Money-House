export type UserType = {
  "dni": number,
  "email": string,
  "firstname": string,
  "lastname": string,
  "password": string,
  "phone"?: string  
}
export type UserData = {
  "user_id": number,
  "account_id": number,
  "email": string
}
export type UserLoginType = {
  "email": string,
  "password": string
}
export type UserContextType = {
  firstname: string,
  lastname: string,
  token: string,
  user_id: number | null,
  account_id: number | null,
}