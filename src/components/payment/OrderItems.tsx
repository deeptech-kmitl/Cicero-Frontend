import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
type Props = {};

const OrderItems = (props: Props) => {
	return (
		// <div className="flex items-center  gap-4  p-5">
		// 	<div className="w-1/3">
		// 		<Image
		// 			src={"https://placehold.co/600x600/png"}
		// 			sizes="100vw"
		// 			alt={"xd"}
		// 			width={0}
		// 			height={0}
		// 			className="w-full h-full"
		// 		/>
		// 	</div>
		// 	<div className="space-y-4">
		// 		<p className="font-bold">Asda Some title</p>
		// 		<Button
		// 			className="disabled:opacity-100"
		// 			variant={"sizebtn"}
		// 			disabled
		// 		>
		// 			XL
		// 		</Button>
		// 		<p >
		// 			2390 <span className="inline-block"> THB x 1</span>
		// 		</p>
		// 	</div>
		// </div>
		<div className="flex items-center gap-4 p-5 animate-pulse">
  <div className="w-1/3 h-32 bg-gray-200">
  </div>
  <div className="space-y-4 w-2/3">
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
  </div>
</div>
	);
};

export default OrderItems;
