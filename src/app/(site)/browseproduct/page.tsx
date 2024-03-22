"use client"
import React, { useState, MouseEvent } from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";
import Slider from '@mui/material-next/Slider';


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

const BrowseProduct = (props: Props) => {
  const [isVisibleType, setIsVisibleType] = useState(true);
  const [isVisibleSex, setIsVisibleSex] = useState(true);
  const [isVisibleSize, setIsVisibleSize] = useState(true);
  const [isVisiblePrice, setIsVisiblePrice] = useState(true);
  const [isVisibleColor, setIsVisibleColor] = useState(true);

  const toggleVisibility: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisibleType(!isVisibleType);
  };

  const toggleVisibilitySex: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisibleSex(!isVisibleSex);
  };

  const toggleVisibilitySize: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisibleSize(!isVisibleSize);
  };

  const toggleVisibilityPrice: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisiblePrice(!isVisiblePrice);
  };

  const toggleVisibilityColor: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisibleColor(!isVisibleColor);
  };

  return (
    <div>
      <div className="flex h-full flex-col items-center p-10">
        <div className="w-10/12 flex flex-row">      
          <div className="flex basis-2/6 flex-start flex-col pr-10 pl-10">
            <div className="mb-3 text-3xl font-bold">PRODUCT</div>
            <hr/>
            <div className="flex flex-row">
              <div className="basis-5/6 mt-2 mb-2 font-bold">CATEGORIES</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibility}>-</Button>
            </div>
            <div className={isVisibleType? "mb-2 ml-4 flex flex-col": "mb-2 ml-4 hidden"}>
                <Button className="bg-transparent text-black">Tops</Button>
                <Button className="bg-transparent text-black">Shorts</Button>
                <Button className="bg-transparent text-black">Skirts</Button>
                <Button className="bg-transparent text-black">Trousers</Button> 
                <Button className="bg-transparent text-black">Sets</Button>
                <Button className="bg-transparent text-black">Dresses</Button>
                <Button className="bg-transparent text-black">Jumpsuits</Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-2 mb-2 font-bold">SEX</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilitySex}>-</Button>
            </div>
            <div className={isVisibleSex? "mb-2 ml-4 flex flex-col": "mb-2 ml-4 hidden"}>
                <Button className="bg-transparent text-black">Men</Button>
                <Button  className="bg-transparent text-black">Women</Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-2 mb-2 font-bold">PRICE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityPrice}>-</Button>
            </div>
            <div className={isVisiblePrice? "w-full flex justify-center items-center mb-5" : "w-full flex justify-center items-center mb-5 hidden"}>
              <Slider className="w-10/12" aria-label="Temperature" max={10000} min={0} color="black"/>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-2 mb-2 font-bold">SIZE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilitySize}>-</Button>
            </div>
            <div className={isVisibleSize? "mb-5": "mb-5 hidden"}>
              <Button className="w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white">XS</Button>
              <Button className="w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white">S</Button>
              <Button className="w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white">M</Button>
              <Button className="w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white">L</Button>
              <Button className="w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white">XL</Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-2 mb-2 font-bold">COLOR</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityColor}>-</Button>
            </div>
            <div className={isVisibleColor? "mb-5": "mb-5 hidden"}>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
              <Button className="rounded-full w-8 h-8 m-1"></Button>
            </div>
          </div>
          <div className="basis-4/6">
            <div className="w-full text-lg mb-5 flex justify-end items-end">/ WOMAN</div>
            <div className="grid grid-cols-3 gap-5 w-full overflow-auto p-5">
            {mockData.map((item, i) => {
                return (
                <CardHomePage
                    key={i}
                    id=""
                    images={item.image}
                    product_title={item.name}
                    product_price={item.price}
                    product_category={item.category}
                    product_sex={item.sex}  
                    product_size= {item.size}
                    product_color={item.color}
                    product_desc={item.productId}
                />
                );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BrowseProduct;