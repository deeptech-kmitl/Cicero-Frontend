import { getInstance } from "@/api/apiClient";
import { IOrder } from "@/constants";
import { userCred } from "@/constants/type";
import { formattedError } from "@/lib/utils";

export async function addOrder({
  user_id,
  token,
  order,
}: userCred & { order: IOrder }) {
  try {
    const { data } = await getInstance().post(
      "/order",
      { ...order, user_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function getOrder(user_id: string, token: string): Promise<userCred> {
  console.log("user_id:", user_id);
  console.log("token_getOrder:", token);
  try {
    const { data } = await getInstance().get(`/order/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}
