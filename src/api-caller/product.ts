import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";
import { ICreateProduct, ProductQueryParams } from "@/constants";
import { cookies } from "next/headers";

export async function getProduct(params?: ProductQueryParams): Promise<any> {
  try {
    const { data } = await getInstance().get("/product/search", {
      params,
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addProduct(body: ICreateProduct): Promise<any> {
  try {
    const { data } = await getInstance().post("/product", body);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function deleteProduct(id: string): Promise<string> {
  try {
    const { data } = await getInstance().delete(`/product/${id}`);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}
