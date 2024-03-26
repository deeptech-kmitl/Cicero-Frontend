"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { DetailsProps } from "./type";
import useDetailsStore from "@/store/prode";
import { useStore } from "zustand";
import { CartItemProps } from "@/components/cart/type";
import useCartStore from "@/store/cart";

const ProductDe = ({
  images,
  product_title,
  product_desc,
  id,
  product_price,
  token,
  user_id,
}: DetailsProps & { token: string; user_id: string }) => {
  // const productStore = useStore(useDetailsStore);
  // const product = productStore.details;
  const CartStore = useStore(useCartStore);
  const cart = CartStore.cart;
  return (
    <>
      <div className="w-[75px] h-[100px] bg-slate-300">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            width={450}
            height={500}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="w-[300px] h-[750px] ml-[100px] overflow-scroll">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            width={300}
            height={250}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="w-[300px] h-[450px] ml-[60px]">
        <h1 className="font-bold	text-[25px]">{product_title}</h1>
        <h3 className="text-[25px]">
          {product_price} <span className="text-[15px] opacity-50">THB</span>
        </h3>
        <div className="w-full h-[150px] mt-[10px] overflow-scroll">
          <p>{product_desc}</p>
        </div>
        <h1 className="font-bold	text-[20px] mt-[15px]">SIZE</h1>
        <div className="w-[200px] h-[100px] grid grid-cols-3 gap-x-0.5	">
          <Button className="w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]">
            XS
          </Button>
          <Button className="w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]">
            S
          </Button>
          <Button className="w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]">
            M
          </Button>
          <Button className="w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]">
            L
          </Button>
          <Button className="w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]">
            XL
          </Button>
        </div>
        <Button
          className="bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black"
          onClick={async () => {
            CartStore.addToCart({
              user_id,
              token: token,
              item: {
                id: "P000005",
                product_title: "T-shirt",
                product_price: 19.99,
                product_desc: "Casual cotton t-shirt for everyday wear",
                images: [
                  {
                    id: "d69b3263-7d95-44f5-a617-cfe9558ea7e8",
                    url: "https://example.com/t-shirt.jpg",
                    filename: "t-shirt.jpg",
                  },
                ],
                qty: 1,
                size: "XL",
              },
            });
          }}
        >
          ADD TO CART
        </Button>
        <Button className="bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
          ADD TO WISHLIST
        </Button>
      </div>
    </>
  );
};

export default ProductDe;
