"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Input } from "./ui/input";
import { Heart, Search, ShoppingBag, User } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
	const pathname = usePathname();
	return (
			
				 <div className="hidden md:flex items-center justify-evenly   w-full  text-sm"> 
				<div className="">
					<Link className="flex items-center space-x-2" href="/">
						<Image
							src={"/logo.png"}
							alt={""}
							width={30}
							height={30}
						/>
						<span>
							<p className="text-lg">Cicero</p>
						</span>
					</Link>
				</div>
				{/* middle */}
				<div className=" text-center text-base space-x-3 text-black">
					<Link
						href="/docs"
						className={cn(
							"transition-colors hover:text-foreground/80",
							pathname === "/docs"
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						MEN
					</Link>
					<Link
						href="/docs"
						className={cn(
							"transition-colors hover:text-foreground/80",
							pathname === "/docs"
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						WOMAN
					</Link>
					<Link
						href="/docs"
						className={cn(
							"transition-colors hover:text-foreground/80",
							pathname === "/docs"
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						KIDS
					</Link>
					<Link
						href="/docs"
						className={cn(
							"transition-colors hover:text-foreground/80",
							pathname === "/docs"
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						SALE
					</Link>
					<Link
						href="/docs"
						className={cn(
							"transition-colors hover:text-foreground/80",
							pathname === "/docs"
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						NEW IN
					</Link>
				</div>
				{/* Right */}
				{/* <div className="flex items-center justify-end gap-2	">
					
					<div className="relative flex items-center ">
						<Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
						<Input
							placeholder="Your search..."
							className=" pl-8 rounded-xl w-[200px] focus-visible:ring-slate-400"
						/>
					</div>
					<ShoppingBag className="h-6 w-6" />
						<Heart className="h-6 w-6" />
					<User className="h-6 w-6" />
				</div> */}
			</div>
			
	);
};

export default Navbar;
