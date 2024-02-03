import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const CartFooter = (props: Props) => {
  return (
    <div className='flex p-5 justify-between items-center w-[65%]'>
        <p className='font-bold text-xl'>SUBTOTAL: 120000 THB</p>
        <div className='space-x-4'>
            <Button className='bg-black text-white'>CONTINUE SHOPPING</Button>
            <Button className='bg-black text-white'>CHECKOUT</Button>
        </div>

    </div>
  )
}

export default CartFooter