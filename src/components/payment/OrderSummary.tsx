"use client"
import React from "react";
import OrderItems from "./OrderItems";
import { Separator } from "../ui/separator";
import { OrderItem, userCred } from "@/constants/type";
import { Loader2 } from "lucide-react";
import { getCartItems } from "@/api-caller";
import { useQuery } from "react-query";
import { CartItemProps } from "../cart/type";

// type OrderProps = {
// 	orders : OrderItem[]
// };

const OrderSummary = ({user_id, token}: userCred) => {
	const { isLoading, isError, data:cart, error } = useQuery<CartItemProps[],Error>('cart', () => getCartItems({token, user_id}))
	if (isLoading) return <div className="min-h-[500px] flex items-center justify-center"><Loader2 className="animate-spin" /></div>
	
	return (
		<div className="w-2/5 h-fit  border">
			<h1 className="text-2xl font-bold py-3 ps-3">Order Summary</h1>
			<Separator />

			<div className=" max-h-[500px] divide-y overflow-auto">
				{cart?.map((order,i) => (
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
					<p className="text-right">{cart?.reduce((prev, order)=> prev + order.product_price * order.qty,0)} THB</p>
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
