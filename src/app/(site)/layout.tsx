
import Header from "@/components/Header";
import MobileNav from "@/components/Nav/MobileNav";
import {Navbar} from "@/components/Nav/Navbar";


import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = cookies().get("user")?.value;
	return (
		<div className="h-screen overflow-x-hidden scroll-smooth">
			{user && <p>{user}</p>}
			<Header userId={user? user : '' }  />
			<main>{children}</main>
			
		</div>
	);
}