import { NextRequest, NextResponse } from "next/server";
interface Params {
  account_id: string;
}
//Este endpoint tiene un POST para crear un nuevo deposito
const URL_BACK = process.env.API_URL_BACK_END

export const POST = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const depositData = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token " }, { status: 401 });
  }
  try{
  const results = await fetch(`${URL_BACK}accounts/${id}/deposits`,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(depositData)
  }
  ) 
  const card = await results.json();
  return NextResponse.json(card);
  }
  catch (error) {
    console.error("Error al realizar el deposito: ", error);
    return NextResponse.json({ error:"Error al realizar el deposito: "}, { status: 500 });
  }
}