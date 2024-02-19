import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-8">
      <Breadcrumb state='confirm' />
      <div className="border sm:w-3/4 md:w-[45%]">
        <div className="border-dash border-b p-2">
          <p className="Franc text-xl text-center">THANK YOU FOR SHOPPING.</p>
        </div>
        <div className="border-b-dash p-2 flex flex-col items-center gap-5 py-8">
          <Image src={"/logo.png"} alt={"Logo"} width={40} height={40} />
          <p className="Franc text-lg">YOUR ORDER IS CONFIRMED.</p>
          <div className="flex gap-8 justify-between">
            <div className="text-sm space-y-2">
              <p>PAYMENT AMOUT</p>
              <p>PAYMENT DATE</p>
              <p>PAYMENT METHOD</p>
            </div>
            <div className="text-sm text-end space-y-2">
              <p>1,590 THB</p>
              <p>FEB 23, 2022</p>
              <p>ACCOUNT *9029</p>
            </div>
          </div>
          <div className="border px-10 py-2 border-black">
            <p className="Franc text-sm">ORDER NUMBER : 1RSTGO-5D</p>
          </div>
        </div>
        <div className="border-t p-4 flex justify-between">
          <div className="w-44">
            <p className="Franc text-sm">SHIPPING ADDRESS</p>
            <p className="text-xs">
              123/345 PRUKSA VILLETTE SUANLUANG PATTHANAKARN 44 BANGKOK 10250,
              THAILAND
            </p>
          </div>
          <div className="flex items-end">
            <p className="Inter font-bold text-xs">Cicero</p>
          </div>
        </div>
      </div>
    </div>
  );
}
