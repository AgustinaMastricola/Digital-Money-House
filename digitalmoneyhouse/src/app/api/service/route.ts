import { NextRequest, NextResponse } from "next/server";

//Este endpoint devuelve una lista de servicios que se pueden pagar con la cuenta del usuario

export const GET = async () => {

  try{
    const servicesList = await fetch(`https://digitalmoney.digitalhouse.com/api/sevice`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (!servicesList.ok) {
      // Manejo de errores HTTP
      const errorText = await servicesList.text();
      console.error(`Error ${servicesList.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${servicesList.status}: ${errorText}` }, { status: servicesList.status });
    }
    const text = await servicesList.text();
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