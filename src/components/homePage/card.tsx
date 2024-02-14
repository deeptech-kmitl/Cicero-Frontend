import React from 'react'
import Image from 'next/image';
import { Heart } from "lucide-react";

type ItemProduct = {
  image: string
  name: string
  price: string
  favStatus: boolean
  category: string
  sex: string
  size: string
  color: string
  productId: string
};


const CardHomePage = (props: ItemProduct) => {
  return (
    <div className="flex flex-col h-[27rem] w-full">
      <div className='h-[80%] w-full flex justify-center'>
        <Image
          className="w-auto"
          src={props.image}
          width={0}
          height={0}
          sizes="100vw"
          alt="product"
        />
      </div>
      <div className='flex flex-row mt-2'>
        <div className='basis-10/12 text-base'>{props.name}</div>
        <Heart className='basis-2/12'/>
      </div>
      <div className='flex flex-row'>
        <div className='text-xl'>{props.price}</div>
        <div className='text-sm ml-1 mt-1.5 text-gray-400'>THB</div>
      </div>
    </div>
  );
};

export default CardHomePage;