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


const Homepage = (props: Props) => {
  return (
    <div>
      <div className="flex h-full justify-center flex-col items-center p-10">
        <div className="w-11/12 flex justify-center flex-col items-center">
          <div className="h-96 w-11/12 bg-gray-200"></div>
          <div className="flex flex-row w-11/12 mt-7 gap-2">
              <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/6N7Z1qz/Rectangle-7.png')] bg-cover">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none ab">
                  FOR WOMEN
                </Button>
              </div>
              <div className="w-full h-52 bg-red-200 flex justify-center items-center bg-[url('https://i.ibb.co/dM68xRs/image-30.png')] bg-cover">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR MEN
                </Button>
              </div>
              <div className="w-full h-52 bg-red-200 flex justify-center items-center bg-[url('https://i.ibb.co/QK3PZdn/Rectangle-4.png')] bg-cover">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR KID
                </Button>
              </div>
          </div>
          <div className="grid grid-cols-5 w-11/12 mt-7 gap-3">
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
          <div className="h-[28rem] w-11/12 bg-black mt-5 bg-[url('https://i.ibb.co/bsXk3pS/Rectangle-12.png')] bg-cover flex justify-end p-6">
              <Button className="h-[13%] w-[13%] bg-black text-center justify-center flex text-white rounded-none ab">
                 BUY NOW
              </Button>
          </div>
          <div className="h-[28rem] w-11/12 bg-black mt-5 bg-[url('https://i.ibb.co/VNcFyhC/Rectangle-4227.png')] bg-cover flex justify-end p-6">
              <Button className="h-[13%] w-[13%] bg-black text-center justify-center flex text-white rounded-none ab">
                 BUY NOW
              </Button>
          </div>
        </div>
    </div>
    </div>
    
  );
};

export default Homepage;