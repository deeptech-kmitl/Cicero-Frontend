import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

export default async function getWishlist(form: any): Promise<any> {
  const parameters = {
    param1: "user_id",
  };
  try {
    const { data } = await getInstance().get("/users/wishlist/", {
      params: parameters.param1,
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addWishlist(form: any): Promise<any> {
  try {
    const { data } = await getInstance().post("/product/", form);
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function removeWishlist(): Promise<any> {
  const userId = "user123"; // Example user ID
  const productId = "product456"; // Example product ID
  try {
    const { data } = await getInstance().delete(
      `/users/${userId}/wishlist/${productId}`
    );
    return data;
  } catch (error) {}
}
