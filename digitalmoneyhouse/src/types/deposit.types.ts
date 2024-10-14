export type DepositType = {
  "amount": number,
  "dated": string,
  "destination": string,
  "origin": string
}
export type DepositResponseType = {
  "account_id": number,
  "amount": number,
  "dated": string,
  "description": string,
  "destination": string,
  "id": number,
  "origin": string,
  "type": string
}