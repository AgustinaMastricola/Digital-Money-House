import { CardType } from "@/types/card.types";

class CardsAPI {
  getCardsByAccountID = async (token: string | undefined, account_id: number):Promise<CardType[]> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }

  getCardByCardID = async (token: string, account_id: number, card_id:number):Promise<CardType> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards/${card_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }

  createCard = async (token: string, account_id: number, cardData:object): Promise<CardType> => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
      body: JSON.stringify(cardData)
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }

  deleteCard = async (token: string | undefined, account_id: number, card_id:number): Promise<any> => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards/${card_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${token}`
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }
}
const cardsAPI = new CardsAPI();
export default cardsAPI;