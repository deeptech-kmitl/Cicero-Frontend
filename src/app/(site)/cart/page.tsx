import Breadcrumb from "@/components/Breadcrumb";
import CartFooter from "@/components/cart/CartFooter";
import RenderCart from "@/components/cart/CartItem";
import { decodeCookie } from "@/lib/utils";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";

	
type Props = {};

const Cart = async (props: Props) => {
	
	const token = cookies().get("token")?.value!;
	const user_cookie = cookies().get("user")?.value!;
	const user = user_cookie ? decodeCookie(user_cookie) : null;
	const queryClient  = new QueryClient();
	// if(user){
	// // await queryClient.prefetchQuery({
	// // 	queryKey: ["cart"],
	// 	const cart = await  getCartItems({user_id: user?.id, token: token})
	// }else 
	if (!user){
		return ( <div> Please sign in to view your cart</div>)
	}
	return (
		<div className="flex px-10 container min-h-[500px] flex-col justify-center pt-[5%] space-y-7 items-center">
			<Breadcrumb state="cart"/>
			<div className="w-[70%] space-y-3 min-h-[300px]">
			<HydrationBoundary state={dehydrate(queryClient)}>
				<RenderCart token={token} user_id={user.id} />
				</HydrationBoundary>
			</div>
			<CartFooter />
		</div>
	);
};

export default Cart;
