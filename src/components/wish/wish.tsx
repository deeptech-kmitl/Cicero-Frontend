import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";


type Props = {};

const Wish = (props: Props) => {
  return (
    <>
      {/* Header */}
      <div className="flex  w-full h-[50px]">
        <div className=" h-full w-[1100px]">
          <h1 className="font-medium text-[20px] mt-[10px] ml-[10px]">
            WISHLIST
          </h1>
        </div>
        <div className="flex h-full items-center justify-center w-[220px]">
          <Button className="w-[120px] rounded-none">
            <h1>SAVE</h1>
          </Button>
        </div>
      </div>

      {/* Block เสื้อ */}
      <div className="flex w-full h-[640px] justify-center mt-[60px]">
        <div className="h-full w-[1250px] overflow-scroll">
          <div className="grid grid-cols-4 gap-4 ml-[20px]">
            <div className="bg-transparent w-[240px] h-[480px]">
              <div className="w-full h-[339px] bg-red-400">
                <Image
                  src="/profile.png"
                  width={240}
                  height={339}
                  alt="Picture"
                />
              </div>

              <div className="w-full h-[65px]">
                <h1 className="text-[18px] mt-3">I&apos;D DO IT AGAIN TOP</h1>
                <h3 className="text-[25px]">
                  2,390 <span className="text-[18px]">THB</span>
                </h3>
              </div>

              <Button className="bg-white w-full h-[45px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
                ADD TO CART
              </Button>
              <Button className="bg-white w-full h-[45px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
                Remove From Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wish;

// {/* Header */}
// <div className="flex  w-full h-[50px]">
// <div className=" h-full w-[1100px]">
//   <h1 className="font-medium text-[20px] mt-[10px] ml-[10px]">
//     WISHLIST
//   </h1>
// </div>
// <div className="flex h-full items-center justify-center w-[220px]">
//   <Button className="w-[120px] rounded-none">
//     <h1>SAVE</h1>
//   </Button>
// </div>
// </div>

// {/* Block เสื้อ */}
// <div className="flex w-full h-[640px] justify-center mt-[60px]">
// <div className="h-full w-[1250px] overflow-scroll">
//   <div className="grid grid-cols-4 gap-4 ml-[20px]">
//     <div className="bg-transparent w-[240px] h-[480px]">
//       <div className="w-full h-[339px] bg-red-400">
//         <Image
//           src="/profile.png"
//           width={240}
//           height={339}
//           alt="Picture"
//         />
//       </div>

//       <div className="w-full h-[65px]">
//         <h1 className="text-[18px] mt-3">I&apos;D DO IT AGAIN TOP</h1>
//         <h3 className="text-[25px]">
//           2,390 <span className="text-[18px]">THB</span>
//         </h3>
//       </div>

//       <Button className="bg-white w-full h-[45px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
//         ADD TO CART
//       </Button>
//       <Button className="bg-white w-full h-[45px] mt-[10px] text-[18px] rounded-none font-semibold outline ring-black text-black">
//         Remove From Wishlist
//       </Button>
//     </div>
//   </div>
// </div>
// </div>
