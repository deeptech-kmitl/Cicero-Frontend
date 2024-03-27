"use client";
import React from "react";
import {  UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { PaymentSchema } from "@/validator";

interface IShippingFormProps {
  form: UseFormReturn<z.infer<typeof PaymentSchema>>;
  callback: (data: any) => void;
}

const ShippingForm = (props: IShippingFormProps) => {
  const { form, callback } = props;
  const router = useRouter();
  return (
    <div className="w-3/5 border">
      <h1 className="text-2xl font-bold py-3 ps-3 text-start">Shipping Address</h1>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(callback)} >
          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2  gap-4 ">
                  <FormLabel className="min-w-[75px]">Firstname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your firstname"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">Lastname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your lastname"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="street_address"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your street address"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your city"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your state"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4 p-2 ">
                  <FormLabel className="min-w-[75px]">Zip</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your zip"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4 p-2">
                  <FormLabel className="min-w-[75px]">Country</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your country"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center p-2 gap-4 ">
                  <FormLabel className="min-w-[75px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
            <Separator />
        </form>
      </Form>
    </div>
  );
};

export default ShippingForm;
