"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Cross, Loader2, Minus, Plus, X } from "lucide-react";
import { Separator } from "@radix-ui/react-menubar";
import { cn, formatPrice } from "@/lib/utils";
import { CartItemProps } from "./type";
import { useStore } from "zustand";
import SizeButton from "./SizeButton";
import {
  addToCart,
  decreaseQty,
  getCartItems,
  increaseQty,
  removeFromCart,
} from "@/api-caller/cart";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import { IFormattedErrorResponse } from "@/constants";
import { userCred } from "@/constants/type";
import CartFooter from "./CartFooter";
import Link from "next/link";

const CartItem = ({
  images,
  product_title,
  id,
  product_desc,
  size,
  product_price,
  qty,
  token,
  user_id,
  cart_id,
}: CartItemProps & { token: string; user_id: string }) => {
  const queryClient = useQueryClient();
  const removeCartMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    userCred & { cart_id: string }
  > = useMutation(removeFromCart);
  const increaseQtyMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    userCred & { cart_id: string }
  > = useMutation(increaseQty);
  const decreaseQtyMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    userCred & { cart_id: string }
  > = useMutation(decreaseQty);
  return (
    <div className="grid grid-cols-8 gap-6 gap-y-8 p-5">
      <p
        className="w-fit border-t border-b border-[#C4C4C4] p-2 font-light text-5xl self-center cursor-pointer"
        onClick={() =>
          removeCartMutation.mutate(
            { user_id, token, cart_id },
            {
              onSuccess: () => queryClient.invalidateQueries("cart"),
            }
          )
        }
      >
        X
      </p>
      <Link
        className="col-span-3 min-h-[500px] h-[500px]"
        href={`/productdetails/${id}`}
      >
        <Image
          src={images[0].url}
          className="w-full h-full"
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>

      <div className=" w-[70%] col-span-3 grid content-between">
        <div>
          <p className="text-lg font-bold">{product_title}</p>
          <p className="line-clamp-6 mt-[5%] mb-[10%] text-slate-500">
            {product_desc}
          </p>
        </div>
        <div className="flex flex-col pt-5 pb-10">
          <p className="font-bold mb-3 Copper">SELECT YOUR SIZE</p>
          <div className="w-[250px] h-[100px] grid grid-cols-3 gap-x-2">
            <SizeButton
              id={id}
              product_size={size}
              user_id={user_id}
              token={token}
            />
          </div>
        </div>
      </div>
      <div className="grid relative col-span-1 justify-center content-between">
        <div className=" space-y-1">
          <div className="flex gap-5 items-center">
            <Button
              className={cn(
                "p-1 text-black bg-white border border-[#C4C4C4] cursor-pointer w-7 h-7 rounded-full hover:text-white hover:bg-black"
              )}
              disabled={qty === 1}
              onClick={() =>
                decreaseQtyMutation.mutate(
                  { user_id, token, cart_id },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries("cart");
                    },
                  }
                )
              }
            >
              <Minus />
            </Button>
            <p className="text-2xl font-bold">{qty}</p>
            <Button
              className={cn(
                "p-1 text-black bg-white border border-[#C4C4C4] cursor-pointer w-7 h-7 rounded-full hover:text-white hover:bg-black"
              )}
              onClick={() =>
                increaseQtyMutation.mutate(
                  { user_id, token, cart_id },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries("cart");
                    },
                  }
                )
              }
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl">
            <span className="font-semibold">
              {formatPrice(parseFloat((product_price * qty).toFixed(2)))}
            </span>
            <span className="text-base text-slate-400"> THB</span>
          </p>
        </div>
      </div>
      <Separator className="col-span-full  w-full h-[1px] bg-black" />
    </div>
  );
};

export type RenderCartProps = {
  token: string;
  user_id: string;
};
const RenderCart = ({ token, user_id }: RenderCartProps) => {
  const {
    isLoading,
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
  if (error)
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-2xl font-bold text-center">
          Something went wrong {error.message}
        </p>
      </div>
    );
  return (
    <>
      {cart && cart.length == 0 ? (
        <div className="flex min-h-[250px] justify-center items-center">
          <p className="text-2xl font-bold text-center">Your cart is empty</p>
        </div>
      ) : (
        cart &&
        cart.map((item, i) => (
          <CartItem
            key={i}
            {...item}
            images={item.images}
            token={token}
            user_id={user_id}
          />
        ))
      )}
      {cart && <CartFooter cart={cart} />}
    </>
  );
};

export default RenderCart;
