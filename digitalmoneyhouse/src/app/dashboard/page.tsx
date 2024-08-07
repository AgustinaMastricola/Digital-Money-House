'use client'
import NavbarDashboard from "@/components/navbar/NavbarDashboard";
import { AccountData } from "@/types/account.types";
import { useSession } from "next-auth/react";
import { useState } from "react";

const DashboardPage = () => {
  const {data: session, status} = useSession();
  const [userAccount, setUserAccount] = useState<AccountData>()

  const getAccount = async () => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${session?.user?.token}`
      }
    })
    const data = await res.json()
    setUserAccount(data)
    console.log(data)
  }

  return (
    <main>
      <NavbarDashboard firstname={'Agustina'} lastname="Mastricola"/>
      
      <h1>
        DashboardPage
      </h1>
      <pre>
        <code>
          {JSON.stringify(session, null, 3)}
        </code>
        <code>
          {JSON.stringify(userAccount, null, 3)}
        </code>
      </pre>
      <p>
        {userAccount?.id}
      </p>
      <button onClick={getAccount}>ver cuenta</button>
    </main>
  )
}

export default DashboardPage;