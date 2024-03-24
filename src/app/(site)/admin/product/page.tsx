"use client";

import { getProduct } from "@/api-caller/product";
import ProductTable from "@/components/admin/product/Table";
import { IProduct } from "@/constants";
import React, { useEffect, useState } from "react";

export default function ProductDashboard() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProduct().then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex gap-5">
        <div
          id="sidebar"
          className="w-[18rem] bg-white rounded-tr-xl rounded-br-xl"
        >
          ds
        </div>
        <div id="content" className="grow bg-white px-8 p-5">
          <div className="border-b ">
            <h1>Product</h1>
          </div>
          <ProductTable data={products} />
        </div>
      </div>
    </>
  );
}
