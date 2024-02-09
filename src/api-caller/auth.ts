import { getInstance } from "@/api/apiClient";
import { IFormattedErrorResponse, IFormattedSuccessResponse, SignInResponse, User } from "@/constants/interface";
import { formattedError, formattedSuccess } from "@/lib/utils";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export default async function signIn(form: FormData): Promise<IFormattedSuccessResponse<SignInResponse> | IFormattedErrorResponse> {
  try {
    const {data,status,statusText} : AxiosResponse<SignInResponse> = await getInstance().post("/users/signin/", form);
    const res = formattedSuccess<SignInResponse>(data,status,statusText);
    console.log(res)
    return res;
  } catch (error) {
    return  formattedError(error);
  }
}

export async function signUp(form: FormData): Promise<IFormattedSuccessResponse<User> | IFormattedErrorResponse> {
    try {
      const { data, status, statusText } = await getInstance().post("/users/signup/", form);
      const res = formattedSuccess<User>(data, status, statusText);
      return res;
    } catch (error) {
      return formattedError(error);
    }
  }

export async function getProfile(id: string, token:string): Promise<any> {
  try {
    const { data, status } = await getInstance().get(`/users/${id}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    return { data, status };
  } catch (error) {
    throw formattedError(error);  
  }
}

