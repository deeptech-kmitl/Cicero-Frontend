"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UseMutationResult, useMutation } from "react-query";
import { CiSearch } from "react-icons/ci";
import {
  ICreateProduct,
  IDeleteProduct,
  IFormattedErrorResponse,
  IProduct,
  defaultProductQuery,
} from "@/constants";
import { SearchField } from "@/components/ui/searchField";
import ProductTable from "@/components/admin/product/Table";
import AddProduct from "@/components/admin/product/AddProduct";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
} from "@/api-caller";
import { ProductQueryParams, SearchProductField } from "@/constants";

interface ProductFormProps {
  tokenId: string;
}

export default function ProductForm(props: ProductFormProps) {
  const { tokenId } = props;
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
  const editMutation: UseMutationResult<
    string,
    IFormattedErrorResponse,
    ICreateProduct
  > = useMutation(editProduct);
  const deleteMutation: UseMutationResult<
    string,
    IFormattedErrorResponse,
    IDeleteProduct
  > = useMutation(deleteProduct);
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>();
  const [queryParams, setQueryParams] =
    useState<ProductQueryParams>(defaultProductQuery);
  useEffect(() => {
    console.log("dsa");

    getProductMutation.mutate(queryParams, {
      onSuccess: (response) => {
        setProducts(response.data);
      },
    });
  }, [
    queryParams,
    addProductMutation.isSuccess,
    editMutation.isSuccess,
    deleteMutation.isSuccess,
  ]);

  useEffect(() => {
    if (!tokenId) {
      router.push("/auth");
    }
  }, [tokenId]);

  const onSearch = (e: any) => {
    setQueryParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
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
        <AddProduct tokenId={tokenId} mutation={addProductMutation} />
      </div>
      {products && (
        <ProductTable
          tokenId={tokenId}
          data={products}
          editMutation={editMutation}
          deleteMutation={deleteMutation}
        />
      )}
    </div>
  );
}
