"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/api-caller";
import { IProduct } from "@/constants";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <div>
      <div className="flex h-full justify-center flex-col items-center p-10">
        <div className="w-[1350px] flex justify-center flex-col items-center">
          <div className="h-[28rem] w-full bg-gray-200 flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220484754449760337/image_25_2.png?ex=660f1c00&is=65fca700&hm=5ba1ca26f5524fb32adb1aed600769bc01cfebd8ceb77f78d0c98cac3f567f7f&')] bg-cover">
            <div className="text-[12rem] font-extrabold text-white tracking-[0.2em] opacity-50 cursor-default">
              CICERO
            </div>
          </div>
          <div className="flex flex-row w-full mt-7 gap-3">
            <div
              className="w-full h-max flex justify-center items-center overflow-hidden cursor-pointer relative"
              onClick={() => router.push("/product/women")}
            >
              <img
                className="w-full transition-all hover:scale-[1.1]"
                src="https://i.ibb.co/6N7Z1qz/Rectangle-7.png"
              />
              <Button
                variant="blackbtn"
                className="h-[20%] w-[30%] text-[85%] bg-black text-center text-white flex justify-center items-center absolute"
              >
                FOR WOMEN
              </Button>
            </div>
            <div
              className="w-full h-max flex justify-center items-center overflow-hidden cursor-pointer relative"
              onClick={() => router.push("/product/men")}
            >
              <img
                className="w-full transition-all hover:scale-[1.1]"
                src="https://i.ibb.co/dM68xRs/image-30.png"
              />
              <Button
                variant="blackbtn"
                className="h-[20%] w-[30%] text-[85%] bg-black text-center text-white flex justify-center items-center absolute"
              >
                FOR MEN
              </Button>
            </div>
            <div
              className="w-full h-max flex justify-center items-center overflow-hidden cursor-pointer relative"
              onClick={() => router.push("/product/kids")}
            >
              <img
                className="w-full transition-all hover:scale-[1.1]"
                src="https://i.ibb.co/QK3PZdn/Rectangle-4.png"
              />
              <Button
                variant="blackbtn"
                className="h-[20%] w-[30%] text-[85%] bg-black text-center text-white flex justify-center items-center absolute"
              >
                FOR KIDS
              </Button>
            </div>
          </div>
          <div className="w-full mt-7 flex justify-center items-center">
            <div className="flex flex-row w-full gap-4">
              {products.slice(0, 5).map((item: IProduct, index: number) => {
                return (
                  <ProductCard key={index} data={item} tokenId="" user_id="" />
                );
              })}
            </div>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486972800372846/bg1.png?ex=660f1e11&is=65fca911&hm=4c1537e806e2d9fc79ce124b8bc8ef6d30084ca6f2acf12adc2c3743730dc7b8&')] bg-cover flex justify-end p-6">
            <Button
              variant="blackbtn"
              className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab bg-black"
              onClick={() => router.push("/product/women")}
            >
              BUY NOW
            </Button>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486971999391764/bg2.png?ex=660f1e11&is=65fca911&hm=91b001b2cf346c66897cf3404dbb900d2423ea06f5280261a39981d62796b02e&')] bg-cover flex justify-end p-6">
            <Button
              variant="blackbtn"
              className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab bg-black"
              onClick={() => router.push("/product/men")}
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
