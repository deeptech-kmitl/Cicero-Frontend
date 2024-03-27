import Breadcrumb from "@/components/Breadcrumb";
import CartFooter from "@/components/cart/CartFooter";
import RenderCart from "@/components/cart/CartItem";
import { IUser } from "@/constants";
import { decodeCookie } from "@/lib/utils";
import destr from "destr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {};

const Cart = async (props: Props) => {
  const token = cookies().get("token")?.value!;
  const user_cookie = cookies().get("user")?.value!;
  const user = user_cookie ? destr<IUser>(decodeCookie(user_cookie)) : null;
  if (!user) {
    return redirect("/auth");
  }
  return (
    <div className="flex px-10 container min-h-[500px] flex-col justify-center pt-10 space-y-7 items-center">
      <Breadcrumb state="cart" />
      <div className="w-[70%] space-y-3 min-h-[300px]">
        <RenderCart token={token} user_id={user.id} />
      </div>
      {/* <CartFooter /> */}
    </div>
  );
};

export default Cart;
