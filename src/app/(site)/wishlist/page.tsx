import React from "react";
import Wish from "@/components/wish/wish";
import { decodeCookie } from "@/lib/utils";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";

type Props = {};

const Wishlist = (props: Props) => {
  const token = cookies().get("token")?.value!;
	const user_cookie = cookies().get("user")?.value!;
	const user = user_cookie ? decodeCookie(user_cookie) : null;
	const queryClient  = new QueryClient();
  if (!user){
		return ( <div> Please sign in to view your wishlist</div>)
	}
  return (
    <div className="w-full h-[750px] mt-[60px] flex justify-center">
      {/* Block */}
      <div className="w-[1320px] h-[750px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
       <Wish token={token} user_id={user.id}></Wish>
       </HydrationBoundary>
      </div>
    </div>
  );
};

export default Wishlist;
