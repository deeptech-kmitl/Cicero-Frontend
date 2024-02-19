import React from 'react'
import ShippingForm from './ShippingForm'
import OrderSummary from './OrderSummary'
// import CreditCardForm from './CreditCardForm'

type Props = {}

const PaymentDetail = (props: Props) => {
  return (
    <div className='p-5 space-x-4'>
      <div className='flex '>
        <ShippingForm />
        <OrderSummary />
      </div>
    {/* <CreditCardForm /> */}
    </div>
  )
}

export default PaymentDetail