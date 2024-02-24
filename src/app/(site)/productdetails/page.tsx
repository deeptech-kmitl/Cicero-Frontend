import { Button } from '@/components/ui/Button'
import React from 'react'
import Image from 'next/image'

type Props = {}

const ProductDetails = (props: Props) => {
  return (
    <div className="w-full h-[750px] mt-[80px] flex justify-center">
        <div className='bg-[red] w-[75px] h-[400px] mt-[50px] overflow-scroll'>
          <div className='bg-[yellow] w-full h-[100px]'></div>
          <div className='bg-[yellow] w-full h-[100px]'></div>
          <div className='bg-[yellow] w-full h-[100px]'></div>
          <div className='bg-[yellow] w-full h-[100px]'></div>
          <div className='bg-[yellow] w-full h-[100px]'></div>
          <div className='bg-[yellow] w-full h-[100px]'></div>
        </div>

        <div className='bg-[green] w-[300px] h-[750px] ml-[100px] overflow-scroll'>

        </div>
        <div className='w-[300px] h-[450px] ml-[60px]'>
            <h1 className='font-bold	text-[25px]'>MATTER TANK TOP</h1>
            <h3 className='text-[25px]'>2,390 <span className='text-[15px] opacity-50'>THB</span></h3>
            <div className='w-full h-[150px] mt-[10px] overflow-scroll' ><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ex in distinctio perspiciatis quidem pariatur debitis, iusto ipsam laboriosam fugit vitae laudantium natus? Soluta amet numquam consequatur! Corporis, deserunt animi.</p></div>
            <h1 className='font-bold	text-[20px] mt-[15px]'>SIZE</h1>
            <div className='w-[200px] h-[100px] grid grid-cols-3 gap-x-0.5	'>
              <Button className='w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]'>XS</Button>
              <Button className='w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]'>S</Button>
              <Button className='w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]'>M</Button>
              <Button className='w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]'>L</Button>
              <Button className='w-[60px] h-[35px] rounded-none text-[black] outline ring-black bg-[white]'>XL</Button>
            </div>
            <Button className='bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black'>
                EDIT
            </Button>
            <Button className='bg-white w-full h-[40px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black'>
                DELETE
            </Button>
        </div>
    </div>
  )
}

export default ProductDetails