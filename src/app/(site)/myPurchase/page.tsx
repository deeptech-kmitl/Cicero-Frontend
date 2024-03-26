import BackButton from "@/components/myPurchase/BackButton";
import React from "react";
import { cookies } from "next/headers";
import MyPurchaseTemplate from "@/components/myPurchase/MyPurchaseTemplate";
import { IUser } from "@/constants/interface";
import destr from "destr";

const myPurchase = () => {
  const token = cookies().get("token")?.value;
  const user = destr<IUser>(cookies().get("user")?.value || "{}");
  const isEmptyObject = (obj: any) => {
    return Object.keys(obj).length === 0;
  };
  if (isEmptyObject(user)) {
    return <div>SignIn, please.</div>;
  }
  console.log("user:", typeof user);
  const userId = user.id.toString();

  return (
    <div className="flex min-h-screen flex-col px-[20%] py-[5%]">
      <div className="text-xl font-semibold mb-10">MY PURCHASE</div>
      <MyPurchaseTemplate
        user_id={userId ? userId : ""}
        token={token ? token : ""}
      />
      <div className="flex justify-center mt-10">
        <BackButton />
      </div>
    </div>
  );
};

export default myPurchase;
