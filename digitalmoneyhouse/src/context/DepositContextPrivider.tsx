'use client'
import cardsAPI from "@/services/cards/cards.service";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAccountContext } from "./AccountContextProvider";

type Deposit = {
  amount: number;
  destination: string;
  origin: string; 
  card_id: number;
  loading: boolean;
};

const DepositContext = createContext<Deposit & { setCardIdSelected: (cardId: number) => void; setAmountSelected: (amount: number) => void }>({
  amount: 0,
  destination: "",
  origin: "",
  card_id: 0,
  loading: true,
  setCardIdSelected: () => {},
  setAmountSelected: () => {},
});

export default function DepositProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const {id , cvu} = useAccountContext()
  const [deposit, setDeposit] = useState<Deposit>({
    amount: 0,
    destination: "",
    origin: "",
    card_id: 0,
    loading: true,
  });
  const setCardIdSelected = (cardId: number) => {
    cardsAPI.getCardByCardID(`${session?.user?.token}`, id, cardId)
    .then(cardData => {
      setDeposit((prevDeposit) => ({
        ...prevDeposit,
        card_id: cardId,
        origin: `${cardData.number_id}`,
        destination: cvu
      }));
    })
  };

  const setAmountSelected = (amount: number) => {
    setDeposit((prevDeposit) => ({
      ...prevDeposit,
      amount: amount,
    }));
  }

  const value = useMemo(
    () => ({
      ...deposit,
      setCardIdSelected,
      setAmountSelected,
    }),
    [deposit]
  );

  return <DepositContext.Provider value={value}>{children}</DepositContext.Provider>;
}

export function useDepositContext() {
  return useContext(DepositContext);
}