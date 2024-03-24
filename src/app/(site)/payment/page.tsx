"use client"
import CartFooter from '@/components/cart/CartFooter'
import Topbar from '@/components/cart/Topbar'
import PaymentForm from '@/components/payment/PaymentForm'
import React from 'react'
import { destr } from 'destr';
import { IUser } from '@/constants/interface';
import { cookies } from 'next/headers'

type Props = {}

const Payment = (props: Props) => {
	const user = destr<IUser>(cookies().get('user')?.value || '{}')
	const token = cookies().get('token')?.value || ''
  return (
    <div className="flex px-10 container flex-col justify-center pt-[5%] space-y-7 items-center">
			<Topbar page="payment" />

				<PaymentForm user_id={user.id} token={token} />
			{/* <CartFooter /> */}
		</div>
  )
}

export default Payment