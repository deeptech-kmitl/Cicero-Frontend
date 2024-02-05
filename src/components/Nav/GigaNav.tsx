// components/GIGA.tsx

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "../ui/menubar";
import Image from "next/image";
import Link from "next/link";
type LinkProps = {
	href: string;
	title: string;
};
// this can width 100 but need to press the button to see the menu idk how to do it hover
const GIGA = () => {
	const MenCategories: LinkProps[] = [
		{ href: "/hoodies-sweatshirts", title: "Hoodies & Sweatshirts" },
		{ href: "/jackets", title: "Jackets" },
		{ href: "/pants", title: "Pants" },
		{ href: "/tracksuits", title: "Tracksuits" },
		{ href: "/coats", title: "Coats" },
		{ href: "/t-shirts-tops", title: "T-Shirts & Tops" },
		{ href: "/shorts", title: "Shorts" },
	];
	return (
		
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>MEN</MenubarTrigger>
					<MenubarContent>
						<div className="w-[100vw] flex flex-col  items-center ">
							{MenCategories.map((category, i) => {
								return(

								<MenubarItem key={i}>
									<Link href={category.href} >
										{category.title}
									</Link>
								</MenubarItem>
								)
							})}
						</div>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>WOMAN</MenubarTrigger>
					<MenubarContent>
					{MenCategories.map((category, i) => {
								return(

								<MenubarItem key={i}>
									<Link href={category.href} >
										{category.title}
									</Link>
								</MenubarItem>
								)
							})}
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>KIDS</MenubarTrigger>
					<MenubarContent>
						<div className="w-[100vw] flex flex-col justify-center items-center ">
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Print</MenubarItem>
						</div>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>SALE</MenubarTrigger>
					<MenubarContent>
						<div className="w-[100vw] flex flex-col justify-center items-center ">
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Print</MenubarItem>
						</div>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>NEW IN</MenubarTrigger>
					<MenubarContent>
						<div className="w-[100vw] flex flex-col justify-center items-center ">
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Print</MenubarItem>
						</div>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		
	);
};

export default GIGA;
