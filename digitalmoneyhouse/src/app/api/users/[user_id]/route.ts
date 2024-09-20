import { NextRequest, NextResponse } from "next/server";
interface Params {
  user_id: string;
}
const URL_BACK = process.env.API_URL_BACK_END

//Este endpoint tiene un GET para obtener los datos del usuario y un PATCH para actualizarlos
export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const user_id = params.user_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  try{
    const response = await fetch(`${URL_BACK}users/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
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
    console.error("Error al encontrar el usuario: ", error);
    return NextResponse.json({ error: "Error al encontrar el usuario: " }, { status: 500 });
  }
}
export const PATCH = async (req: NextRequest, {params} : {params: Params}) => {
  const user_id = params.user_id;
  const userData = await req.json();
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("API token is not provided");
    return NextResponse.json({ error: "API token is not provided" }, { status: 401 });
  }
  try{
  const results = await fetch(`${URL_BACK}users/${user_id}`,{ 
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization : token
    },
    body: JSON.stringify(userData)
  }
  ) 
  const myAccount = await results.json();
  return NextResponse.json(myAccount);
  }
  catch (error) {
    console.error("Error al modificar los datos del usuario: ", error);
    return NextResponse.json({ error: "Error al modificar los datos del usuario: " }, { status: 500 });
  }
}