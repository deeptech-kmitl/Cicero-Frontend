import React from "react";
import OrderItems from "./OrderItems";
import { Separator } from "../ui/separator";

type Props = {};

const OrderSummary = (props: Props) => {
	return (
		<div className="w-2/5 px-5">
			<h1 className="text-2xl font-bold mb-[5%]">Order Summary</h1>
			<div className=" max-h-[500px] divide-y overflow-auto">
				<OrderItems />
				<OrderItems />
				<OrderItems />
				
			</div>
			<div className="mt-[5%]">
				<div className="font-bold grid grid-cols-2">
					<p className="text-left ">TOTAL PRODUCT</p>
					<p className="text-right">50000 THB</p>
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
