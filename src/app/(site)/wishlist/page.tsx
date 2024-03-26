import React from "react";
import Wish from "@/components/wish/wish";
import { decodeCookie } from "@/lib/utils";
import { cookies } from "next/headers";
import { IUser } from "@/constants";
import destr from "destr";
import { withStyles } from "@mui/material";
import getWishlist from "@/api-caller/wishlist";

type Props = {};

const Wishlist = async (props: Props) => {
  const token = cookies().get("token")?.value!;
	const user_cookie = cookies().get("user")?.value!;
  const user_id = user_cookie ? destr<IUser>(decodeCookie(user_cookie)).id : "";

    const wish =  await getWishlist({token, user_id});
  return (
    <div className="w-full h-[750px] mt-[60px] flex justify-center">
      {/* Block */}
      <div className="w-[1320px] h-[750px]">
       <Wish token={token} user_id={user_id} items={wish}></Wish>
      </div>
    </div>
  );
};

export default Wishlist;
