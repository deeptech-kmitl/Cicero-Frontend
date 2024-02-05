import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

type Props = {};

const profile = (props: Props) => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-[40vw] h-[100vh] flex flex-col">
        <div className="w-[100%] h-[40%] flex flex-col justify-center items-center mt-2">
          <Image
            className="rounded-full bg-gray-400 w-[12em] h-[12em] mb-5"
            src={"https://via.placeholder.com/150"}
            width={0}
            height={0}
            sizes="100vw"
            alt="image description"
          />
          {/* <Input id="picture" type="file" className='w-[220px]'/> */}
        </div>
        <div className="w-[100%] h-[50%] grid justify-items-center gap-1.5">
          <div className='w-full'>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" className=''/>
          </div>
        </div>
        <div className="bg-green-300 w-[100%] h-[10%]"></div>
      </div>
      {/* <Input
        className="border-gray-400 border-2"
        placeholder="First name"
        disabled={isInputDisabled}
        value={first_name}
        onChange={(e) => setFname(e.target.value)}
      /> */}
    </div>
  );
};

export default profile;
