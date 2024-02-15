import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React from "react";

type TopBarProps = {
	page:string
};

const Topbar = ({page}: TopBarProps) => {
	return (
		<div className="flex w-[15%] justify-center items-center gap-4">
			<Link href={'/cart'} className={cn("font-bold text-lg",{
				"text-slate-300": page !== "cart",
				"text-black": page === "cart"
			})}>SHOPPING&nbsp;CART</Link>
			<Separator className="h-0.5 bg-slate-300" />
			<Link href={'payment'} className={cn("font-bold text-lg",{
				"text-slate-300": page !== "payment",
				"text-black": page === "payment"
			})}>PAYMENT</Link>
			<Separator className="h-0.5 bg-slate-300"/>
			<Link href={'/confirmation'} className={cn("font-bold text-lg",{
				"text-slate-300": page !== "confirm",
				"text-black": page === "confirm"
			})}>CONFIRMATION</Link>
		</div>
	);
};

export default Topbar;
