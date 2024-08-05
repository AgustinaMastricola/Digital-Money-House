export type SignupFormData = {
  "dni": number,
  "email": string,
  "firstname": string,
  "lastname": string,
  "password": string,
  "passwordConfirmed": string,
  "phone"?: string
}
export type LoginFormData = {
  "email": string,
  "password": string,
}