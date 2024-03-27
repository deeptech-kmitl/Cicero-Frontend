"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  IAddCart,
  IAddWishlist,
  IFormattedErrorResponse,
  IProduct,
  allSize,
} from "@/constants";
import { UseMutationResult, useMutation } from "react-query";
import { getWishlist, addWishlist, addToCart } from "@/api-caller";
import { useToast } from "../ui/use-toast";

interface ProductDetailProps {
  tokenId: string;
  user_id: string;
  data: IProduct;
}

const ProductDetail = ({ tokenId, user_id, data }: ProductDetailProps) => {
  const addWishlistMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    IAddWishlist
  > = useMutation(addWishlist);
  const addCartMutation: UseMutationResult<
    any,
    IFormattedErrorResponse,
    IAddCart
  > = useMutation(addToCart);
  const { toast } = useToast();
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [size, setSize] = useState<string>("");

  useEffect(() => {
    getMyWishlist();
  }, []);

  const getMyWishlist = async () => {
    const wishlist = await getWishlist({ token: tokenId, user_id });
    const filterProduct = await wishlist.filter((item) => item.id == data.id);
    setIsWishlist(filterProduct.length > 0 ? true : false);
  };

  const onWishlist = async () => {
    if (user_id) {
      const body: IAddWishlist = {
        user_id,
        tokenId,
        product_id: data.id,
      };
      addWishlistMutation.mutate(body, {
        onSuccess() {
          setIsWishlist(!isWishlist);
          toast({
            title: "Success !",
            description: "Add Wishlist !",
            variant: "success",
          });
        },
      });
    } else {
      alert("Please login first!");
    }
  };

  const onCart = async () => {
    if (size) {
      const body: IAddCart = {
        user_id,
        tokenId,
        size,
        product_id: data.id,
      };
      addCartMutation.mutate(body, {
        onSuccess() {
          toast({
            title: "Success !",
            description: "Add Cart !",
            variant: "success",
          });
        },
      });
    } else {
      alert("Please Select Size first !");
    }
  };
  return (
    <>
      <div className="w-[100px] p-4">
        {data.images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            width={450}
            height={500}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="ml-5">
        {data.images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            width={400}
            height={300}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="w-[300px] space-y-4 ml-[60px]">
        <h1 className="font-bold	text-[25px]">{data.product_title}</h1>
        <h3 className="text-[25px]">
          {data.product_price}
          <span className="text-[15px] opacity-50">THB</span>
        </h3>
        <div className="w-full mt-[10px]">
          <p>{data.product_desc}</p>
        </div>
        <h1 className="font-bold Frans text-lg my-4">SIZE</h1>
        <div className="w-[250px] h-[100px] grid grid-cols-3 gap-x-2">
          {allSize.map((sizeOption: string, index: number) => (
            <Button
              key={index}
              disabled={data.product_size != sizeOption}
              className={`border border-black rounded-none justify-center items-center ${
                size === sizeOption
                  ? "text-white bg-black hover:bg-black"
                  : "bg-white text-black hover:text-white hover:bg-black"
              }`}
              onClick={() => setSize(sizeOption)}
            >
              {sizeOption}
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <Button variant="blackbtn" onClick={onCart}>
            ADD TO CART
          </Button>
          <Button variant="noFillbtn" onClick={onWishlist}>
            {isWishlist ? "REMOVE WISHLIST" : "ADD TO WISHLIST"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
