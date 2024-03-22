"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useStore } from 'zustand'
import useCartStore from '@/store/cart'

type Props = {}

const CartFooter = (props: Props) => {
  const cartStore = useStore(useCartStore)
  return (
    <div className='flex p-5 justify-between items-center w-[65%]'>
        <p className='font-bold text-xl'>SUBTOTAL: {cartStore.cart.reduce((price ,item) => price + item.product_price, 0)}THB</p>
        <div className='space-x-4'>
            <Button className='bg-black text-white'>CONTINUE SHOPPING</Button>
            <Button className='bg-black text-white'>CHECKOUT</Button>
        </div>

    </div>
  )
}

export default CartFooter