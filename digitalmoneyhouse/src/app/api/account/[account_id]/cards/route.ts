import { NextRequest, NextResponse } from "next/server";

// Este endpoint tiene un GET para obtener la lista de todas las tarjetas y un POST para crear una nueva tarjeta
interface Params {
  account_id: string;
}

export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const id = params.account_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  try{
    const cardsList = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${id}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    if (!cardsList.ok) {
      // Manejo de errores HTTP
      const errorText = await cardsList.text();
      console.error(`Error ${cardsList.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${cardsList.status}: ${errorText}` }, { status: cardsList.status });
    }
    const text = await cardsList.text();
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
  const cardData = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token " }, { status: 401 });
  }
  try{
  const results = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${id}/cards`,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(cardData)
  }
  ) 
  const card = await results.json();
  return NextResponse.json(card);
  }
  catch (error) {
    console.error("Error al crear la tarjeta: ", error);
    return NextResponse.json({ error:"Error al crear la tarjeta: "}, { status: 500 });
  }
}