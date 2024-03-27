"use client";
import React from "react";
import OrderItems from "./OrderItems";
import { Separator } from "../ui/separator";
import { OrderItem, userCred } from "@/constants/type";
import { Loader2 } from "lucide-react";
import { getCartItems } from "@/api-caller";
import { useQuery } from "react-query";
import { CartItemProps } from "../cart/type";
import { formatPrice } from "@/lib/utils";

// type OrderProps = {
// 	orders : OrderItem[]
// };

const OrderSummary = ({ user_id, token }: userCred) => {
  const {
    isLoading,
    isError,
    data: cart,
    error,
  } = useQuery<CartItemProps[], Error>("cart", () =>
    getCartItems({ token, user_id })
  );
  if (isLoading)
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <div className="w-2/5 h-fit border border-[#C4C4C4]">
      <h1 className="text-2xl font-bold p-4 Franc">ORDER SUMMARY</h1>
      <Separator />
      <div className="max-h-[500px] divide-y overflow-auto">
        {cart?.map((order, i) => (
          <OrderItems
            key={i}
            image={order.images[0].url}
            title={order.product_title}
            price={order.product_price}
            size={order.size}
            qty={order.qty}
          />
        ))}
      </div>
      <div className="p-5 Franc space-y-2">
        <div className="font-bold grid grid-cols-2">
          <p className="text-left">TOTAL PRODUCT</p>
          <p className="text-right space-x-2">
            <span>
              {formatPrice(
                cart?.reduce(
                  (prev, order) => prev + order.product_price * order.qty,
                  0
                )
              )}
            </span>
            <span>THB</span>
          </p>
        </div>
        <div className="font-bold grid grid-cols-2">
          <p className="text-left ">SHIPPING</p>
          <p className="text-right">FREE</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
