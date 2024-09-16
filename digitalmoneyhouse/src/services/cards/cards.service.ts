import { CardType } from "@/types/card.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class CardsAPI {
  getCardsByAccountID = async (token: string, account_id: number):Promise<CardType[]> =>  {
    const res = await fetch(`${API_URL}account/${account_id}/cards`, {
      headers: {
        Authorization : token
      },
    })
    return res.json();
  }
  getCardByCardID = async (token: string, account_id: number, card_id:number):Promise<CardType> =>  {
    const res = await fetch(`${API_URL}account/${account_id}/cards/${card_id}`, {
      headers: {
        Authorization : token
      },
    })
    return res.json();
  }
  createCard = async (token: string, account_id: number, cardData:object): Promise<CardType> => {
    const res = await fetch(`${API_URL}account/${account_id}/cards`, {
      method: 'POST',
      headers: {
        Authorization : token
      },
      body: JSON.stringify(cardData)
    })
    return res.json();
  }
  deleteCard = async (token: string, account_id: number, card_id:number): Promise<any> => {
    const res = await fetch(`${API_URL}account/${account_id}/cards/${card_id}`, {
      method: 'DELETE',
      headers: {
        Authorization : token
      },
    })
    return res.json();
  }
}
const cardsAPI = new CardsAPI();
export default cardsAPI;