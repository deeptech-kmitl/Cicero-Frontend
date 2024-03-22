import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

// Mock
export async function addProduct(form: any): Promise<any> {
  try {
    const { data } = await getInstance().post("/product/", form);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function getAllProduct() {
  try {
    const { data } = await getInstance().get("/product/search");
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}