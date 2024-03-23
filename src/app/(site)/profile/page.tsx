
import React from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import { cookies } from "next/headers";
import { SignInResponse } from "@/constants/interface";

const profile = () => {
  async function setCookie(data: SignInResponse) {
    "use server";
    cookies().set({
      name: "token",
      value: data.token.access_token,
      // keep the cookie for a days
      maxAge: 1000,
      // cookie will be accessible by client's JavaScript
      httpOnly: true,
      // cookie will be sent only over HTTPS
      secure: true,
    });

    cookies().set({
      name: "user",
      value: JSON.stringify(data.user),
      // keep the cookie for a days
      maxAge: 1000,
      // cookie will be accessible by client's JavaScript
      httpOnly: true,
      // cookie will be sent only over HTTPS
      secure: true,
    });
  }
  const user = cookies().get("user")?.value;
  const token = cookies().get("token")?.value;
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-[40vw] h-[100vh] flex flex-col">
        <div className="w-[100%] grid justify-items-center gap-1.5 mt-10">
          <div className="w-full">
            <ProfileForm
              setCookie={setCookie}
              userId={user ? user : ""}
              tokenId={token ? token : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
