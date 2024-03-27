import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import SignInCard from "@/components/auth/SignInCard";
import SignUpCard from "@/components/auth/SignUpCard";
import { cookies } from "next/headers";
import { SignInResponse } from "@/constants/interface";

const Authen = async () => {
  async function setCookie(data: SignInResponse) {
    "use server";
    cookies().set({
      name: "token",
      value: data.token.access_token,
      maxAge: 24 * 60 * 60,
      httpOnly: true,
      secure: true,
    });

    cookies().set({
      name: "user",
      value: JSON.stringify(data.user),
      maxAge: 24 * 60 * 60,
      httpOnly: true,
      secure: true,
    });
  }

  const token = cookies().get("token")?.value;

  return (
    <div className="flex h-full justify-center flex-col items-center pt-[10rem]">
      <Tabs defaultValue={"signin"} className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign in </TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          {/* test send token as a prop */}
          <SignInCard setCookie={setCookie} token={token} />
        </TabsContent>
        <TabsContent value="signup">
          <SignUpCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authen;
