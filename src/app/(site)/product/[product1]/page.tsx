"use client"
import React, { useState, MouseEvent, useEffect } from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";
import Slider from '@mui/material-next/Slider';
import { IProduct, allCategory, allColor, allSize } from "@/constants";
import { getProduct } from "@/api-caller/product";

const Product = ({ params }: { params: { product1: string } }) => {
  const [isVisibleType, setIsVisibleType] = useState(true);
  const [isVisibleSex, setIsVisibleSex] = useState(true);
  const [isVisibleSize, setIsVisibleSize] = useState(true);
  const [isVisiblePrice, setIsVisiblePrice] = useState(true);
  const [isVisibleColor, setIsVisibleColor] = useState(true);
  const [category, setCategory] = useState("");
  const [sex, setSex] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data.data)
      console.log(data.data)
    })

    setSex(params.product1)
  }, [])

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

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number);
  };

  return (
    <div>
      <div className="flex h-full flex-col items-center p-10">
        <div className="w-[1250px] flex flex-row mt-10">
          <div className="flex basis-2/6 flex-start flex-col pr-10 pl-10">
            <div className="mb-3 text-3xl Franc tracking-[2%] font-[400px] text-[48px]">PRODUCT</div>
            <hr className="my-3" />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">CATEGORIES</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibility}>-</Button>
            </div>
            <div className={isVisibleType ? "mb-3 ml-4 flex flex-col" : "mb-3 ml-4 hidden"}>
              {allCategory.Men.map((categoryName) => (
                <Button
                  key={categoryName}
                  className="w-max bg-transparent flex items-start justify-start hover:bg-transparent"
                  onClick={() => {category === categoryName.toLowerCase() ? setCategory('') : setCategory(categoryName.toLowerCase())}}
                >
                  <p className={category === categoryName.toLowerCase() ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>
                    {categoryName}
                  </p>
                </Button>
              ))}
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">SEX</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilitySex}>-</Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">PRICE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityPrice}>-</Button>
            </div>
            <div className={isVisiblePrice ? "w-full flex justify-center flex-col items-center mb-5" : "w-full justify-center items-center mb-5 hidden"}>
              <div className="w-10/12 Jura text-lg font-[600px]">0 - {price} THB</div>
              <Slider className="w-10/12" aria-label="Temperature" max={10000} min={0} color="black" onChange={handleSliderChange} />
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">SIZE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilitySize}>-</Button>
            </div>
            <div className={isVisibleSize ? "mb-5" : "mb-5 hidden"}>
              {allSize.map((sizeOption) => (
                <Button
                  key={sizeOption}
                  className={`w-20 border border-black rounded-none justify-center items-center m-1 ${size === sizeOption ? 'text-white bg-black hover:bg-black' : 'bg-white text-black hover:text-white hover:bg-black'}`}
                  onClick={() => setSize(size === sizeOption ? '' : sizeOption)}
                >
                  {sizeOption}
                </Button>
              ))}
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">COLOR</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityColor}>-</Button>
            </div>
            <div className={isVisibleColor ? "mb-5 grid grid-cols-3 gap-2 w-6/12 mt-2" : "hidden"}>
              {allColor.map(({ name, value }) => (
                <Button
                  key={name}
                  className={`${color === name.toLowerCase() ? "border border-black" : ""} rounded-full w-8 h-8 m-1 hover:opacity-50`}
                  style={{ backgroundColor: value, borderColor: color === 'white' && name === "White" ? '#D9D9D9' : 'black' }} // Additional condition for white button border
                  onClick={() => setColor(color === name.toLowerCase() ? '' : name.toLowerCase())}
                ></Button>
              ))}
            </div>
          </div>
          <div className="basis-4/6">
            <div className="w-full mb-5 flex justify-end items-end Jura pr-5 text-[24px]">/ {sex.charAt(0).toUpperCase() + sex.slice(1)}</div>
            <div className="grid grid-cols-3 gap-5 w-full overflow-auto p-5">
              {products.map((item, i) => {
                return (
                  <CardHomePage
                    key={i}
                    images={item.images}
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
        </div>
      </div>
    </div>

  );
};

export default Product;