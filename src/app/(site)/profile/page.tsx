
import React, { useState } from "react";
import ProfileForm from "@/components/profile/ProfileForm";


type Props = {};

const profile = (props: Props) => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-[40vw] h-[100vh] flex flex-col">
        <div className="w-[100%] grid justify-items-center gap-1.5 mt-10">
          <div className="w-full">
            <ProfileForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
