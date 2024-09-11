'use client'
import { AccountData } from "@/types/account.types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import accountAPI from "@/services/account/account.service";
import { useSession } from "next-auth/react";

const AccountContext = createContext<AccountData>({
  alias: '',
  available_amount: 0,
  cvu: '',
  id: 0,
  user_id: 0
});

export default function AccountProvider({children}:{children: React.ReactNode}) {
  const [account, setAccount] = useState<AccountData>({
    alias: '',
    available_amount: 0,
    cvu: '',
    id: 0,
    user_id: 0
  });
  const { data: session, status } = useSession();

  useEffect(() => {      
    if (status === "authenticated" && session?.user?.token) {
      const token = session.user.token;

      accountAPI.getMyAccount(token)
        .then(accountData => {
          setAccount({
            alias: accountData.alias,
            available_amount: accountData.available_amount,
            cvu: accountData.cvu,
            id: accountData.id,
            user_id: accountData.user_id
          });
        })
          .catch(error => {
            console.error("Error fetching user data:", error);
          })
    }}, [session]);


  const value = useMemo(() => 
    ({
      alias: account.alias,
      available_amount: account.available_amount,
      cvu: account.cvu,
      id: account.id,
      user_id: account.user_id
    }), [account])

  return (
    <AccountContext.Provider value={value}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext(){
  return useContext(AccountContext);
}