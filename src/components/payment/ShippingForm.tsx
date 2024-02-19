"use client";
import { PaymentAddressSchema } from "@/validator/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
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

type Props = {};

const ShippingForm = (props: Props) => {
	const form = useForm<z.infer<typeof PaymentAddressSchema>>({
		resolver: zodResolver(PaymentAddressSchema),
		defaultValues: {
			fname: "",
			lname: "",
			street_address: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			phone: "",
			company: "",
		},
	});
	const router = useRouter();
	function onSubmit(data: z.infer<typeof PaymentAddressSchema>) {
		console.log(data);
	}
	return (
		<div className="w-3/5">
			<h1 className="text-2xl font-bold mb-[5%]">Shipping Address</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 p-5"
				>
					<FormField
						control={form.control}
						name="fname"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Firstname</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your firstname"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lname"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Lastname</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your lastname"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="street_address"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Street Address</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your street address"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your city"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="state"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your state"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="zip"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Zip</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your zip"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your country"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-4 ">
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your phone"
											className="border-0 focus-visible:ring-0 focus-visible:border-0"
											{...field}
										/>
									</FormControl>
								</div>
								<Separator />
								<FormMessage className="text-end" />
							</FormItem>
						)}
					/>
					<div className="flex gap-4">

					<Button onClick={()=> router.push('/')} >
					 Continue shopping
					</Button>
					<Button type="submit" className="float-start ">Next</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ShippingForm;
