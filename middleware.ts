import { NextResponse, type NextRequest } from "next/server";

// Set this to false when the website is ready to be public again.
const MAINTENANCE_MODE = true;

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE && request.nextUrl.pathname !== "/maintenance") {
    return NextResponse.rewrite(new URL("/maintenance", request.url), {
      status: 503,
      headers: {
        "Retry-After": "3600"
      }
    });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"]
};
