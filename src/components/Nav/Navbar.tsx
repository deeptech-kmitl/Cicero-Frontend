"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { User } from "lucide-react";


type Category = {
	href: string;
	title: string;
};
const MenCategories: Category[] = [
	{ href: "/hoodies-sweatshirts", title: "Hoodies & Sweatshirts" },
	{ href: "/jackets", title: "Jackets" },
	{ href: "/pants", title: "Pants" },
	{ href: "/tracksuits", title: "Tracksuits" },
	{ href: "/coats", title: "Coats" },
	{ href: "/t-shirts-tops", title: "T-Shirts & Tops" },
	{ href: "/shorts", title: "Shorts" },
];
const WomenCategories: Category[] = [
	{ href: "/tops", title: "Tops" },
	{ href: "/shorts", title: "Shorts" },
	{ href: "/skirts", title: "Skirts" },
	{ href: "/trousers", title: "Trousers" },
	{ href: "/sets", title: "Sets" },
	{ href: "/dresses", title: "Dresses" },
	{ href: "/jumpsuits", title: "Jumpsuits" }
  ];
  
  const KidsCategories: Category[] = [
	{ href: "/tops", title: "Tops" },
	{ href: "/shorts", title: "Shorts" },
	{ href: "/skirts", title: "Skirts" },
	{ href: "/trousers", title: "Trousers" },
	{ href: "/hoodies", title: "Hoodies" }
  ];
  
  const SaleCategories: Category[] = [
	{ href: "/men", title: "Men" },
	{ href: "/women", title: "Women" },
	{ href: "/kids", title: "Kids" }
  ];


export function Navbar() {
	return (
		<NavigationMenu className="hidden md:flex ">
			<NavigationMenuList>
				<NavItem title={"MEN"} array={MenCategories} />
				<NavItem title={"WOMAN"} array={WomenCategories} />
				<NavItem title={"KIDS"} array={KidsCategories} />
				<NavItem title={"SALE"} array={SaleCategories} />
				<NavItem title={"NEW IN"} array={SaleCategories} />
			</NavigationMenuList>
			{/* </div> */}
		</NavigationMenu>
	);
}

type NavItemProps = {
	title: string;
	array: Category[];
};

const NavItem = ({ title, array }: NavItemProps) => {
	return (
		<NavigationMenuItem>
				<Link href={`/product/${title.toLowerCase()}`}>
			<NavigationMenuTrigger>
				{title}
				</NavigationMenuTrigger>
				</Link>
			<NavigationMenuContent>
				<ul className="flex flex-col md:w-[110vw]  items-center ">
					{array.map((component) => (
						<ListItem
							key={component.title}
							title={component.title}
							href={`product/${title.toLowerCase()}${component.href}`}
						>
							
						</ListItem>
					))}
				</ul>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li className="w-full text-center">
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md w-full p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
