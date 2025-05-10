import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  const authPages = ["/login", "/signup"];

  if (authPages.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (pathname === "/") {
    return token
      ? NextResponse.redirect(new URL("/home", request.url))
      : NextResponse.redirect(new URL("/login", request.url));
  }

  const isProtected = pathname.startsWith("/home");

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/login", "/signup"],
};
