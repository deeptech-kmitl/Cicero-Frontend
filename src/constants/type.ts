import { Sizes } from "@/components/cart/type";

export type userCred = {
    token : string;
    user_id : string;
};

export type OrderItem = {
	image : string;
	title : string;
	price : number;
	size : Sizes;
	qty : number;
};