import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = request.cookies.get("token");
  const authpage = [
    "/profile",
    "/cart",
    "/checkout",
    "/wishlist",
    "/myPurchase",
  ];

  if (token) {
    if (request.nextUrl.pathname === "/auth") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (request.nextUrl.pathname === "/signout") {
      const response = NextResponse.next();
      response.cookies.set("token", "", {
        maxAge: 0,
      });
      response.cookies.set("user", "", {
        maxAge: 0,
      });
      return response;
    }
  }
  return NextResponse.next();
}
