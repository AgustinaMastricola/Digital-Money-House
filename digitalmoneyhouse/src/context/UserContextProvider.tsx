'use client'
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import { UserContextType } from "@/types/users.types";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

// Definir el contexto
const UserContext = createContext<UserContextType>({
  firstname: '',
  lastname: '',
  token: '',
  user_id: null,
  account_id: null
});

export default function UserProvider({children}:{children: React.ReactNode}) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserContextType>({
    firstname: '',
    lastname: '',
    token: '',
    user_id: null,
    account_id: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Solo proceder si el estado de la sesión es autenticado
    if (status === "authenticated" && session?.user?.token) {
      const token = session.user.token;
      
      // Realizar la llamada a la API de forma secuencial usando Promises
      accountAPI.getMyAccount(token)
        .then(accountData => {
          return userApi.getUserData(token, accountData.user_id)
            .then(userData => {
              setUser({
                firstname: userData.firstname,
                lastname: userData.lastname,
                token: token,
                user_id: accountData.user_id,
                account_id: accountData.id
              });
            });
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Si no está autenticado, simplemente detener la carga
      setLoading(false);
    }
  }, [session, status]);

  if (loading) {
    return <div>Loading...</div>; // O puedes retornar un componente de carga
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(){
  return useContext(UserContext);
}