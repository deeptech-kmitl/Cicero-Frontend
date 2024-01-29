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




const SignUpCard = (props: Props) => {
	const [showPass, setShowPass] = useState<boolean>(false);
	const [showConfirm, setShowConfirm] = useState<boolean>(false);
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
		formdata.append("dob", new Date(Number(values.year),Number(values.month),Number(values.day)).toLocaleDateString());
		const res = await fetch(`${process.env.NEXT_PUBLIC_PROD_URL}/users/signup`,{
			method:"POST",
			body:formdata
		})
		const data = await res.json()
		console.log(data)
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
										<Input
											placeholder="Enter your firstname"
											{...field}
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
										<FormLabel>Month</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} defaultValue={field.value}>
												<SelectTrigger className="w-[150px]">
													<SelectValue placeholder="Month" />
												</SelectTrigger>
												<SelectContent>
													{allMonths.map((month,i) => (
														<SelectItem key={month} value={String(i+1)}>
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
											<Input
												placeholder="Year"
												{...field}
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
										/>
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
										<div className="flex items-center justify-between">
											<Input
												placeholder="Enter your password..."
												{...field}
												type={
													showPass
														? "text"
														: "password"
												}
											/>
											<span className="ml-2 text-gray-500 text-lg hover:text-black">
												{showPass ? (
													<EyeOff
														onClick={() =>
															setShowPass(
																!showPass
															)
														}
													/>
												) : (
													<Eye
														onClick={() =>
															setShowPass(
																!showPass
															)
														}
													/>
												)}
											</span>
										</div>
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
										<div className="flex items-center justify-between">
											<Input
												placeholder="Enter your password..."
												{...field}
												type={
													showConfirm
														? "text"
														: "password"
												}
											/>
											<span className="ml-2 text-gray-500 text-lg hover:text-black">
												{showPass ? (
													<EyeOff
														onClick={() =>
															setShowConfirm(
																!showConfirm
															)
														}
													/>
												) : (
													<Eye
														onClick={() =>
															setShowConfirm(
																!showConfirm
															)
														}
													/>
												)}
											</span>
										</div>
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
