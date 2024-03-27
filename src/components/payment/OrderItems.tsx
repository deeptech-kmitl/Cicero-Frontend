import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { OrderItem } from "@/constants/type";
import { formatPrice } from "@/lib/utils";

const OrderItems = ({ image, title, price, size, qty }: OrderItem) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b border-[#C4C4C4]">
      <Image src={image} sizes="100vw" alt={"xd"} width={100} height={100} />
      <div className="w-full space-y-4">
        <p className="font-bold">{title}</p>
        <Button
          variant={"noFillbtn"}
          className="w-14 h-10 disabled:opacity-100 font-medium"
          disabled
        >
          {size}
        </Button>
        <p className="space-x-2">
          <span className="font-semibold">{formatPrice(price)}</span>
          <span className="inline-block"> THB x {qty}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderItems;
