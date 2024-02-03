import CartFooter from "@/components/cart/CartFooter";
import CartItem from "@/components/cart/CartItem";
import Topbar from "@/components/cart/Topbar";
import { CartItemProps } from "@/components/cart/type";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
	const cartItems: CartItemProps[] = [
		{
			image: "image1.jpg",
			title: "Comfortable Cotton T-shirt",
			description: "A classic cotton t-shirt that offers comfort and style. Made from high-quality cotton fabric, this t-shirt is perfect for everyday wear.",
			sizes: "M",
			price: 799,
			qty: 1,
		},
		{
			image: "image2.jpg",
			title: "Stylish Leather Wallet",
			description: "Crafted from genuine leather, this sleek wallet features multiple compartments for cards, cash, and coins. Keep your essentials organized in style.",
			sizes: "XL",
			price: 1499,
			qty: 1,
		},
		{
			image: "image3.jpg",
			title: "Cozy Knit Sweater",
			description: "Stay warm and fashionable with this cozy knit sweater. With its soft fabric and trendy design, it's perfect for chilly days and nights.",
			sizes: "L",
			price: 2299,
			qty: 1,
		}
	];
	
	
	return (
		<div className="flex px-10 container flex-col justify-center min-h-screen pt-[5%] space-y-7 items-center">
			
			<Topbar page="cart" />
			
			<div className="w-[70%] space-y-3">
				{cartItems.map((item, i) => (
					<CartItem key={i} {...item} />
				))}
				
			</div>
			<CartFooter />
		</div>
	);
};

export default Cart;
