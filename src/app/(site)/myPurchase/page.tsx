import ItemMyPurchase from "@/components/myPurchase/ItemMyPurchase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";



import React from "react";

type Props = {};

const mockData = [
  {
    image: "https://via.placeholder.com/150",
    title: "Classic Leather Jacket",
    detail: "Black, Genuine Leather",
    size: "M",
    price: "120,000.00",
    qty: 1,
    orderId: "ORD123456",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Sports Running Shoes",
    detail: "Blue and White, Mesh Material",
    size: "XS",
    price: "80.00",
    qty: 2,
    orderId: "ORD123457",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Elegant Wrist Watch",
    detail: "Silver, Waterproof up to 50m",
    size: "L",
    price: "250.00",
    qty: 3,
    orderId: "ORD123458",
  },
];

const myPurchase = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col px-[20%] py-[5%]">
      <div className="text-xl font-semibold mb-10">MY PURCHASE</div>
      {mockData.map((item, i) => {
        return (
          <ItemMyPurchase
            key={i}
            image={item.image}
            title={item.title}
            detail={item.detail}
            size={item.size}
            price={item.price}
            qty={item.qty}  
            orderId={item.orderId}
          />
        );
      })}

      {/* <div>
        <div className="w-8/9 h-[15em] mb-5 flex ">
          <div className="w-[25%]">
            <img
              className="h-[100%] w-[100%] px-3"
              src="https://images-ext-1.discordapp.net/external/SoyqwiL5DFV3M6dPQZPyUHyb31C4arHR6sPBvqyLifE/https/hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/0c018b4663366a2a94f4c7d82df95f0ab92aba78_xxl-1.jpg?format=webp&width=758&height=1138"
              alt="image description"
            />
          </div>
          <div className="w-[35%] flex flex-col ml-3">
            <div className="h-[15%]">
              <div className="font-semibold">THE STAR COP VEST</div>
            </div>
            <div className="h-[45%] w-[60%]">
              <div className="text-gray-400 line-clamp-3">
                Lorem Ipsum is simply dummy text of the printing setting
                industry.
              </div>
            </div>
            <div className="h-[20%] w-fit">
              <div className="border-2 border-gray-500 py-[3px] px-4">XS</div>
            </div>
            <div className="h-[27%]">
              <div className="text-xl mt-2">
                1,590 <span className="text-gray-500">THB x 1</span>
              </div>
            </div>
          </div>
          <div className="w-[40%] flex flex-col">
            <div className="h-[80%]">
              <div className="font-bold text-right"># ORDER 1RSTGO-5D</div>
            </div>
            <div className="h-[20%] w-[100%] bg-black text-center justify-center flex">
              <Button className="text-white">BUY AGAIN</Button>
            </div>
          </div>
        </div>
        <Separator className="my-4"/>
      </div> */}
    </div>
  );
};

export default myPurchase;
