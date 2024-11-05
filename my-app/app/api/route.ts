import { NextRequest, NextResponse } from 'next/server';
export async function GET(): Promise<NextResponse> {
    return NextResponse.json({});
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    const data = await request.json();
    return NextResponse.json({ message: "Data received", data });
}