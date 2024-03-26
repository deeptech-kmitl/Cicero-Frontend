import { getInstance } from "@/api/apiClient";
import { CartItemProps, userCredProductId } from "@/components/cart/type";
import { userCred } from "@/constants/type";
import { formattedError } from "@/lib/utils";

export  async function getCartItems({user_id,token}: userCred) : Promise<CartItemProps[]>  {
  try {
    const { data } = await getInstance().get(`/users/cart/${user_id}`,{
        headers: {
            "Authorization": token,
        }
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function removeFromCart({user_id,token,product_id}: userCredProductId) {
  try {
    await getInstance().delete(`/users/cart/${user_id}/${product_id}`,{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addToCart({user_id,token,product_id,qty,size}: userCred & {product_id: string, qty: number, size: string}) {
  try {
    await getInstance().post(`/users/cart/${user_id}`,{
      user_id,
      product_id,
        qty,
        size
    },{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function decreaseQty({user_id,token,product_id}: userCredProductId) {
  try {
    await getInstance().patch(`/users/cart/qtyMinus/${user_id}/${product_id}`,{},{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function increaseQty({user_id,token,product_id}: userCredProductId) {
  try {
    await getInstance().patch(`/users/cart/qtyPlus/${user_id}/${product_id}`,{},{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function updateSize({user_id,token,product_id,size}: userCredProductId & {size: string}) {
  try {
    await getInstance().patch(`/users/cart/size/${user_id}`,{
      user_id,
      product_id,
        size
    },{
        headers: {
            "Authorization": token,
        }
    });
  } catch (error) {
    throw formattedError(error);
  }
}