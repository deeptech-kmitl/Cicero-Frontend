import React from "react";
import { cookies } from "next/headers";
import ProductForm from "@/components/admin/product/ProductForm";
import Image from "next/image";
import Link from "next/link";

export default function ProductDashboard() {
  const token = cookies().get("token")?.value || "";
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex gap-5">
        <div
          id="sidebar"
          className="w-[18rem] bg-white flex p-8 rounded-tr-xl rounded-br-xl"
        >
          <Link className="h-12 flex items-center space-x-2" href="/">
            <div>
              <Image src={"/logo.png"} alt={"logo"} width={45} height={45} />
            </div>
            <p className="text-lg">Cicero</p>
          </Link>
        </div>
        <div id="content" className="grow bg-white">
          <div className="border-b border-[#A49F9F]/25 mt-10">
            <h1 className="Franc text-3xl uppercase px-8 py-4">PRODUCTS</h1>
          </div>
          <ProductForm tokenId={token} />
        </div>
      </div>
    </>
  );
}
