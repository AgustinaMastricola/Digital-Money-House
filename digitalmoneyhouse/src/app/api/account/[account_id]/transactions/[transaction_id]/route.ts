import { NextRequest, NextResponse } from "next/server";

interface Params {
  transaction_id: number;
  account_id: number;
}

const URL_BACK = process.env.API_URL_BACK_END;

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { transaction_id, account_id } = params;
  const token = req.headers.get('Authorization');

  if (!token) {
    console.error("No se obtuvo un Token");
    return NextResponse.json({ error: "No se obtuvo un Token" }, { status: 401 });
  }

  if (!transaction_id || !account_id) {
    console.error("Faltan parámetros en la URL");
    return NextResponse.json({ error: "Faltan parámetros en la URL" }, { status: 400 });
  }

  try {
    const response = await fetch(`${URL_BACK}accounts/${account_id}/transactions/${transaction_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${errorText}`);
      return NextResponse.json({ error: `Error ${response.status}: ${errorText}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al encontrar la transaccion: ", error);
    return NextResponse.json({ error: "Error al encontrar la transaccion" }, { status: 500 });
  }
};