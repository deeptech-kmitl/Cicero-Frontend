import { create } from "zustand";
import { DetailsProps, userCredProductId } from "@/components/productde/type";
import getDetailsProduct from "@/api-caller/showdetailsproduct";
type ProductDetailState = {
	details: DetailsProps[];
	fetching: boolean;
	fetch: (token:string,user_id:string) => Promise<void>;

};
const useDetailsStore = create<ProductDetailState>((set, get) => ({
	details: [

	],
	fetching: false,
	fetch: async (token, user_id) => {
		const { details, fetching } = get();
		if (!fetching && details.length === 0) {
			try{
				// // const data = await getDetailsProduct();
				// console.log(data, 'data');
				// set({ details: data, fetching: true });
			}
			catch(error){
				throw error;
			}
		}
	},

}));
export default useDetailsStore;
