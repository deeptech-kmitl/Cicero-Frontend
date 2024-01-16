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
import { SignInSchema, SignUpSchema } from "@/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
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
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {};

const SignUpCard = (props: Props) => {
	const [formStep, setFormStep] = useState<number>(0);
	const [showPass, setShowPass] = useState<boolean>(false);
	const [showConfirm, setShowConfirm] = useState<boolean>(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			email: "",
			firstname: "",
			lastname: "",
			phone: "",
			cfpassword: "",
			dob: "",
			password: "",
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof SignInSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div className=" absolute -translate-x-1/2 -translate-y-1/2 top-[calc(50%+25px)] left-1/2 ">
			<Card className="min-h-max h-auto w-[400px] ">
				<CardHeader>
					<CardTitle className="text-center">
						<div className="flex justify-between items-center ">
                            <Button className={cn({
                                "hidden":formStep===0
                            })} onClick={()=>{setFormStep(formStep-1)}} >

                            <ArrowLeft className={cn(" h-6 w-6",{
                                "hidden":formStep===0
                            })} />
                            </Button>
                            <p>Sign Up</p>
                            <Button className={cn({
                                "hidden":formStep===2
                            })} onClick={()=>{setFormStep(formStep+1)}} >

                            <ArrowRight className="h-6 w-6" />
                            </Button>
                            </div>
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className=" relative space-y-1 overflow-x-hidden
                        "
						>
							<div
								className={cn(
									"space-y-3 transition-transform transform translate-x-0 ease-in-out duration-300",
									{
										"transform -translate-x-full":
											formStep !== 0,
									}
								)}
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
							</div>
							<div
								className={cn(
									"space-y-3 absolute top-0 left-0 right-0 transition-transform transform translate-x-0 ease-in-out duration-300 w-auto",
									{
										"transform translate-x-full":
											formStep !== 1,
									},
                                    {
                                        "transform -translate-x-full":
                                            formStep == 2,
                                    }
								)}
							>
                                {/* phone */}
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
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
							</div>
							<div
								className={cn(
									"space-y-3 absolute top-0 left-0 right-0 transition-transform transform translate-x-0 ease-in-out duration-300 w-auto",
									{
										"transform translate-x-full":
											formStep !== 2,
									}
								)}
							>
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
											<FormLabel>
												Confirm Password
											</FormLabel>
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
							</div>

							<div className="pt-10">
								
							</div>
							{formStep === 2 && (
								<Button type="submit" variant="blackbtn">
									Sign Up
								</Button>
							)}
						</form>
					</Form>
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</div>
	);
};




export default SignUpCard;
