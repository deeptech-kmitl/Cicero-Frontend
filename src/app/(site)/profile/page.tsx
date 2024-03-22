
import React from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import { cookies } from "next/headers";

type Props = {};

const profile = (props: Props) => {
  const user = cookies().get("user")?.value;
  const token = cookies().get("token")?.value;
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-[40vw] h-[100vh] flex flex-col">
        <div className="w-[100%] grid justify-items-center gap-1.5 mt-10">
          <div className="w-full">
            <ProfileForm userId={user ? user : ""} tokenId ={token ? token : ""}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
