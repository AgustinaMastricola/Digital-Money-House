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
  "dni": number,
  "email": string,
  "firstname": string,
  "lastname": string,
  "token": string,
  "phone"?: string,
  "loading": boolean
}