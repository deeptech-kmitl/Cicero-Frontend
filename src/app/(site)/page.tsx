"use client";
import React, { useEffect, useState } from "react";
import CardHomePage from "@/components/homePage/card";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/api-caller/product";

type Props = {};

const mockData = [
  {
    image: "https://i.ibb.co/K761dFn/image-38-1.png",
    name: "THE STAR CROP VEST",
    price: "1,590",
    favStatus: false,
    category: "Tops",
    sex: "women",
    size: "S",
    color: "pink",
    productId: "PD123456",
  },
  {
    image: "https://i.ibb.co/SV1dSt1/Rectangle-4225.png",
    name: "THE STAR CROP VEST",
    price: "1,590",
    favStatus: false,
    category: "Tops",
    sex: "women",
    size: "S",
    color: "pink",
    productId: "PD123456",
  },
  {
    image: "https://i.ibb.co/g9rrpst/image-86.png",
    name: "THE STAR CROP VEST",
    price: "1,590",
    favStatus: false,
    category: "Tops",
    sex: "women",
    size: "S",
    color: "pink",
    productId: "PD123456",
  },
  {
    image: "https://i.ibb.co/849V0Yc/image-39.png",
    name: "THE STAR CROP VEST",
    price: "1,590",
    favStatus: false,
    category: "Tops",
    sex: "women",
    size: "S",
    color: "pink",
    productId: "PD123456",
  },
  {
    image: "https://i.ibb.co/1qDkWbT/image-114-1.png",
    name: "THE STAR CROP VEST",
    price: "1,590",
    favStatus: false,
    category: "Tops",
    sex: "women",
    size: "S",
    color: "pink",
    productId: "PD123456",
  },
];

const Homepage = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div className="flex h-full justify-center flex-col items-center p-10">
        <div className="w-10/12 flex justify-center flex-col items-center">
          <div className="h-[28rem] w-full bg-gray-200 flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220484754449760337/image_25_2.png?ex=660f1c00&is=65fca700&hm=5ba1ca26f5524fb32adb1aed600769bc01cfebd8ceb77f78d0c98cac3f567f7f&')] bg-cover">
            <div className="text-[12rem] font-extrabold text-white tracking-[0.2em] opacity-50">
              CICERO
            </div>
          </div>
          <div className="flex flex-row w-11/12 mt-7 gap-2">
            <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/6N7Z1qz/Rectangle-7.png')] bg-cover">
              <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none ab">
                FOR WOMEN
              </Button>
            </div>
            <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/dM68xRs/image-30.png')] bg-cover">
              <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                FOR MEN
              </Button>
            </div>
            <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/QK3PZdn/Rectangle-4.png')] bg-cover">
              <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                FOR KID
              </Button>
            </div>
          </div>
          <div className="w-full mt-7 flex justify-center items-center">
            <div className="flex flex-row w-full gap-6">
              {mockData.map((item, i) => {
                return (
                  <CardHomePage
                    key={i}
                    images={item.image}
                    product_title={item.name}
                    product_price={item.price}
                    product_category={item.category}
                    product_sex={item.sex}
                    product_size={item.size}
                    product_color={item.color}
                    product_desc={item.color}
                    id={item.productId}
                  />
                );
              })}
            </div>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486972800372846/bg1.png?ex=660f1e11&is=65fca911&hm=4c1537e806e2d9fc79ce124b8bc8ef6d30084ca6f2acf12adc2c3743730dc7b8&')] bg-cover flex justify-end p-6">
            <Button className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab">
              BUY NOW
            </Button>
          </div>
          <div className="h-[28rem] w-full mt-5 bg-[url('https://cdn.discordapp.com/attachments/1020724048889659442/1220486971999391764/bg2.png?ex=660f1e11&is=65fca911&hm=91b001b2cf346c66897cf3404dbb900d2423ea06f5280261a39981d62796b02e&')] bg-cover flex justify-end p-6">
            <Button className="h-[13%] w-[13%] text-center justify-center flex text-white rounded-none ab">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
