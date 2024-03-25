import React from "react";
import Productde from "@/components/productde/prode";
import { decodeCookie } from "@/lib/utils";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";

type Props = {};

const ProductDetails = (props: Props) => {
  const token = cookies().get("token")?.value!;
	const user_cookie = cookies().get("user")?.value!;
	const user = user_cookie ? decodeCookie(user_cookie) : null;
	const queryClient  = new QueryClient();

  return (
    <div className="w-full h-[750px] mt-[80px] flex justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {" "}
        <Productde></Productde>
      </HydrationBoundary>
    </div>
  );
};

export default ProductDetails;
