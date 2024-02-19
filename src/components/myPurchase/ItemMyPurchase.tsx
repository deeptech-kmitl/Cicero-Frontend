import React from 'react'
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { Button } from '../ui/button';

type ItemMyPurchaseProps = {
    image: string
    title: string
    detail: string
    size: string
    price: string
    qty: number
    orderId: string
}


const ItemMyPurchase = (props: ItemMyPurchaseProps) => {
  return (
    <div>
      <div className="w-8/9 h-[15em] mb-5 flex ">
        <div className="w-[25%]">
          <Image
            className="h-[100%] w-[100%] px-3"
            src={props.image}
            width={0}
            height={0}
            sizes="100vw"
            alt="image description"
          />
        </div>
        <div className="w-[35%] flex flex-col ml-3">
          <div className="h-[15%]">
            <div className="font-semibold">{props.title}</div>
          </div>
          <div className="h-[45%] w-[60%]">
            <div className="text-gray-400 line-clamp-3">{props.detail}</div>
          </div>
          <div className="h-[20%] w-fit">
            <div className="border-2 border-gray-500 py-[3px] px-4">
              {props.size}
            </div>
          </div>
          <div className="h-[27%]">
            <div className="text-xl mt-2">
              {props.price}{" "}
              <span className="text-gray-500">THB x {props.qty}</span>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col">
          <div className="h-[80%]">
            <div className="font-bold text-right"># ORDER {props.orderId}</div>
          </div>
          <Button className="h-[20%] w-[100%] bg-black text-center justify-center flex text-white">
            BUY AGAIN
          </Button>
        </div>
      </div>
      <Separator className="my-9" />
    </div>
  );
};

export default ItemMyPurchase;