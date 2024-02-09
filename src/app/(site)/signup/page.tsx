import { CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React,{useState} from "react";
import SignInCard from "@/components/auth/SignInCard";
import SignUpCard from "@/components/auth/SignUpCard";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignInResponse } from "@/constants/interface";
type Props = {};

const Authen = (props: Props) => {
  async function setCookie(data : SignInResponse) {
		"use server";
		cookies().set({
			name: "token",
			value: data.token.access_token,
			// keep the cookie for a days
			maxAge:1000,
			// cookie will be accessible by client's JavaScript
			httpOnly: true,
			// cookie will be sent only over HTTPS
			secure: true,
		});

    cookies().set({
      name: "user",
      value: data.user.id,
      // keep the cookie for a days
      maxAge:1000,
      // cookie will be accessible by client's JavaScript
      httpOnly: true,
      // cookie will be sent only over HTTPS
      secure: true,
    });
		
	}
  const token = cookies().get('token')
  return (
    <div className="flex h-full justify-center flex-col items-center p-10">
     
      <Tabs defaultValue={"signin"}  className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin" >Sign In</TabsTrigger>
          <TabsTrigger value="signup" >Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInCard setCookie={setCookie} token={token?.value}/>
        </TabsContent>
        <TabsContent value="signup">
          <SignUpCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authen;
