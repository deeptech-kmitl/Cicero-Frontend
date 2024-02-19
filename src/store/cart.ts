import { create } from "zustand";
import { CartItemProps } from "@/components/cart/type";
type CartState = {
	cart: CartItemProps[];
	fetching: boolean;
	fetch: () => Promise<void>;
	addToCart: (item: CartItemProps) => void;
	removeFromCart: (id:string) => void;
	incrementQty: (id: string) => void;
	decrementQty: (id: string) => void;
    updateSize: (id: string, size: "XS"| "S"| "M"| "L"| "XL") => void;
};
const useCartStore = create<CartState>((set, get) => ({
	cart: [
		{
			id: "1",
			image: "image1.jpg",
			title: "Comfortable Cotton T-shirt",
			description:
				"A classic cotton t-shirt that offers comfort and style. Made from high-quality cotton fabric, this t-shirt is perfect for everyday wear.",
			sizes: "M",
			price: 799,
			qty: 1,
		},
		{
            id: "2",
			image: "image2.jpg",
			title: "Stylish Leather Wallet",
			description: "Crafted from genuine leather, this sleek wallet features multiple compartments for cards, cash, and coins. Keep your essentials organized in style.",
			sizes: "XL",
			price: 1499,
			qty: 1,
		},
	],
	fetching: false,
	fetch: async () => {
		const { cart, fetching } = get();
		if (!fetching && cart.length === 0) {
			const response = await fetch("https://dummyjson.com/products");
			set({ fetching: true });
			const data = await response.json();
			set({ cart: data.products, fetching: true });
		}
	},
	addToCart: (item: CartItemProps) =>
		set((state) => ({ cart: [...state.cart, item] })),
	removeFromCart: (id: string) =>
		set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
	incrementQty(id) {
		set((state) => {
			const index = state.cart.findIndex((i) => i.id === id);
			state.cart[index].qty += 1;
			return { cart: state.cart };
		});
	},
	decrementQty(id) {
		set((state) => {
			const index = state.cart.findIndex((i) => i.id === id);
			if (state.cart[index].qty > 1) {
				state.cart[index].qty -= 1;
			}
			return { cart: state.cart };
		});
	},
    updateSize(id, size) {
        set((state) => {
            const index = state.cart.findIndex((i) => i.id === id);
            state.cart[index].sizes = size;
            return { cart: state.cart };
        });
    },
}));
export default useCartStore;
