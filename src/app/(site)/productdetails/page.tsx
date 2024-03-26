import React from "react";
import Productde from "@/components/productde/prode";
import { decodeCookie } from "@/lib/utils";
import { cookies } from "next/headers";
import { IUser } from "@/constants";
import destr from "destr";

type Props = {};

const ProductDetails = (props: Props) => {
  const token = cookies().get("token")?.value!;
	const user_cookie = cookies().get("user")?.value!;
	const user = user_cookie ? destr<IUser>(decodeCookie(user_cookie)) : null;

  return (
    <div className="w-full h-[750px] mt-[80px] flex justify-center">
        {" "}
        <Productde token={token} user_id={user.id}></Productde>
    </div>
  );
};

export default ProductDetails;
