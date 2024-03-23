"use client"
import React, { useEffect, useState } from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";
import { getProduct } from "@/api-caller/product";
import { IProduct } from "@/constants";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();

  useEffect(() => {
    getProduct().then((data) => { 
      setProducts(data.data)
      console.log(data.data)
    })
  }, [])

  return (
    <div>
      <div className="flex h-full justify-center flex-col items-center p-10">
        <div className="w-10/12 flex justify-center flex-col items-center">
          <div className="h-[28rem] w-full bg-gray-200 flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220484754449760337/image_25_2.png?ex=660f1c00&is=65fca700&hm=5ba1ca26f5524fb32adb1aed600769bc01cfebd8ceb77f78d0c98cac3f567f7f&')] bg-cover">
            <div className="text-[12rem] font-extrabold text-white tracking-[0.2em] opacity-50 cursor-default">CICERO</div>
          </div>
          <div className="flex flex-row w-full mt-7 gap-2">
              <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/6N7Z1qz/Rectangle-7.png')] bg-cover">
                <Button onClick={() => router.push("/product/women")} className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none ab">
                  FOR WOMEN
                </Button>
              </div>
              <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/dM68xRs/image-30.png')] bg-cover">
                <Button onClick={() => router.push("/product/men")} className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR MEN
                </Button>
              </div>
              <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/QK3PZdn/Rectangle-4.png')] bg-cover">
                <Button onClick={() => router.push("/product/kids")} className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR KIDS
                </Button>
              </div>
          </div>
          <div className="w-full mt-7 flex justify-center items-center">
            <div className="flex flex-row w-full gap-6">
              {products.slice(0, 5).map((item, i) => {
                console.log(item)
                return (
                  <CardHomePage
                    key={i}
                    images={item.images[0].url}
                    product_title={item.product_title}
                    product_price={item.product_price}
                    product_category={item.product_category}
                    product_sex={item.product_sex}
                    product_size={item.product_size}
                    product_color={item.product_color}
                    product_desc={item.product_desc}
                    id={item.id} 
                    product_stock={0}                  
                  />
                );
              })}
            </div>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486972800372846/bg1.png?ex=660f1e11&is=65fca911&hm=4c1537e806e2d9fc79ce124b8bc8ef6d30084ca6f2acf12adc2c3743730dc7b8&')] bg-cover flex justify-end p-6">
            <Button onClick={() => router.push("/product/women")} className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab bg-black">
              BUY NOW
            </Button>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486971999391764/bg2.png?ex=660f1e11&is=65fca911&hm=91b001b2cf346c66897cf3404dbb900d2423ea06f5280261a39981d62796b02e&')] bg-cover flex justify-end p-6">
            <Button onClick={() => router.push("/product/men")} className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab bg-black">
              BUY NOW
            </Button>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Homepage;