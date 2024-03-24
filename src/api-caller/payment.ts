import { getInstance } from "@/api/apiClient";
import { IOrder } from "@/constants";
import { userCred } from "@/constants/type";
import { formattedError } from "@/lib/utils";

export async function addOrder({user_id,token,order}: userCred & { order : IOrder}) {
    try {
      const { data } = await getInstance().post("/order",{...order, user_id},{
            headers: {
                "Authorization": token,
            }
        
      });
      return data;
    } catch (error) {
      throw formattedError(error);
    }
  }