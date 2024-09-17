'use client'
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import { UserContextType } from "@/types/users.types";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Definir el contexto
const UserContext = createContext<UserContextType>({
  firstname: '',
  lastname: '',
  email: '',
  dni: -1,
  phone: '',
  token: ''
});

export default function UserProvider({children}:{children: React.ReactNode}) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserContextType>({
    firstname: '',
    lastname: '',
    email: '',
    dni: -1,
    phone: '',
    token: ''
  });
  useEffect(() => {
    if (status === "authenticated" && session?.user?.token) {
      const token = session.user.token;
      accountAPI.getMyAccount(`${token}`)
      .then(accountData => {
        userApi.getUserData(`${token}`, accountData.user_id)
        .then( userData => {
          setUser({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            dni: userData.dni,
            phone: userData.phone,
            token: token
          });
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        })
      })      
    }
  }, [session]);

  const value = useMemo(() => 
    ({
      firstname: user.firstname,
      lastname: user.lastname,
      token: user.token,
      email: user.email,
      dni: user.dni,
      phone: user.phone
    }), [user])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(){
  return useContext(UserContext);
}