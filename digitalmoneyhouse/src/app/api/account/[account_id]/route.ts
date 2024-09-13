import { NextRequest, NextResponse } from "next/server";

interface Params {
  account_id: string;
}

export const PATCH = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const account = await req.json();
  const results = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${id}`,{ 
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjUxNSIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiZXhwIjoxNzI2MjY2Mzg0fQ.QJpaPS4lUaXAB0lHd9oW9dFqTEaxmIZrNqOPIpZbxB8`
    },
    body: JSON.stringify(account)
  }
  ) 
  const myAccount = await results.json();
  return NextResponse.json(myAccount);
}