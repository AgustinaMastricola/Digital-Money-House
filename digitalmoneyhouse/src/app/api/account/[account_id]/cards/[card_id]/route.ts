import { NextRequest, NextResponse } from "next/server";

//Este endpoint tiene un GET para obtener una sola tarjeta y un DELETE para eliminarla
interface Params {
  account_id: string;
  card_id: string;
}

export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const account_id = params.account_id;
  const card_id = params.card_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  try{
    const response = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards/${card_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    if (!response.ok) {
      // Manejo de errores HTTP
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${response.status}: ${errorText}` }, { status: response.status });
    }
    const text = await response.text();
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

export const DELETE = async (req: NextRequest, {params} : {params: Params}) => {
  const account_id = params.account_id;
  const card_id = params.card_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token " }, { status: 401 });
  }
  try{
    await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/cards/${card_id}`,{ 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    }) 
  }
  catch (error) {
    console.error("Error al eliminar la tarjeta: ", error);
    return NextResponse.json({ error:"Error al eliminar la tarjeta: "}, { status: 500 });
  }
}