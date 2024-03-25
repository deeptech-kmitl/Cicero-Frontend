"use client"
import React, { useState, MouseEvent, useEffect } from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";
import Slider from '@mui/material-next/Slider';
import { IProduct } from "@/constants";
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
  let test = Array();

  useEffect(() => {
    setSex(params.product1)
    getProduct().then((data) => {
      setProducts(data.data)
    })
  }, [])

  if(params.product1 == 'newin' || params.product1 == 'sale'){
    products.map((item) => {
        test.push(item)
    })
  }else{
    products.map((item) => {
      if(item.product_sex.toLowerCase() == sex){
        test.push(item)
      }
    })
  }

  const toggleVisibility: React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisibleType(!isVisibleType);
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
        <div className="w-[1200px] flex flex-row mt-10">
          <div className="flex basis-2/6 flex-start flex-col pr-10 pl-10">
            <div className="mb-3 text-3xl Franc tracking-[2%] font-[400px] text-[48px]">PRODUCT</div>
            <hr className="my-3" />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">CATEGORIES</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibility}>-</Button>
            </div>
            <div className={isVisibleType ? "mb-3 ml-4 flex flex-col" : "mb-3 ml-4 hidden"}>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'tops' ? setCategory(''):setCategory('tops')}}>
                <p className={category == 'tops' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Tops</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'shorts' ? setCategory(''):setCategory('shorts')}}>
                <p className={category == 'shorts' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Shorts</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'skirts' ? setCategory(''):setCategory('skirts')}}>
                <p className={category == 'skirts' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Skirts</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'trousers' ? setCategory(''):setCategory('trousers')}}>
                <p className={category == 'trousers' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Trousers</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'sets' ? setCategory(''):setCategory('sets')}}>
                <p className={category == 'sets' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Sets</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'dresses' ? setCategory(''):setCategory('dresses') }}>
                <p className={category == 'dresses' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Dresses</p>
              </Button>
              <Button className="w-max bg-transparent flex items-start justify-start hover:bg-transparent" onClick={() => {category == 'jumpsuits' ? setCategory(''):setCategory('jumpsuits') }}>
                <p className={category == 'jumpsuits' ? "Jura text-lg text-black font-[600px] border-b border-[#000]" : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"}>Jumpsuits</p>
              </Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">PRICE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityPrice}>-</Button>
            </div>
            <div className={isVisiblePrice ? "w-full flex justify-center flex-col items-center mb-5" : "w-full flex justify-center items-center mb-5 hidden"}>
              <div className="w-10/12 Jura text-lg font-[600px]">0 - {price} THB</div>
              <Slider className="w-10/12" aria-label="Temperature" max={10000} min={0} color="black" onChange={handleSliderChange} />
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">SIZE</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilitySize}>-</Button>
            </div>
            <div className={isVisibleSize ? "mb-5" : "mb-5 hidden"}>
              <Button className={size=='XS'? "w-20 border border-black rounded-none justify-center items-center m-1 text-white bg-black hover:bg-black":"w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white hover:bg-black"} onClick={() => {size=='XS'?  setSize(''):setSize('XS') }}>XS</Button>
              <Button className={size=='S'? "w-20 border border-black rounded-none justify-center items-center m-1 text-white bg-black hover:bg-black":"w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white hover:bg-black"} onClick={() => {size=='S'?  setSize(''):setSize('S') }}>S</Button>
              <Button className={size=='M'? "w-20 border border-black rounded-none justify-center items-center m-1 text-white bg-black hover:bg-black":"w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white hover:bg-black"} onClick={() => {size=='M'?  setSize(''):setSize('M') }}>M</Button>
              <Button className={size=='L'? "w-20 border border-black rounded-none justify-center items-center m-1 text-white bg-black hover:bg-black":"w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white hover:bg-black"} onClick={() => {size=='L'?  setSize(''):setSize('L') }}>L</Button>
              <Button className={size=='XL'? "w-20 border border-black rounded-none justify-center items-center m-1 text-white bg-black hover:bg-black":"w-20 bg-white border border-black rounded-none justify-center text-black items-center m-1 hover:text-white hover:bg-black"} onClick={() => {size=='XL'?  setSize(''):setSize('XL') }}>XL</Button>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc font-[400px] text-[24px]">COLOR</div>
              <Button className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl" onClick={toggleVisibilityColor}>-</Button>
            </div>
            <div className={isVisibleColor ? "mb-5 grid grid-cols-3 gap-2 w-6/12 mt-2" : "hidden"}>
              <Button className={color=='black'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#2E2D2D] bg-[#2E2D2D]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#2E2D2D] bg-[#2E2D2D]"} onClick={() => {color=='black'?  setColor(''):setColor('black') }}></Button>
              <Button className={color=='blue'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#5766B5] bg-[#5766B5]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#5766B5] bg-[#5766B5]"} onClick={() => {color=='blue'?  setColor(''):setColor('blue') }}></Button>
              <Button className={color=='brown'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#6F5C5C] bg-[#6F5C5C]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#6F5C5C] bg-[#6F5C5C]"} onClick={() => {color=='brown'?  setColor(''):setColor('brown') }}></Button>
              <Button className={color=='green'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#429A70] bg-[#429A70]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#429A70] bg-[#429A70]"} onClick={() => {color=='green'?  setColor(''):setColor('green') }}></Button>
              <Button className={color=='gray'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#9F9F9F] bg-[#9F9F9F]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#9F9F9F] bg-[#9F9F9F]"} onClick={() => {color=='gray'?  setColor(''):setColor('gray') }}></Button>
              <Button className={color=='orange'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#E08F54] bg-[#E08F54]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#E08F54] bg-[#E08F54]"} onClick={() => {color=='orange'?  setColor(''):setColor('orange') }}></Button>
              <Button className={color=='pink'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#EE9AA9] bg-[#EE9AA9]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#EE9AA9] bg-[#EE9AA9]"} onClick={() => {color=='pink'?  setColor(''):setColor('pink') }}></Button>
              <Button className={color=='purple'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#A5739D] bg-[#A5739D]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#A5739D] bg-[#A5739D]"} onClick={() => {color=='purple'?  setColor(''):setColor('purple') }}></Button>
              <Button className={color=='red'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#D36262] bg-[#D36262]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#D36262] bg-[#D36262]"} onClick={() => {color=='red'?  setColor(''):setColor('red') }}></Button>
              <Button className={color=='white'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#FFFFFF] bg-[#FFFFFF]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#FFFFFF] bg-[#FFFFFF] border border-[#D9D9D9]"} onClick={() => {color=='white'?  setColor(''):setColor('white') }}></Button>
              <Button className={color=='yellow'? "border border-black rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#FCD05F] bg-[#FCD05F]":"rounded-full w-8 h-8 m-1 hover:opacity-50 hover:bg-[#FCD05F] bg-[#FCD05F]"} onClick={() => {color=='yellow'?  setColor(''):setColor('yellow') }}></Button>
            </div>
          </div>
          <div className="basis-4/6">
            <div className="w-full mb-5 flex justify-end items-end Jura pr-5 text-[24px]">/ {sex.charAt(0).toUpperCase() + sex.slice(1)}</div>
            <div className={test.length==0? "w-full flex justify-center items-center Jura":"hidden"}>Don't have products now.</div>
            <div className="grid grid-cols-3 gap-5 w-full overflow-auto p-5">
              {test.map((item, i) => {
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