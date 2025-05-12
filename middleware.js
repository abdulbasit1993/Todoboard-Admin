import { NextResponse } from "next/server";

export function middleware(request) {
  const hasAuthCookie = request.cookies.has("token");

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    console.log("hasAuthCookie ===>>>", hasAuthCookie);
    console.log("pathname is '/'");
    return NextResponse.redirect(
      new URL(hasAuthCookie ? "/home" : "/login", request.url)
    );
  }

  if (pathname.startsWith("/home") && !hasAuthCookie) {
    console.log("hasAuthCookie ===>>>", hasAuthCookie);
    console.log("pathname starts with '/home'");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname === "/login" && hasAuthCookie) {
    console.log("hasAuthCookie ===>>>", hasAuthCookie);
    console.log("pathname is '/login'");
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (pathname === "/signup" && hasAuthCookie) {
    console.log("hasAuthCookie ===>>>", hasAuthCookie);
    console.log("pathname is '/signup'");
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/login", "/signup"],
};
