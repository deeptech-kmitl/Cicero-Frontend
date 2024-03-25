import { create } from "zustand";
import { WishlistProps, userCredProductId } from "@/components/wish/type";
import getWishlist, {removeWishlist}  from "@/api-caller/wishlist";
type WishState = {
	wish: WishlistProps[];
	fetching: boolean;
	fetch: (token:string,user_id:string) => Promise<void>;
	addToWish: (item: WishlistProps) => void;
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
	addToWish: (item: WishlistProps) =>
		set((state) => ({ wish: [...state.wish, item] })),
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
