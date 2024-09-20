import { NextRequest, NextResponse } from "next/server";
interface Params {
  service_id: string;
}
//Este endpoint tiene un GET que devuelve un servicio en especifico, y un GET que busca un servicio por query params

export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const service_id = params.service_id;
  const query = req.nextUrl.searchParams;

  try{
    let url = `https://digitalmoney.digitalhouse.com/api/service/${service_id}`;
    if (query){
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      // Manejo de errores HTTP
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${response.status}: ${errorText}` }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al encontrar el servicio: ", error);
    return NextResponse.json({ error: "Error al encontrar el servicio: " }, { status: 500 });
  }
}
