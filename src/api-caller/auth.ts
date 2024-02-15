import { getInstance } from "@/api/apiClient";
import { IFormattedErrorResponse,  SignInResponse, User } from "@/constants/interface";
import { formattedError } from "@/lib/utils";

export default async function signIn(form: FormData): Promise<SignInResponse | IFormattedErrorResponse> {
  try {
    const {data} = await getInstance().post("/users/signin/", form);
    return data;
  } catch (error) {
    return formattedError(error);
  }
}

export async function signUp(form: FormData): Promise<User | IFormattedErrorResponse> {
    try {
      const {data}= await getInstance().post("/users/signup/", form);
     return data;
    } catch (error) {
      return formattedError(error);
    }
  }

///test send cookies
export async function getProfile(id: string,token: string): Promise<User> {
  try {
    const { data } = await getInstance().get(`/users/${id}`, {
      headers: {
        "Authorization": token,
      }
    });
    return data;
  } catch (error) {
    throw formattedError(error);  
  }
}

