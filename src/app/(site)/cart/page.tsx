import CartFooter from "@/components/cart/CartFooter";
import { RenderCart } from "@/components/cart/CartItem";
import Topbar from "@/components/cart/Topbar";

	
type Props = {};

const Cart = (props: Props) => {
	

	return (
		<div className="flex px-10 container min-h-[500px] flex-col justify-center pt-[5%] space-y-7 items-center">
			<Topbar page="cart" />

			<div className="w-[70%] space-y-3 min-h-[300px]">
				<RenderCart />
			</div>
			<CartFooter />
		</div>
	);
};

export default Cart;