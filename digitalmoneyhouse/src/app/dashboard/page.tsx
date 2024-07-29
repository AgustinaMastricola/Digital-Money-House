'use client'
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const {data: session, status} = useSession();

  const getAccount = async () => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `${session?.user?.token}`
      }
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <h1>
        DashboardPage
      </h1>
      <pre>
        <code>
          {JSON.stringify(session, null, 2)}
        </code>
      </pre>
      <button onClick={getAccount}>ver cuenta</button>
    </div>
  )
}

export default DashboardPage;