import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";
import { WishlistProps, userCredProductId } from "@/components/wish/type";
import { userCred } from "@/constants/type";

export default async function getWishlist({user_id,token}: userCred): Promise<WishlistProps[]> {

  try {
    const { data } = await getInstance().get(`/users/wishlist/${user_id}`, {
      headers: {
        "Authorization": token,
    }
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addWishlist({user_id,token,product_id}: userCredProductId ): Promise<any> {
  try {
    const { data } = await getInstance().delete(
      `/users/${user_id}/wishlist/${product_id}`,
      {
        headers: {
          "Authorization": token,
      }
      }
    );
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function removeWishlist({user_id,token,product_id}: userCredProductId): Promise<any> {
  try {
    const { data } = await getInstance().delete(
      `/users/${user_id}/wishlist/${product_id}`,
      {
        headers: {
          "Authorization": token,
      }
      }
    );
    return data;
  } catch (error) {throw formattedError(error);}
}
