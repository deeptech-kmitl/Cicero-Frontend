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
    } 
  }
  return NextResponse.next();
}
