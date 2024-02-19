"use client";
import React from "react";
import MobileNav from "./Nav/MobileNav";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import GIGA from "./Nav/GigaNav";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Nav/Navbar";
import { IUser } from "@/constants/interface";
type Props = {
	userId : string
};

const Header = ({userId}: Props) => {
	const user:IUser  = JSON.parse(userId || "{}");
	console.log(user,"header user");
	return (
		<header className="sticky top-0 z-50 w-full border-b-2 border-black  bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="flex h-14 px-5 container  justify-between items-center">
				<div className="flex ">
					<Link className="flex items-center space-x-2" href="/">
						<Image
							src={"/logo.png"}
							alt={""}
							width={30}
							height={30}
						/>
						<span>
							<p className="text-lg">Cicero : {user.email}</p>
						</span>
					</Link>
				</div>
				<div className="flex  justify-center">
					{/* <GIGA /> */}
					<Navbar />
					<MobileNav />
				</div>
				<div className="flex items-center justify-end h-12 gap-4 pe-2">
					<ShoppingBag className="h-7 w-7" />
					<Heart className="h-7 w-7" />
					<div className="group relative cursor-pointer py-2 ">
						<div className="flex items-center justify-between space-x-1">
							<a
								className="menu-hover my-2 py-2 text-base font-medium text-black"
								onClick={() => {}}
							>
								<User className="h-7 w-7" />
							</a>
						</div>
						<div className="transition-all absolute z-50 -left-16  rounded-lg flex flex-col px-5 py-3 text-gray-800 shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
							{!user.fname && 
							<Link className="my-2 text-base min-w-full  border-b border-gray-100 px-3 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={"/auth"}>
								Sign&nbsp;In
							</Link>
							}
							
							{user.fname && (<>
								<p>
								Hi, {user.fname} {user.lname}	
							</p>
								<Link className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={"/cart"}>
								Cart
							</Link>
							<Link className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={"/wishlist"}>
								Wishlist
							</Link>
							<Link className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={"/myPurchase"}>
								My Purchase
							</Link>
							<Link className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={"/signout"} >
								Sign Out
							</Link>
							</>
							)}
							
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
