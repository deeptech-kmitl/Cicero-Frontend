import React from "react";
import Productde from "@/components/productde/prode";
import { decodeCookie, isResponseError } from "@/lib/utils";
import { cookies } from "next/headers";
import { IFormattedErrorResponse, IUser } from "@/constants";
import destr from "destr";
import getDetailsProduct from "@/api-caller/showdetailsproduct";

const ProductDetails = async ({ params }: { params: { productId: string } }) => {
  const token = cookies().get("token")?.value || "";
	const user_cookie = cookies().get("user")?.value!;
	const user_id = user_cookie ? destr<IUser>(decodeCookie(user_cookie)).id : "";
  try{
    const product =  await getDetailsProduct(params.productId);
    return (
    <div className="w-full h-[750px] mt-[80px] flex justify-center">
        {" "}
        <Productde token={token} user_id={user_id} id={product.id} product_desc={product.product_desc} images={product.images} product_price={product.product_price} product_title={product.product_title}></Productde>
    </div>
  );
  }catch(err){
    if(isResponseError(err)){
        return <div>
          {err.message}
        </div>
    }
  }


};

export default ProductDetails;
