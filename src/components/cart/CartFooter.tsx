"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { CartItemProps } from "./type";
import { formatPrice } from "@/lib/utils";

type Props = {
  cart: CartItemProps[];
};

const CartFooter = ({ cart }: Props) => {
  const { toast } = useToast();
  return (
    <div className="flex p-5 justify-between items-center w-[100%] Franc">
      <div className="flex space-x-4 font-bold text-2xl">
        <p>SUBTOTAL</p>
        <p>
          {formatPrice(
            cart.reduce(
              (price, item) => price + item.product_price * item.qty,
              0
            )
          )}
          THB
        </p>
      </div>
      <div className="flex space-x-4">
        <Button variant="noFillbtn">CONTINUE SHOPPING</Button>
        <Link
          href={cart.length === 0 ? "" : "/payment"}
          onClick={() => {
            if (cart.length === 0) {
              toast({
                title: "Please add item to cart first!",
                variant: "destructive",
                duration: 2000,
              });
            }
          }}
        >
          <Button variant="blackbtn">CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartFooter;
