import { Focused } from "react-credit-cards-2"

export type CardType = {
  account_id: number,
  cod: number,
  expiration_date: string,
  first_last_name: string,
  id: number,
  number_id: number
}
export type NewCardPay = {
  number: number,
  expiry: string,
  cvc: number,
  name: string,
}