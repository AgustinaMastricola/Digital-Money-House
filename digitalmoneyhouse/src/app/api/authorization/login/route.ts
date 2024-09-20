import { NextRequest, NextResponse } from "next/server";
const API_BACK_URL = process.env.NEXT_PUBLIC_API_BACK_END
//Este endpoint tiene un POST para el inicio de sesion del usuario
export const POST = async (req: NextRequest) => {
  const loginData = await req.json();
  //const data: SignupFormData = await req.json(); --- esta es la forma de tipar para Typescript

  try{
    const results = await fetch(`${API_BACK_URL}api/login`,{ 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }) 
    if (!results.ok) {
      console.error("Error al iniciar sesion: ", results.statusText);
      return NextResponse.json({ error:"Error al iniciar sesion: "}, { status: 500 });
    }

    const token = await results.json();
    return NextResponse.json(token);
  } catch (error) {
    console.error("Error al iniciar sesion: ", error);
    return NextResponse.json({ error:"Error al iniciar sesion: "}, { status: 500 });
  }
}