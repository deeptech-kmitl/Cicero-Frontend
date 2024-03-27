import React from "react";
import { cookies } from "next/headers";
import { decodeCookie, isResponseError } from "@/lib/utils";
import { IUser } from "@/constants";
import destr from "destr";
import ProductContent from "@/components/productDetail/ProductContent";
import { getDetailsProduct } from "@/api-caller";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const token = cookies().get("token")?.value || "";
  const user_cookie = cookies().get("user")?.value!;
  const user_id = user_cookie ? destr<IUser>(decodeCookie(user_cookie)).id : "";
  try {
    const product = await getDetailsProduct(params.productId);
    return (
      <div className="w-full mt-[80px] flex justify-center">
        <ProductContent tokenId={token} user_id={user_id} data={product} />
      </div>
    );
  } catch (err) {
    if (isResponseError(err)) {
      return <div>{err.message}</div>;
    }
  }
};

export default ProductDetails;
