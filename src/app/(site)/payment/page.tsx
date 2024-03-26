import Topbar from '@/components/cart/Topbar'
import PaymentForm from '@/components/payment/PaymentForm'
import React from 'react'
import { cookies } from "next/headers";
import destr from 'destr';
import { IUser } from '@/constants';

type Props = {}

const Payment = (props: Props) => {
	  const user = destr<IUser>(cookies().get("user")?.value);
    const token = cookies().get("token")?.value;
  return (
    <div className="flex px-10 container flex-col justify-center pt-[5%] space-y-7 items-center">
      <Topbar page="payment" />

      <PaymentForm user_id={user ? user.id : ""} token={token ? token : ""} />
    </div>
  );
}

export default Payment