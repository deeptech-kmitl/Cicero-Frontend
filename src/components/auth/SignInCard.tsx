"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import {
  CardTitle,
  CardContent,
  Card,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignInSchema } from "@/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { getProfile, signIn } from "@/api-caller/auth";
import { SignInResponse } from "@/constants/interface";
import { useToast } from "../ui/use-toast";
import { isResponseError } from "@/lib/utils";
import { PasswordInput } from "../ui/password-input";
import { useRouter } from "next/navigation";
//test prop token this component not use token
type Props = {
  setCookie: (data: SignInResponse) => void;
  token?: string;
};

const SignInCard = ({ setCookie, token }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData: FormData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    const response = await signIn(formData);
    console.log("Response-SignIn:", response, typeof response);
    if (isResponseError(response)) {
      console.log("error");
      const { status, statusText, message } = response;
      toast({
        title: statusText,
        description: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success !",
        description: "You have successfully signed in",
        variant: "success",
      });
      setCookie(response);
      router.refresh();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="center">Sign In </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="blackbtn">
              Sign In
            </Button>
            <Button
              onClick={async () => {
                //U000003 need to get from user cookie but now still think about how to get it or store it
                const res = await getProfile("U000003", token!);
                console.log(res);
              }}
            >
              XD
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default SignInCard;
