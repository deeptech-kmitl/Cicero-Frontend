"use client"
import CartFooter from '@/components/cart/CartFooter'
import Topbar from '@/components/cart/Topbar'
import PaymentForm from '@/components/payment/PaymentForm'
import React from 'react'

type Props = {}

const Payment = (props: Props) => {
  return (
    <div className="flex px-10 container flex-col justify-center pt-[5%] space-y-7 items-center">
			<Topbar page="payment" />

				<PaymentForm />
			{/* <CartFooter /> */}
		</div>
  )
}

export default Payment