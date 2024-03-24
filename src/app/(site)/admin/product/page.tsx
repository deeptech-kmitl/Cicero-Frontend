"use client";
import React, { useEffect, useState } from "react";
import { UseMutationResult, useMutation } from "react-query";
import { CiSearch } from "react-icons/ci";
import {
  ICreateProduct,
  IFormattedErrorResponse,
  IProduct,
  defaultProductQuery,
} from "@/constants";
import { SearchField } from "@/components/ui/searchField";
import ProductTable from "@/components/admin/product/Table";
import AddProduct from "@/components/admin/product/AddProduct";
import { addProduct, getProduct } from "@/api-caller";
import { ProductQueryParams, SearchProductField } from "@/constants";

export default function ProductDashboard() {
  const getProductMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    any
  > = useMutation(getProduct);
  const addProductMutation: UseMutationResult<
    IProduct,
    IFormattedErrorResponse,
    ICreateProduct
  > = useMutation(addProduct);
  const [products, setProducts] = useState<IProduct[]>();
  const [queryParams, setQueryParams] =
    useState<ProductQueryParams>(defaultProductQuery);
  useEffect(() => {
    getProductMutation.mutate(queryParams, {
      onSuccess: (response) => {
        setProducts(response.data);
      },
    });
  }, [queryParams]);

  const onSearch = (e: any) => {
    setQueryParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
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
                name={SearchProductField.ID}
                icon={<CiSearch />}
                placeholder="SEARCH PRODUCT ID"
                onChange={onSearch}
              />
              <SearchField
                name={SearchProductField.TITLE}
                icon={<CiSearch />}
                placeholder="SEARCH PRODUCT NAME"
                onChange={onSearch}
              />
              <AddProduct mutation={addProductMutation} />
            </div>
            {products && <ProductTable data={products} />}
          </div>
        </div>
      </div>
    </>
  );
}
