"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWishlist, removeWishlist } from "@/api-caller";
import {
  IAddWishlist,
  IFormattedErrorResponse,
  IWishlist,
} from "@/constants/interface";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { UseMutationResult, useMutation } from "react-query";

interface WishlistProps {
  token: string;
  user_id: string;
}

const Wish = ({ token, user_id }: WishlistProps) => {
  const removeWishlistMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    IAddWishlist
  > = useMutation(removeWishlist);
  const router = useRouter();
  const [wishlist, setWishlist] = useState<IWishlist[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    getMyWishlist();
  }, []);

  const getMyWishlist = async () => {
    const data = await getWishlist({ token, user_id });
    setWishlist(data);
  };

  const onEdit = async () => {
    setIsEditable(!isEditable);
  };

  const onDelete = async (product_id: string) => {
    const body: IAddWishlist = {
      user_id,
      product_id,
      tokenId: token,
    };
    removeWishlistMutation.mutate(body, {
      onSuccess() {
        setWishlist((prev) => {
          const updateWishlist = prev.filter((item) => item.id != product_id);
          return updateWishlist;
        });
      },
    });
  };
  return (
    <>
      {/* Header */}
      <div className="w-full h-[50px] flex justify-center">
        <div className="w-[1300px] h-full">
          <h1 className="font-medium text-[20px] mt-[10px] ml-[10px]">
            WISHLIST
          </h1>
        </div>
        <Button
          variant={isEditable ? "blackbtn" : "noFillbtn"}
          className="w-[120px] rounded-none"
          onClick={onEdit}
        >
          {isEditable ? "SAVE" : "EDIT"}
        </Button>
      </div>

      {/* Block เสื้อ */}
      <div className="flex w-full h-full justify-center mt-[60px]">
        <div className="h-full grid grid-cols-4 gap-4">
          {wishlist.length > 0 &&
            wishlist.map((item, index) => (
              <div
                key={index}
                className="w-[20rem] relative flex flex-col justify-between"
              >
                <div>
                  <Image
                    className="w-full object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="product"
                    src={item.images[0].url}
                  />
                  <div className="w-full py-4">
                    <h1 className="basis-10/12 text-[16px] font-[500] Inter cursor-default">
                      {item.product_title}
                    </h1>
                    <div className="flex flex-row">
                      <div className="text-[20px] font-[400] Inter">
                        {formatPrice(item.product_price)}
                      </div>
                      <div className="text-[11px] font-[500] ml-1 mt-2.5 text-gray-400 Inter">
                        THB
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  {isEditable ? (
                    <Button
                      variant="noFillbtn"
                      onClick={() => onDelete(item.id)}
                    >
                      DELETE
                    </Button>
                  ) : (
                    <Button
                      variant="noFillbtn"
                      onClick={() => router.push(`/productdetails/${item.id}`)}
                    >
                      ADD TO CART
                    </Button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Wish;
