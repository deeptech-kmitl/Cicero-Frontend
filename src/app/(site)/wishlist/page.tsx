import { Button } from '@/components/ui/Button'
import React from 'react'

type Props = {}

const Wishlist = (props: Props) => {
  return (
    <div className="w-full h-[750px] mt-[60px] flex justify-center">

        {/* Block */}
        <div className='w-[1320px] h-[750px]'>

             {/* Header */}
            <div className='flex  w-full h-[50px]'>
                <div className=' h-full w-[1100px]'>
                    <h1 className='font-medium text-[20px] mt-[10px] ml-[10px]'>WISHLIST</h1>
                </div>
                <div className='flex h-full items-center justify-center w-[220px]'>
                    <Button className='w-[120px] rounded-none'><h1>SAVE</h1></Button>
                </div>
            </div>

            {/* Block เสื้อ */}
            <div className='flex w-full h-[640px] justify-center mt-[60px]'>
                <div className='h-full w-[1250px] overflow-scroll'>
                    <div className='grid grid-cols-4 gap-4 ml-[20px]'>
                        <div className='bg-[black] w-[240px] h-[460px]'></div>
                        <div className='bg-[black] w-[240px] h-[460px]'></div>
                        <div className='bg-[black] w-[240px] h-[460px]'></div>
                        <div className='bg-[black] w-[240px] h-[460px]'></div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Wishlist