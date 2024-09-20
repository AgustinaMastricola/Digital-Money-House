import { NextRequest, NextResponse } from "next/server";
interface Params {
  transaction_id: string;
  account_id: string;
}
const URL_BACK = process.env.API_URL_BACK_END

//Este endpoint busca una transaccion especifica en la cuenta del usuario
export const GET = async (req: NextRequest, {params} : {params: Params}) => {
  const transaction_id = params.transaction_id;
  const account_id = params.account_id;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  try{
    const response = await fetch(`${URL_BACK}accounts/${account_id}/transactions/${transaction_id}`, {
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
    console.error("Error al encontrar la transaccion: ", error);
    return NextResponse.json({ error: "Error al encontrar la transaccion: " }, { status: 500 });
  }
}