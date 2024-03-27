import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { PaymentSchema } from "@/validator";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { allMonths } from "@/constants";

interface IShippingFormProps {
  form: UseFormReturn<z.infer<typeof PaymentSchema>>;
  callback: (data: any) => void;
}

const CreditForm = ({ form, callback }: IShippingFormProps) => {
  const allYears = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );
  return (
    <div className="border border-[#C4C4C4]">
      <p className="text-2xl font-bold p-4 Franc">PAYMENT DETAILS</p>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(callback)} className="">
          <FormField
            control={form.control}
            name="cardHolder"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4 p-2 px-10">
                  <FormLabel className="min-w-[150px]">
                    Cardholder Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Card Holder Name"
                      className="border-0 focus-visible:ring-0 bg-white focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
          <Separator className="m-0" />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4 p-2 px-10">
                  <FormLabel className="min-w-[150px]">Card Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Card Number"
                      className="border-0 focus-visible:ring-0 bg-white focus-visible:border-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="pe-4 text-end" />
              </FormItem>
            )}
          />
          <Separator className="m-0" />
          <section className="flex items-center justify-between p-3 px-10">
            <FormField
              control={form.control}
              name="expiryMonth"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-3">
                    <FormLabel>Expire Month</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[220px] bg-white">
                          <SelectValue placeholder="Select Month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {allMonths.map((month, i) => (
                          <SelectItem key={month} value={String(i + 1)}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className="pe-4 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiryYear"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-3 items-center gap-4 ">
                    <FormLabel>Expire Year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[220px] bg-white">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {allYears.map((year, i) => (
                          <SelectItem key={year} value={String(year)}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className="pe-4 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-3">
                    <FormLabel>CVV/CVC</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your firstname"
                        className="border-0 bg-white focus-visible:ring-0 focus-visible:border-0"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-end" />
                </FormItem>
              )}
            />
          </section>
        </form>
      </Form>
    </div>
  );
};

export default CreditForm;
