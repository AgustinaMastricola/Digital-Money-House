import { NextRequest, NextResponse } from 'next/server';
import userApi from '@/services/users/user.service';
import { SignupFormData } from '@/types/formData.types';

export async function POST(req: NextRequest) {
    const data: SignupFormData = await req.json();
    const { passwordConfirmed, ...userData } = data;

    try {
        await userApi.newUser(userData);
        return NextResponse.json({ message: 'Usuario registrado correctamente' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'No se pudo registrar el usuario' }, { status: 500 });
    }
}