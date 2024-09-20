import { NextRequest, NextResponse } from "next/server";

// Este endpoint es un POST para crear un nuevo usuario
export const POST = async (req: NextRequest) => {
  const userData = await req.json();
  //const data: SignupFormData = await req.json(); --- esta es la forma de tipar para Typescript
  const { passwordConfirmed, ...data } = userData;

  try{
  const results = await fetch(`https://digitalmoney.digitalhouse.com/api/users`,{ 
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