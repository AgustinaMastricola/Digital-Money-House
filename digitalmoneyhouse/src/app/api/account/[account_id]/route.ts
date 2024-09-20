import { NextRequest, NextResponse } from "next/server";
// Este endpoint actualiza los datos de la cuenta del usuario
interface Params {
  account_id: string;
}
const URL_BACK = process.env.API_URL_BACK_END

export const PATCH = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const account = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("API token is not provided");
    return NextResponse.json({ error: "API token is not provided" }, { status: 401 });
  }
  try{
  const results = await fetch(`${URL_BACK}accounts/${id}`,{ 
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(account)
  }
  ) 
  const myAccount = await results.json();
  return NextResponse.json(myAccount);
  }
  catch (error) {
    console.error("Error fetching account data:", error);
    return NextResponse.json({ error: "Error fetching account data" }, { status: 500 });
  }
}