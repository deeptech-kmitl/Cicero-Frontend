import CartFooter from '@/components/cart/CartFooter'
import Topbar from '@/components/cart/Topbar'
import PaymentDetail from '@/components/payment/PaymentDetail'
import React from 'react'

type Props = {}

const Payment = (props: Props) => {
  return (
    <div className="flex px-10 container min-h-[500px] flex-col justify-center pt-[5%] space-y-7 items-center">
			<Topbar page="payment" />

			<div className="w-[70%] space-y-3 min-h-[300px]">
				<PaymentDetail />
			</div>
			{/* <CartFooter /> */}
		</div>
  )
}

export default Payment