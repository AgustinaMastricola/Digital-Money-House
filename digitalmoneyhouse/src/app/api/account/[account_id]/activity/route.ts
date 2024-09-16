import {NextRequest, NextResponse} from "next/server";
// Este endpoint devuelve las actividades de la cuenta del usuario

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
    const activitiesList = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${id}/activity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
      },
    })
    if (!activitiesList.ok) {
      // Manejo de errores HTTP
      const errorText = await activitiesList.text();
      console.error(`Error ${activitiesList.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${activitiesList.status}: ${errorText}` }, { status: activitiesList.status });
    }
    const text = await activitiesList.text();
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