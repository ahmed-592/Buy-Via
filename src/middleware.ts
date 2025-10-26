

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedPages = ['/profile', '/wishlist', '/cart' , '/checkout']; 
const protectedAuth = ['/login', '/register']; 

export default async function middleware(req: NextRequest) {


    const token = await getToken({ req, secret: process.env.NextAUTH_SECRET });
    console.log("Token: ", token);


    if (protectedPages.includes(req.nextUrl.pathname)) {
        if (token) {
            return NextResponse.next();
        } else {
            const redirectUrl = new URL('/login', process.env.NEXTAUTH_URL);
            redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
            return NextResponse.redirect(redirectUrl);
        }
    }


    if (protectedAuth.includes(req.nextUrl.pathname)) {
        if (!token) {
            return NextResponse.next();
        } else {
            const redirectUrl = new URL('/', process.env.NEXTAUTH_URL);
            return NextResponse.redirect(redirectUrl);
        }
    }

    return NextResponse.next();

}