"use client";
import React, { useState } from "react";
import { CardContent, Card, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignInSchema } from "@/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { signIn, getProfile } from "@/api-caller/auth";
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
    console.log(response, typeof response);
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
          </form>
        </Form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default SignInCard;
