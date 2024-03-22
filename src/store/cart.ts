import { create } from "zustand";
import { CartItemProps, Sizes, userCredProductId } from "@/components/cart/type";
import { decreaseQty, getCartItems, increaseQty, removeFromCart, updateSize } from "@/api-caller/cart";
type CartState = {
	cart: CartItemProps[];
	fetching: boolean;
	fetch: (token:string,user_id:string) => Promise<void>;
	addToCart: (item: CartItemProps) => void;
	removeFromCart: ({user_id,token,product_id}: userCredProductId) => Promise<void>;
	incrementQty: ({user_id,token,product_id}: userCredProductId) => Promise<void>;
	decrementQty: ({user_id,token,product_id}: userCredProductId) => Promise<void>;
    updateSize: ({user_id,token,product_id,size}: userCredProductId & {size : Sizes}) => Promise<void>;
};
const useCartStore = create<CartState>((set, get) => ({
	cart: [
		
	],
	fetching: false,
	fetch: async (token, user_id) => {
		const { cart, fetching } = get();
		if (!fetching && cart.length === 0) {
			try{
				const data = await getCartItems({user_id, token});
				console.log(data, 'data');
				set({ cart: data, fetching: true });
			}
			catch(error){
				throw error;
			}
		}
	},
	addToCart: (item: CartItemProps) =>
		set((state) => ({ cart: [...state.cart, item] })),
	removeFromCart: async({user_id,token,product_id}) => {
		try{
			await removeFromCart({user_id,token,product_id});
			set((state) => ({ cart: state.cart.filter((i) => i.id !== product_id) }))
		}catch(error){
			throw error;
		}
	},
	incrementQty : async({user_id,token,product_id})=> {
		try{
			console.log(token)
			await increaseQty({user_id,token,product_id}); 
			set((state) => {
			const index = state.cart.findIndex((i) => i.id === product_id);
			state.cart[index].qty += 1;
			return { cart: state.cart }})
		}catch(error){
			throw error;
		}
	},
	decrementQty : async({user_id,token,product_id}) => {
		try{
			await decreaseQty({user_id,token,product_id}); 
			set((state) => {
			const index = state.cart.findIndex((i) => i.id === product_id);
			state.cart[index].qty -= 1;
			return { cart: state.cart }})
		}catch(error){
			throw error;
		}
	},
    updateSize : async({user_id,token,product_id,size}) => {
		try{
			await updateSize({user_id,token,product_id,size});
			set((state) => {
				const index = state.cart.findIndex((i) => i.id === product_id);
				state.cart[index].size = size;
				return { cart: state.cart };
			});
		}catch(error){
			throw error;
		}
    },
}));
export default useCartStore;
