import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const tokenId = cookies().get('oauth_id');
    const formData = new FormData();
    if(!tokenId?.value) return NextResponse.error();
    formData.append('oauth_id', tokenId.value);
    const res = await fetch(`${process.env.NEXT_PUBLIC_PROD_URL}/users/signout`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${cookies().get('token')?.value}`,
        },
        body: formData
    });
    const data = await res.json();
    console.log(data, "signout data")
    cookies().delete("oauth_id")
    cookies().delete('user')
    cookies().delete('token')
    if (res.ok){
        return Response.json({message : "Signed out successfully", status: 200});
    }
    else{
        throw new Error("Failed to sign out");
    }
    // return NextResponse.redirect(new URL("/signin", req.url));
}