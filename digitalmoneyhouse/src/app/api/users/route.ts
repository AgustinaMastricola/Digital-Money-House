import { NextRequest, NextResponse } from "next/server";
const URL_BACK = process.env.API_URL_BACK_END

// Este endpoint es un POST para crear un nuevo usuario
export const POST = async (req: NextRequest) => {
  const userData = await req.json();
  //const data: SignupFormData = await req.json(); --- esta es la forma de tipar para Typescript
  const { passwordConfirmed, ...data } = userData;

  try{
  const results = await fetch(`${URL_BACK}users`,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }
  ) 
  const user = await results.json();
  return NextResponse.json(user);
  }
  catch (error) {
    console.error("Error al registrar el usuario: ", error);
    return NextResponse.json({ error:"Error al registrar el usuario: "}, { status: 500 });
  }
}