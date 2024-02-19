import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

// Mock
export default async function showWishlist(form: any): Promise<any> {
    const parameters = {
        param1: 'user_id'
      };
  try {
    const { data } = await getInstance().get("/users/wishlist/", {params: parameters.param1});
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}