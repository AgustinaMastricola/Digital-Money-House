import { NextRequest, NextResponse } from "next/server";

//Este endpoint tiene un GET para obtener una lista de transferencias y un POST para crear una nueva transferencia
interface Params {
  account_id: string;
}
const URL_BACK = process.env.API_URL_BACK_END

export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  try{
    const transferencesList = await fetch(`${URL_BACK}accounts/${id}/transferences`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    if (!transferencesList.ok) {
      // Manejo de errores HTTP
      const errorText = await transferencesList.text();
      console.error(`Error ${transferencesList.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${transferencesList.status}: ${errorText}` }, { status: transferencesList.status });
    }
    const text = await transferencesList.text();
    if (!text) {
      console.error("Respuesta vacía de la API");
      return NextResponse.json({ error: "Respuesta vacía de la API" }, { status: 500 });
    }
    
    const data = JSON.parse(text);
    return NextResponse.json(data);

  } catch (error) {
    console.error("Error al conseguir los datos: ", error);
    return NextResponse.json({ error: "Error al conseguir los datos: " }, { status: 500 });
  }
}
export const POST = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const transferenceData = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token " }, { status: 401 });
  }
  try{
  const results = await fetch(`${URL_BACK}accounts/${id}/transferences`,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(transferenceData)
  }
  ) 
  const card = await results.json();
  return NextResponse.json(card);
  }
  catch (error) {
    console.error("Error al realizar la transferencia: ", error);
    return NextResponse.json({ error:"Error al realizar la transferencia: "}, { status: 500 });
  }
}