"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IFormattedErrorResponse, IProduct } from "@/constants";
import { getProduct } from "@/api-caller/product";
import { SearchField } from "@/components/ui/searchField";
import ProductTable from "@/components/admin/product/Table";
import AddProduct from "@/components/admin/product/AddProduct";
import { UseMutationResult, useMutation } from "react-query";
import { ProductQueryParams } from "@/constants/query";

export default function ProductDashboard() {
  const getProductMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    any
  > = useMutation(getProduct);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProductMutation.mutate(
      {},
      {
        onSuccess: (response) => {
          setProducts(response);
        },
      }
    );
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
        <div id="content" className="grow bg-white">
          <div className="border-b border-[#A49F9F]/25">
            <h1 className="Franc text-3xl uppercase px-8 py-4">PRODUCTS</h1>
          </div>
          <div id="product__admin" className="space-y-4 px-8 p-5">
            <div className="flex space-x-4">
              <SearchField
                icon={<CiSearch />}
                placeholder="SEARCH PRODUCT ID"
              />
              <SearchField
                icon={<CiSearch />}
                placeholder="SEARCH PRODUCT NAME"
              />
              <AddProduct />
            </div>
            <ProductTable data={products} />
          </div>
        </div>
      </div>
    </>
  );
}
