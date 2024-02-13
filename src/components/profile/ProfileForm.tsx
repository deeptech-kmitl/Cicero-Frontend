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
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
type Props = {};

const ProfileForm = (props: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("EDIT");
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);
   const [first_name, setFname] = useState<string>("Hello");
   const [last_name, setLname] = useState<string>("World");
   const [phone, setPhone] = useState<string>("0981234567");
   const [email, setEmail] = useState<string>("test@gmail.com");
   const [day, setDay] = useState<string>("12");
   const [month, setMonth] = useState<string>("February");
   const [year, setYear] = useState<string>("2000");
  
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
      email: email,
      firstname: first_name,
      lastname: last_name,
      phone: phone,
      day: day,
      month: month,
      year: year,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    const formdata = new FormData();
    formdata.append("email", values.email);
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PROD_URL}/users/signup`,
      {
        method: "POST",
        body: formdata,
      }
    );
    const data = await res.json();
    console.log(data);
  }

  const toggleEdit = () => {
    setIsInputDisabled(!isInputDisabled);
    setButtonText(isInputDisabled ? "Apply" : "EDIT");
    if (isInputDisabled === true) {
      console.log("Edit -> Apply");
    } else {
      console.log("Apply -> Edit");
    }
  };

  return (
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
                <Input
                  placeholder="Enter your firstname"
                  {...field}
                  value={first_name}
                  disabled={isInputDisabled}
                  onChange={(e) => setFname(e.target.value)}
                />
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
                <Input
                  placeholder="Enter your email"
                  {...field}
                  value={last_name}
                  disabled={isInputDisabled}
                  onChange={(e) => setLname(e.target.value)}
                />
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
                  <Input
                    placeholder="Day"
                    {...field}
                    value={day}
                    disabled={isInputDisabled}
                    onChange={(e) => setDay(e.target.value)}
                  />
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
                <FormLabel>Month{form.getValues("month")}</FormLabel>
                  <Select
                    
                    disabled={isInputDisabled}
                    {...field}
                    value={month}
                  >
                  <FormControl>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder={form.getValues("month")} />
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
                  <Input
                    placeholder="Year"
                    {...field}
                    value={year}
                    disabled={isInputDisabled}
                    onChange={(e) => setYear(e.target.value)}
                  />
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
                <Input
                  placeholder="Enter your phone number"
                  {...field}
                  value={phone}
                  disabled={isInputDisabled}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                <Input
                  placeholder="Enter your email"
                  {...field}
                  value={email}
                  disabled={isInputDisabled}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-3">
          <Button onClick={toggleEdit} variant="noFillbtn" className="my-3">
            {buttonText}
          </Button>
          <Button variant="blackbtn" className="my-3">
            LOGOUT
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
