import { getInstance } from "@/api/apiClient";
import { formattedError } from "@/lib/utils";
import {
  ICreateProduct,
  IDeleteProduct,
  ProductQueryParams,
} from "@/constants";

export async function getProduct(params?: ProductQueryParams): Promise<any> {
  try {
    const { data } = await getInstance().get("/product/search", {
      params,
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function addProduct(body: ICreateProduct): Promise<any> {
  try {
    const form = new FormData();
    await Object.entries(body).forEach(([key, value]) => {
      if (value instanceof Object) {
        value = value.forEach((file: any, _: any) => {
          form.append(key, file);
        });
      } else {
        form.append(key, value);
      }
    });
    const { data } = await getInstance().post("/product", form, {
      headers: {
        Authorization: body.tokenId,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function editProduct(body: ICreateProduct): Promise<any> {
  try {
    const form = new FormData();
    await Object.entries(body).forEach(([key, value]) => {
      if (value instanceof Object) {
        value = value.forEach((file: any, _: any) => {
          form.append(key, file);
        });
      } else {
        form.append(key, value);
      }
    });
    const { data } = await getInstance().put("/product", form, {
      headers: {
        Authorization: body.tokenId,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function deleteProduct(body: IDeleteProduct): Promise<string> {
  try {
    const { data } = await getInstance().delete(`/product/${body.id}`, {
      headers: {
        Authorization: body.tokenId,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}
