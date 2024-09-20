//Este endpoint crea una nueva transaccion en la cuenta del usuario

import { NextRequest, NextResponse } from "next/server";

interface Params {
  account_id: string;
}

export const POST = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const transactionData = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token " }, { status: 401 });
  }
  try{
  const results = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${id}/transactions`,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(transactionData)
  }
  ) 
  const transaction = await results.json();
  return NextResponse.json(transaction);
  }
  catch (error) {
    console.error("Error al realizar la transaccion: ", error);
    return NextResponse.json({ error:"Error al realizar la transaccion: "}, { status: 500 });
  }
}