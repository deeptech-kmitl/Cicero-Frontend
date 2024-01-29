import React from "react";
import MobileNav from "./Nav/MobileNav";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import GIGA from "./Nav/GigaNav";
import Link from "next/link";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Navbar } from "./Nav/Navbar";
type Props = {};

const Header = (props: Props) => {
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
							<p className="text-lg">Cicero</p>
						</span>
					</Link>
				</div>
				<div className="flex  justify-center">
				{/* <GIGA /> */}
				<Navbar />
				<MobileNav />
				</div>
				<div className="flex items-center justify-end h-12 gap-2">
					<ShoppingBag className="h-7 w-7" />
					<Heart className="h-7 w-7" />
					<DropdownMenu>
						<DropdownMenuTrigger>
							<User className="h-7 w-7" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Header;
