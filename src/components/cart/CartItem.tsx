"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Cross, Minus, Plus, X } from "lucide-react";
import { Separator } from "@radix-ui/react-menubar";
import { cn } from "@/lib/utils";
import { CartItemProps } from "./type";



const CartItem = ({image, title,description,sizes,price }: CartItemProps) => {
	return (
		<div className="grid grid-cols-5 gap-6 gap-y-8 p-5 ">
			<div className="col-span-2 ">
				<Image
					src={"/GEOMETRIC_JACQUARD_JACKET_0.jpg"}
					className="w-[400px] max-h-[700px]"
					alt="Picture of the author"
					width={0}
					height={0}
					sizes="100vw"
				/>
			</div>

			<div className=" w-[70%] col-span-2 grid content-between">
				<div>

				<p className="text-lg font-bold">{title}</p>
				<p className="line-clamp-3 mt-[5%] mb-[10%] text-slate-500">
					{description}
				</p>
				</div>
				<div className="flex flex-col">
					<p className="font-bold mb-3 text-xl">SELECT YOUR SIZE</p>
					<div className="flex flex-wrap gap-2 w-full">
						{["XS", "S", "M", "L", "XL"].map((size,i) => (
							<p key={i} className={cn("text-lg border-[1.5px] bg-white text-black border-black  p-2 w-16 text-center",{
								"bg-black text-white":size===sizes
							})}>
							{size}
							</p>
						))}
						
						
					</div>
				</div>
			</div>
			<div className="grid relative col-span-1  justify-center content-between py-10">
				<X className="absolute top-0 right-0 p-1 text-black border-2 border-slate-400 cursor-pointer  w-7 h-7 rounded-full" />
				<div className=" space-y-1">
					<div className="flex  gap-5 items-center">
						<Minus
							className=" p-1 text-black border-2 border-slate-400 cursor-pointer w-9 h-9 rounded-full hover:text-white hover:bg-black"
							onClick={() => console.log("XD")}
						/>
						<p className="text-xl">1</p>
						<Plus
							className="p-1 text-black border-2 border-slate-400 cursor-pointer w-9 h-9 rounded-full hover:text-white hover:bg-black"
							onClick={() => console.log("XD")}
						/>
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

export default CartItem;
{
	/* <div className="flex w-full h-[20em] justify-stretch gap-2 items-center bg-red-900">
			<div className="w-1/3">

			<Image
				src="https://via.placeholder.com/600x1000"
				className="w-full h-full"
				alt="Picture of the author"
				width={0}
				height={0}
				sizes="100vw"
				/>
				</div>
			<div className="w-1/2 p-5	bg-green-500">
				<p className="text-lg font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nisi.</p>
				<p className="line-clamp-3 mb-[20%]">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Maiores ducimus nobis tenetur laborum quas aperiam nemo
					exercitationem, repudiandae quaerat voluptatem. Vel quis
					animi corrupti delectus, libero repellendus perspiciatis
					necessitatibus. Velit consequatur tenetur optio neque
					perspiciatis facere sequi similique vel. Consequuntur
					explicabo, a expedita odio non repellat cumque. Quae,
					laborum cum.
				</p>
				<div>
					<p className="font-bold mb-3">SELECT YOUR SIZE</p>
					<div className="flex flex-wrap gap-2 w-2/3">
						<Button className="rounded-none border-2 border-black w-16 ">XS</Button>
						<Button className="rounded-none bg-white w-16 border-2 border-black text-black hover:text-white">S</Button>
						<Button className="rounded-none bg-white w-16 border-2 border-black text-black hover:text-white " >M</Button>
						<Button className="rounded-none bg-white w-16 border-2 border-black text-black hover:text-white " >L</Button>
						<Button className="rounded-none bg-white w-16 border-2 border-black text-black hover:text-white " >XL</Button>
					</div>
				</div>
				
			</div>
			<div className="w-3/4 bg-red-500  flex-wrap content-center">
				<div className="flex items-center">
					<Button />
					1
					<Button />
				</div>
				<div>

				<p>{"5000 "}THB</p>
				
				</div>
				<div>

				<p>remvoe</p>
				</div>
			</div>
			
		</div> */
}
