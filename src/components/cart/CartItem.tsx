"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Cross, Minus, Plus, X } from "lucide-react";
import { Separator } from "@radix-ui/react-menubar";
import { cn } from "@/lib/utils";
import { CartItemProps } from "./type";
import useCartStore from "@/store/cart";
import { useStore } from "zustand";
import SizeButton from "./SizeButton";

const CartItem = ({
	image,
	title,
	id,
	description,
	sizes,
	price,
	qty,
}: CartItemProps) => {
	const cartStore = useStore(useCartStore);
	cartStore.fetch();
	const cart = cartStore.cart;
	console.log(cart);
	return (
		<div className="grid grid-cols-5 gap-6 gap-y-8 p-5 ">
			<div className="col-span-2 min-h-[500px] max-h-[500px]">
				<Image
					src={"https://placehold.co/600x800/png"}
					className="w-full h-full"
					alt="Picture of the author"
					width={0}
					height={0}
					sizes="100vw"
				/>
			</div>

			<div className=" w-[70%] col-span-2 grid content-between">
				<div>
					<p className="text-lg font-bold">{title}</p>
					<p className="line-clamp-6 mt-[5%] mb-[10%] text-slate-500">
						{description}
					</p>
				</div>
				<div className="flex flex-col">
					<p className="font-bold mb-3 text-xl">SELECT YOUR SIZE</p>
					<div className="flex flex-wrap gap-2 w-full">
						<SizeButton id={id} product_size={sizes} updateSize={cartStore.updateSize} />
					</div>
				</div>
			</div>
			<div className="grid relative col-span-1  justify-center content-between py-10">
				<Button
					className="absolute top-0 right-0 p-1 text-black border-2 bg-white hover:text-white border-slate-400 cursor-pointer  w-7 h-7 rounded-full"
					onClick={() => cartStore.removeFromCart(id)}
				>
					<X />
				</Button>
				<div className=" space-y-1">
					<div className="flex  gap-5 items-center">
						<Button
							className={cn(
								" p-1 text-black bg-white border-2 border-slate-400 cursor-pointer w-9 h-9 rounded-full hover:text-white hover:bg-black"
							)}
							disabled={qty === 1}
							onClick={() => cartStore.decrementQty(id)}
						>
							<Minus />
						</Button>
						<p className="text-xl">{qty}</p>
						<Button
							className={cn(
								" p-1 text-black bg-white border-2 border-slate-400 cursor-pointer w-9 h-9 rounded-full hover:text-white hover:bg-black"
							)}
							onClick={() => cartStore.incrementQty(id)}
						>
							<Plus />
						</Button>
					</div>
				</div>
				<div className="text-center">
					<p className="text-2xl">
						{price}
						<span className="text-base text-slate-400"> THB</span>
					</p>
				</div>
			</div>
			<Separator className="col-span-5  w-full h-[1px] bg-black" />
		</div>
	);
};
export const RenderCart = () => {
	const cartStore = useStore(useCartStore);
	return (
		<>
			{cartStore.cart.length === 0 ? (
				<div className="flex min-h-[250px] justify-center items-center">
				<p className="text-2xl font-bold text-center">Your cart is empty</p>
				</div>
			) : (
				cartStore.cart.map((item, i) => <CartItem key={i} {...item} />)
			)	}
		</>
	);
};


export default CartItem;
