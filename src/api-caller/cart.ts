import { getInstance } from "@/api/apiClient";
import { CartItemProps, userCredProductId } from "@/components/cart/type";
import { IAddCart } from "@/constants";
import { userCred } from "@/constants/type";
import { formattedError } from "@/lib/utils";

export async function getCartItems({
  user_id,
  token,
}: userCred): Promise<CartItemProps[]> {
  try {
    const { data } = await getInstance().get(`/users/cart/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function removeFromCart({user_id,token,cart_id}: userCred & {cart_id: string}) {
  try {
    await getInstance().delete(`/users/cart/${user_id}/${cart_id}`,{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addToCart(body: IAddCart) {
  try {
    await getInstance().post(
      `/users/cart/${body.user_id}`,
      { product_id: body.product_id, user_id: body.user_id, size: body.size },
      {
        headers: {
          Authorization: body.tokenId,
        },
      }
    );
  } catch (error) {
    throw formattedError(error);
  }
}

export async function decreaseQty({
  user_id,
  token,
  product_id,
}: userCredProductId) {
  try {
    await getInstance().patch(
      `/users/cart/qtyMinus/${user_id}/${product_id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    throw formattedError(error);
  }
}

export async function increaseQty({
  user_id,
  token,
  product_id,
}: userCredProductId) {
  try {
    await getInstance().patch(
      `/users/cart/qtyPlus/${user_id}/${product_id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    throw formattedError(error);
  }
}

export async function updateSize({
  user_id,
  token,
  product_id,
  size,
}: userCredProductId & { size: string }) {
  try {
    await getInstance().patch(
      `/users/cart/size/${user_id}`,
      {
        user_id,
        product_id,
        size,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    throw formattedError(error);
  }
}
