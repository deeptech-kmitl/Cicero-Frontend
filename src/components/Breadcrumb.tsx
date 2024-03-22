import { cn } from "@/lib/utils";
import React from "react";
interface IBreadcrumbProb {
  state: string;
}
export default function Breadcrumb({ state }: IBreadcrumbProb) {
  return (
    <div className="flex gap-8 font-bold">
      <p className={cn(" text-lg",{
  "text-[#D0CFCF]": state !== "cart",
  "text-black": state === "cart"
})}>SHOPPING CART</p>
      <div className="border-b w-16 h-3"></div>
      <p className={cn(" text-lg",{
  "text-[#D0CFCF]": state !== "payment",
  "text-black": state === "payment"
})}>PAYMENT</p>
      <div className="border-b w-16 h-3"></div>
      <p className={cn(" text-lg",{
  "text-[#D0CFCF]": state !== "confirm",
  "text-black": state === "confirm"
})}>CONFIRMATION</p>
    </div>
  );
}


