import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

// Mock
export default async function getDetailsProduct(): Promise<any> {
  const parameters = {
    param1: "product_id",
  };
  try {
    const { data } = await getInstance().get("/product/", {
      params: parameters,
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}