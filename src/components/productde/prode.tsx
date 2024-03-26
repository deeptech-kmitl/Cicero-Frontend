import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { DetailsProps } from "./type";
import useDetailsStore from "@/store/prode";
import { useStore } from "zustand";

const ProductDe = ({
  images,
  product_title,
  product_desc,
  id,
  product_price,
  token,
  user_id,
}: DetailsProps & { token: string; user_id: string }) => {
  const productStore = useStore(useDetailsStore);
  const product = productStore.details;
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="w-[75px] h-[100px]">
          <Image
            src={image.url}
            width={75}
            height={100}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}

      {images.map((image, index) => (
        <div key={index} className="w-[300px] h-[750px] ml-[100px] overflow-scroll">
          <Image
            src={image.url}
            width={300}
            height={150}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}

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
        <Button className="bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
          EDIT
        </Button>
        <Button className="bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
          DELETE
        </Button>
      </div>
    </>
  );
};

export default ProductDe;
