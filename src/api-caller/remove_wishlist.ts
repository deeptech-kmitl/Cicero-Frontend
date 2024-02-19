import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";

// Mock
export default async function removeWishlist(): Promise<any> {
    const userId = "user123"; // Example user ID
    const productId = "product456"; // Example product ID
  try {
    const { data } = await getInstance().delete(`/users/${userId}/wishlist/${productId}`);
    return data;
  } catch (error) {
   }
}