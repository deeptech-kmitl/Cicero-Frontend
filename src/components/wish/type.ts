import { userCred } from '@/constants/type';
export type WishlistProps = {
	id: string;
	images: Image[];
	product_title: string;
	product_desc: string;
	size: Sizes;
	product_price: number;
}

export type Sizes = "XS"| "S"| "M"| "L"| "XL" |"XXL";

export type Image = {
	id: string;
	url: string;
	filename : string;
}

export type userCredProductId = userCred & {product_id: string};