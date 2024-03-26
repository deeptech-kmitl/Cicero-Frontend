import React from "react";
import destr from "destr";
import { cookies } from "next/headers";
import { decodeCookie } from "@/lib/utils";
import { IUser } from "@/constants";
import { BrowseProduct } from "@/components/product/BrowseProduct";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const token = cookies().get("token")?.value || "";
  const user_cookie = cookies().get("user")?.value!;
  const user_id = user_cookie ? destr<IUser>(decodeCookie(user_cookie)).id : "";
  return <BrowseProduct tokenId={token} user_id={user_id} params={params} />;
};

export default ProductDetails;
