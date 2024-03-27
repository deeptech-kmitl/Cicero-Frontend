import React from "react";
import Wish from "@/components/wish/wish";
import { decodeCookie } from "@/lib/utils";
import { cookies } from "next/headers";
import { IUser } from "@/constants";
import destr from "destr";

const Wishlist = async () => {
  const token = cookies().get("token")?.value!;
  const user_cookie = cookies().get("user")?.value!;
  const user_id = user_cookie ? destr<IUser>(decodeCookie(user_cookie)).id : "";

  return (
    <div className="w-full h-full mt-[60px] flex justify-center">
      <div className="w-full h-full flex flex-col justify-center">
        <Wish token={token} user_id={user_id} />
      </div>
    </div>
  );
};

export default Wishlist;
