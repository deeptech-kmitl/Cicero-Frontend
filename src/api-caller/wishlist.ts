import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";
import { userCredProductId } from "@/components/wish/type";
import { userCred } from "@/constants/type";
import { IAddWishlist, IWishlist } from "@/constants";

export async function getWishlist({
  user_id,
  token,
}: userCred): Promise<IWishlist[]> {
  try {
    const { data } = await getInstance().get(`/users/wishlist/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addWishlist({
  user_id,
  tokenId,
  product_id,
}: IAddWishlist): Promise<any> {
  try {
    const { data } = await getInstance().post(
      `/users/${user_id}/wishlist/${product_id}`,
      {},
      { headers: { Authorization: tokenId } }
    );
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function removeWishlist({
  user_id,
  tokenId,
  product_id,
}: IAddWishlist): Promise<any> {
  try {
    const { data } = await getInstance().post(
      `/users/${user_id}/wishlist/${product_id}`,
      {},
      {
        headers: {
          Authorization: tokenId,
        },
      }
    );
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}
