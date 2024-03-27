import { getInstance } from "@/api/apiClient";
import { IFormattedErrorResponse, SignInResponse, IUser } from "@/constants";
import { formattedError } from "@/lib/utils";

export async function signIn(
  form: FormData
): Promise<SignInResponse | IFormattedErrorResponse> {
  try {
    const { data } = await getInstance().post("/users/signin/", form);
    return data;
  } catch (error) {
    return formattedError(error);
  }
}

export async function signUp(
  form: FormData
): Promise<IUser | IFormattedErrorResponse> {
  try {
    const { data } = await getInstance().post("/users/signup/", form);
    return data;
  } catch (error) {
    return formattedError(error);
  }
}

///test send cookies
export async function getProfile(id: string, token: string): Promise<IUser> {
  try {
    const { data } = await getInstance().get(`/users/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw formattedError(error);
  }
}

export async function signOut(oauth_id : string, token:string): Promise<void> {
  try {
    await getInstance().post("/users/signout/",{
      oauth_id 
    },{
      headers:{
        Authorization: token
      }
    });
  } catch (error) {
    throw formattedError(error);
  }
}

export async function updateProfile(
  id: string,
  token: string,
  form: FormData
): Promise<SignInResponse | IFormattedErrorResponse> {
  console.log("FORM:", form);
  try {
    const { data } = await getInstance().put(`/users/${id}`, form, {
      headers: {
        Authorization: token,
      },
    });
    console.log("DATA-PASS-PUT:", data);
    return data;
  } catch (error) {
    return formattedError(error);
    // throw formattedError(error);
  }
}
