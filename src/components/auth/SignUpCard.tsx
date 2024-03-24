"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import {
  CardTitle,
  CardContent,
  Card,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignInSchema, SignUpSchema } from "@/validator/auth";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import signIn, { signUp } from "@/api-caller/auth";
import { EyeOff, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { isResponseError } from "@/lib/utils";
import { PasswordInput } from "@/components/ui/password-input";
import { ToastAction } from "@/components/ui/toast";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

const SignUpCard = () => {
  const { toast } = useToast();
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      cfpassword: "",
      day: "",
      month: "",
      year: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    const formdata = new FormData();
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    formdata.append("fname", values.firstname);
    formdata.append("lname", values.lastname);
    formdata.append("phone", values.phone);
    formdata.append(
      "dob",
      new Date(
        Number(values.year),
        Number(values.month),
        Number(values.day)
      ).toLocaleDateString()
    );
    const response = await signUp(formdata);
    console.log(response, typeof response, isResponseError(response));
    if (isResponseError(response)) {
      console.log("error");
      const { statusText, message } = response;
      toast({
        title: statusText,
        description: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success !",
        description: "You have successfully signed up",
        variant: "success",
      });
    }
  }
  return (
    // <div className=" absolute -translate-x-1/2 -translate-y-1/2 top-[calc(50%+20px)] left-1/2 ">
    <Card className="min-h-max h-auto ">
      <CardHeader>
        <CardTitle className="text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" relative space-y-4 px-2 overflow-x-hidden
                        "
          >
            {/* firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* lastname */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* </div> */}
            <div className="flex flex-row gap-4 items-center ">
              <FormField
                control={form.control}
                name="day"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Day</FormLabel>
                    <FormControl>
                      <Input placeholder="Day" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Month</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {allMonths.map((month, i) => (
                            <SelectItem key={month} value={String(i + 1)}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input placeholder="Year" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* birthday */}
            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email */}
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
            {/* </div> */}

            {/* password */}
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
            {/* confirm password */}
            <FormField
              control={form.control}
              name="cfpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Enter your password again"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* </div> */}

            <div className="pt-3">
              <Button type="submit" variant="blackbtn">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
    // </div>
  );
};

export default SignUpCard;
