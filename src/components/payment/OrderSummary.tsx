"use client"
import React from "react";
import OrderItems from "./OrderItems";
import { Separator } from "../ui/separator";
import { OrderItem } from "@/constants/type";
import useCartStore from "@/store/cart";

// type OrderProps = {
// 	orders : OrderItem[]
// };

const OrderSummary = () => {
	const {cart} = useCartStore()
	console.log(cart)
	// const orders : OrderItem[] = [{
	// 		image: "https://placehold.co/600x600/png",
	// 		title: "Asda Some title 1",
	// 		price: 2390,
	// 		size: "XL",
	// 		quantity: 1
	// 	},
	// 	{
	// 		image: "https://placehold.co/600x600/png",
	// 		title: "Asda Some title 2",
	// 		price: 2390,
	// 		size: "XL",
	// 		quantity: 1
	// 	},
	// 	{
	// 		image: "https://placehold.co/600x600/png",
	// 		title: "Asda Some title 3",
	// 		price: 2390,
	// 		size: "XL",
	// 		quantity: 1
	// 	},
	// 	{
	// 		image: "https://placehold.co/600x600/png",
	// 		title: "Asda Some title 4",
	// 		price: 2390,
	// 		size: "XL",
	// 		quantity: 1
	// 	},
	// 	{
	// 		image: "https://placehold.co/600x600/png",
	// 		title: "Asda Some title 5",
	// 		price: 2390,
	// 		size: "XL",
	// 		quantity: 1
	// 	},
		
	// ]
	return (
		<div className="w-2/5 h-fit  border">
			<h1 className="text-2xl font-bold py-3 ps-3">Order Summary</h1>
			<Separator />

			<div className=" max-h-[500px] divide-y overflow-auto">
				{cart.map((order,i) => (
					<OrderItems
						key={i}
						image={order.images[0].url}
						title={order.product_title}
						price={order.product_price}
						size={order.size}
						qty={order.qty}
					/>
				))}
				
			</div>
			<div className="mt-[5%] p-5">
				<div className="font-bold grid grid-cols-2">
					<p className="text-left ">TOTAL PRODUCT</p>
					<p className="text-right">{cart.reduce((prev, order)=> prev + order.product_price * order.qty,0)} THB</p>
				</div>
				<div className="font-bold grid grid-cols-2">
					<p className="text-left ">SHIPPING</p>
					<p className="text-right">FREE</p>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
