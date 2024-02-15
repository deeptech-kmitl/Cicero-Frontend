export type CartItemProps = {
	id: string;
	image: string;
	title: string;
	description: string;
	sizes: "XS"| "S"| "M"| "L"| "XL";
	price: number;
    qty: number;
}
