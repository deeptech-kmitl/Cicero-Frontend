"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useStore } from 'zustand'
import Link from 'next/link'
import { useToast } from '../ui/use-toast'
import { CartItemProps } from './type'

type Props = {
  cart: CartItemProps[]  
}

const CartFooter = ({cart}: Props) => {
  const {toast} = useToast()
  return (
    <div className='flex p-5 justify-between items-center w-[100%]'>
        <p className='font-bold text-xl'>SUBTOTAL: {cart.reduce((price ,item) => price + item.product_price * item.qty, 0)}{" "}THB</p>
        <div className='space-x-4'>
            <Button className='bg-black text-white'>CONTINUE SHOPPING</Button>
            <Link href={cart.length === 0 ? "" : "/payment"} onClick={
              () => {
                if(cart.length === 0){
                  toast({
                    title : "Please add item to cart first!",
                    variant : "destructive",
                    duration : 2000
                  })
                }
              }
            
            }>
            <Button className='bg-black text-white' >CHECKOUT</Button>
            </Link>
        </div>

    </div>
  )
}

export default CartFooter