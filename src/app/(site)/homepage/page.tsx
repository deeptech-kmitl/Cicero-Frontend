import React from "react";
import CardHomePage from "@/components/homePage/card"
import { Button } from "@/components/ui/button";
import Image from 'next/image';

type Props = {};

const Homepage = () => {
  return (
    <div>
      <div className="flex h-full justify-center flex-col items-center p-10">
        <div className="w-11/12 flex justify-center flex-col items-center">
          <div className="h-96 w-11/12 bg-black"></div>
          <div className="flex flex-row w-11/12 mt-7 gap-2">
              <div className="w-full h-52 flex justify-center items-center bg-[url('https://i.ibb.co/6N7Z1qz/Rectangle-7.png')] bg-cover">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none ab">
                  FOR WOMEN
                </Button>
              </div>
              <div className="w-full h-52 bg-red-200 flex justify-center items-center">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR MEN
                </Button>
              </div>
              <div className="w-full h-52 bg-red-200 flex justify-center items-center">
                <Button className="h-[20%] w-[30%] bg-black text-center justify-center flex text-white rounded-none">
                  FOR KID
                </Button>
              </div>
          </div>
          <div className="flex flex-row w-11/12 mt-7 gap-4">
            <CardHomePage/>
            <CardHomePage/>
            <CardHomePage/>
            <CardHomePage/>
            <CardHomePage/>
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