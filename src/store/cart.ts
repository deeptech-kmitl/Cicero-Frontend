// import { create } from "zustand";
// import { CartItemProps, Sizes, userCredProductId } from "@/components/cart/type";
// import { addToCart, decreaseQty, getCartItems, increaseQty, removeFromCart, updateSize } from "@/api-caller/cart";
// import { userCred } from "@/constants/type";
// type CartState = {
// 	cart: CartItemProps[];
// 	totalPrice: number;
// 	fetching: boolean;
// 	fetch: (token:string,user_id:string) => Promise<void>;
// 	setCart : (cart : CartItemProps[]) => void;
// 	addToCart: ({item,user_id,token}: {item : CartItemProps} & userCred) => void;
// 	removeFromCart: ({user_id,token,cart_id,size}: userCred & {size : Sizes,cart_id : string}) => Promise<void>;
// 	incrementQty: ({user_id,token,cart_id,product_id}: userCredProductId & {product_id:string, size : Sizes}) => Promise<void>;
// 	decrementQty: ({user_id,token,cart_id,product_id}: userCredProductId & {product_id:string, size : Sizes}) => Promise<void>;
//     updateSize: ({user_id,token,cart_id,size}: userCredProductId & {size : Sizes}) => Promise<void>;
// };
// const useCartStore = create<CartState>((set, get) => ({
// 	cart: [
		
// 	],
// 	totalPrice : 0,
// 	fetching: false,
// 	fetch: async (token, user_id) => {
// 		const { cart, fetching } = get();
// 		if (!fetching && cart.length === 0) {
// 			try{
// 				const data = await getCartItems({user_id, token});
// 				console.log(data, 'data');
// 				set({ cart: data, fetching: true });
// 			}
// 			catch(error){
// 				throw error;
// 			}
// 		}
// 	},
// 	setCart : (cart) => {
// 		set({cart});
// 	},
// 	addToCart: async({item,user_id,token}: {item : CartItemProps, user_id : string, token:string}) =>{
// 		try{
// 			console.log(get().cart, item.cart_id, 'cart')
// 			// if(get().cart.find((i) => i.cart_id === item.cart_id && i.size === item.size)){
// 			// 	console.log('increase')
// 			// 	const data = await get().incrementQty({user_id,token,cart_id: item.cart_id,product_id: item.id,size: item.size});
// 			// 	console.log(data)
// 			// 	console.log(get().cart)
// 			// }else{

// 				const cartAdded = await addToCart({user_id: user_id, token: token, product_id: item.id, qty: item.qty, size: item.size});
// 				console.log(cartAdded, 'cartAdded');
// 				set((state) => ({ 
// 					cart: [...state.cart, {...item, cart_id: cartAdded.toString()}] ,
// 				}))
// 			// }
// 		}catch(err){
// 			throw err;
// 		}
// 	},
// 	removeFromCart: async({user_id,token,cart_id, size}) => {
// 		try{
// 			await removeFromCart({user_id,token,cart_id});
// 			set((state) => ({ 
// 				cart:  state.cart.filter((i) => i.cart_id !== cart_id)

// 			}))
// 		}catch(error){
// 			throw error;
// 		}
// 	},
// 	incrementQty : async({user_id,token,cart_id, product_id,size})=> {
// 		try{
// 			console.log(token)
// 			await increaseQty({user_id,token,cart_id}); 
// 			set((state) => {
// 			const index = state.cart.findIndex((i) => i.id === product_id && i.size == size );
// 			state.cart[index].qty += 1;
// 			return { cart: state.cart }})
// 		}catch(error){
// 			throw error;
// 		}
// 	},
// 	decrementQty : async({user_id,token,cart_id, product_id,size}) => {
// 		try{
// 			await decreaseQty({user_id,token,cart_id}); 
// 			set((state) => {
// 			const index = state.cart.findIndex((i) =>  i.id === product_id && i.size === size );
// 			state.cart[index].qty -= 1;
// 			return { cart: state.cart }})
// 		}catch(error){
// 			throw error;
// 		}
// 	},
//     updateSize : async({user_id,token,cart_id,size}) => {
// 		try{
// 			await updateSize({user_id,token,cart_id,size});
// 			set((state) => {
// 				const index = state.cart.findIndex((i) => i.id === cart_id);
// 				state.cart[index].size = size;
// 				return { cart: state.cart };
// 			});
// 		}catch(error){
// 			throw error;
// 		}
//     },
// }));
// export default useCartStore;
