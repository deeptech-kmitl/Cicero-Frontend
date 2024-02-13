import React from 'react'
import Image from 'next/image';
import { Heart } from "lucide-react";

// type CardHomePageProps = {
    
// }


const CardHomePage = () => {
  return (
    <div className="flex flex-col h-[25rem] w-full">
      <div className='h-[80%] w-full bg-black'></div>
      <div className='flex flex-row mt-2'>
        <div className='basis-10/12 text-base'>THE STAR CROP VEST</div>
        <Heart className='basis-2/12'/>
      </div>
      <div className='flex flex-row'>
        <div className='text-xl'>1,590</div>
        <div className='text-sm ml-1 mt-1.5 text-gray-400'>THB</div>
      </div>
    </div>
  );
};

export default CardHomePage;