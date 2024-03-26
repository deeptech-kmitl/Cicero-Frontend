import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";
import { IProduct } from "@/constants/interface";

// Mock
export default async function getDetailsProduct(product_id : string): Promise<IProduct> {
  try {
    const { data } = await getInstance().get(`/product/${product_id}`);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}