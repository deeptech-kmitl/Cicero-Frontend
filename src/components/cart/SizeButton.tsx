import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
    id: string,
    product_size: "XS"| "S"| "M"| "L"| "XL"
    updateSize : (id: string, size: "XS"| "S"| "M"| "L"| "XL") => void
}

const SizeButton = ({updateSize,product_size,id}: Props) => {
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
            onClick={() => updateSize(id, size as "XS"| "S"| "M"| "L"| "XL")}
            >
            {size}
        </Button>
    ))}  
    </>
    )
}

export default SizeButton