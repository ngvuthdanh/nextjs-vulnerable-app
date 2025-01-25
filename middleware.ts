import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    if (req.headers.get('x-middleware-prefetch') === '1') {
        return new Response(null, { status: 200 });
    }
    return NextResponse.next();
}
