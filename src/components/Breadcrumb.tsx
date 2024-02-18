import React from "react";
interface IBreadcrumbProb {
  state: string;
}
export default function Breadcrumb({ state }: IBreadcrumbProb) {
  return (
    <div className="flex gap-8 font-bold">
      <p className="text-[#D0CFCF]">SHOPPING CART</p>
      <div className="border-b w-16 h-3"></div>
      <p className="text-[#D0CFCF]">PAYMENT</p>
      <div className="border-b w-16 h-3"></div>
      <p>CONFIRMATION</p>
    </div>
  );
}
