import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

// Mock
export default async function addWishlist(form: any): Promise<any> {
  try {
    const { data } = await getInstance().post("/product/", form);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}