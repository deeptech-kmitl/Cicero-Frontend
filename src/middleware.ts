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
    console.log("have token");
    if (request.nextUrl.pathname === "/auth") {
      console.log("auth redirect to /");
      return NextResponse.redirect(new URL("/", request.url));
    } else if (request.nextUrl.pathname === "/signout") {
      console.log("signout redirect to /");
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
  console.log("middleware end");
  return NextResponse.next();
}
