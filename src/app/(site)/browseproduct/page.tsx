import React from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";

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

  return (
    <div>
      <div className="flex h-full flex-col items-center p-10">
        <div className="w-11/12 flex flex-row">      
          <div className="flex basis-1/4 flex-start flex-col">
            <div className="mb-3">PRODUCT</div>
            <hr/>
            <div className="mt-2 mb-2">CATEGORIES</div>
            <hr />
            <div className="mt-2 mb-2">SEX</div>
            <hr />
            <div className="mt-2 mb-2">PRICE</div>
            <hr />
            <div className="mt-2 mb-2">SIZE</div>
            <hr />
            <div className="mt-2 mb-2">COLOR</div>
          </div>
          <div className="basis-3/4">
            <div className="w-full text-lg mb-5 flex items-end">/ WOMAN</div>
            <div className="grid grid-cols-3 gap-5 w-full h-[75vh] overflow-auto">
            {mockData.map((item, i) => {
                return (
                <CardHomePage
                    key={i}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    favStatus={item.favStatus}
                    category={item.category}
                    sex={item.sex}  
                    size= {item.size}
                    color={item.color}
                    productId={item.productId}
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