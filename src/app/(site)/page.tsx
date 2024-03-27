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
          <div className="h-[28rem] w-full bg-gray-200 flex justify-center items-center bg-[url('/homepage.png')] bg-cover">
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
                src="/forwomen.png"
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
                src="/formen.png"
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
                src="/forkid.png"
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
          <div className="h-[28rem] w-full mt-5 bg-[url('/women.png')] bg-cover flex justify-end p-6">
            <Button
              variant="blackbtn"
              className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab bg-black"
              onClick={() => router.push("/product/women")}
            >
              BUY NOW
            </Button>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('/men.png')] bg-cover flex justify-end p-6">
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
