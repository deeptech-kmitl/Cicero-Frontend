import { Button } from "@nextui-org/react";
import React from "react";

type Props = {};

const myPurchase = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col px-[20%] py-[5%]">
      <div className="text-xl font-semibold mb-10">MY PURCHASE</div>
      <div className="w-8/9 h-[15em] bg-gray-500 mb-5"></div>
      <div className="w-8/9 h-[15em] bg-gray-500 mb-5"></div>
    </div>
  );
};

export default myPurchase;
