"use client";
import React from "react";
import MobileNav from "./Nav/MobileNav";
import { ShoppingBag, Heart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Nav/Navbar";
import { IUser } from "@/constants/interface";
import { Button } from "./ui/button";
import { IoIosSettings } from "react-icons/io";

type Props = {
  userId: string;
};

const Header = ({ userId }: Props) => {
  const user: IUser = userId ? JSON.parse(userId) : "";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <div className="flex h-14 px-5 justify-between items-center">
        <div className="flex">
          <Link className="flex items-center space-x-2" href="/">
            <Image src={"/logo.png"} alt={""} width={30} height={30} />
            <span>
              <p className="text-lg">Cicero</p>
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <Navbar />
          <MobileNav />
        </div>
        <div className="flex items-center justify-end h-12 gap-4 pe-2">
          <div className="group relative cursor-pointer py-2 ">
            {user.fname ? (
              <div className="flex items-center justify-between space-x-2">
                {user.role_id && user.role_id == 2 && (
                  <Link href={"/admin/product"}>
                    <IoIosSettings className="h-7 w-7" />
                  </Link>
                )}
                <Link href={"/cart"}>
                  <ShoppingBag className="h-7 w-7" />
                </Link>
                <Link href={"/wishlist"}>
                  <Heart className="h-7 w-7" />
                </Link>
                <a
                  className="menu-hover my-2 py-2 text-base font-medium text-black"
                  onClick={() => {}}
                >
                  <User className="h-7 w-7" />
                </a>
              </div>
            ) : (
              <Link
                className="my-2 text-base min-w-full border-2 border-gray-100 font-semibold "
                href={"/auth"}
              >
                <Button variant="blackbtn" className="w-24 h-9 text-sm">
                  SIGN IN
                </Button>
              </Link>
            )}
            {user.fname && (
              <div className="transition-all bg-white absolute z-50 -left-16  rounded-lg flex flex-col px-5 py-3 text-gray-800 shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                <>
                  <Link href={"/profile"}>
                    <p>
                      Hi, {user.fname} {user.lname}
                    </p>
                  </Link>
                  <Link
                    className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href={"/cart"}
                  >
                    Cart
                  </Link>
                  <Link
                    className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href={"/wishlist"}
                  >
                    Wishlist
                  </Link>
                  <Link
                    className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href={"/myPurchase"}
                  >
                    My Purchase
                  </Link>
                  <Link
                    className="my-2 text-base block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href={"/signout"}
                  >
                    Sign Out
                  </Link>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
