import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'
import { Sizes, userCredProductId } from './type'

type Props = {
    id: string,
    product_size: Sizes,
    user_id: string,
    token:string,
    updateSize : ({user_id,token,product_id,size}: userCredProductId & {size : Sizes}) => Promise<void>
}

const SizeButton = ({updateSize,product_size,id,user_id,token}: Props) => {
    const sizes : string[] = ["XS", "S", "M", "L", "XL"]
  return (
    <>
    {sizes.map((size , i ) => (
        <Button
        key={i}
            variant="sizebtn"
            className={cn({
                "bg-black text-white": size === product_size,
            })}
            onClick={() => updateSize({user_id,token,product_id:id,size : size as Sizes})}
            >
            {size}
        </Button>
    ))}  
    </>
    )
}

export default SizeButton