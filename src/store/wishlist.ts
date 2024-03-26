import { create } from "zustand";
import { WishlistProps, userCredProductId } from "@/components/wish/type";
import getWishlist, {removeWishlist, addWishlist}  from "@/api-caller/wishlist";
import { userCred } from "@/constants/type";

type WishState = {
	wish: WishlistProps[];
	fetching: boolean;
	fetch: (token:string,user_id:string) => Promise<void>;
	addToWish: ({item,user_id,token}: {item : WishlistProps} & userCred) => void;
	removeFromWish: ({user_id,token,product_id}: userCredProductId) => Promise<void>;

};
const useWishStore = create<WishState>((set, get) => ({
	wish: [

	],
	fetching: false,
	fetch: async (token, user_id) => {
		const { wish, fetching } = get();
		if (!fetching && wish.length === 0) {
			try{
				const data = await getWishlist({user_id, token});
				console.log(data, 'data');
				set({ wish: data, fetching: true });
			}
			catch(error){
				throw error;
			}
		}
	},
	addToWish: async({item,user_id,token}: {item : WishlistProps, user_id : string, token:string})  => {
		try{
				await addWishlist({user_id: user_id, token: token, product_id: item.id});
				set((state) => ({
					wish: [...state.wish, item] ,
				}))
		}catch(err){
			throw err;
		}
	},
	removeFromWish: async({user_id,token,product_id}) => {
		try{
			await removeWishlist({user_id,token,product_id});
			set((state) => ({ wish: state.wish.filter((i) => i.id !== product_id) }))
		}catch(error){
			throw error;
		}
	},
}));
export default useWishStore;
