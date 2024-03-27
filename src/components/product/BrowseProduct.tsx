"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Slider from "@mui/material-next/Slider";
import {
  IProduct,
  IWishlist,
  Sex,
  allCategory,
  allColor,
  allSize,
} from "@/constants";
import { getProduct, getWishlist } from "@/api-caller";
import ProductCard from "@/components/ProductCard";
import { capitalizeFirstLetter, formatPrice } from "@/lib/utils";

interface VisibilityState {
  isVisibleCategory: boolean;
  isVisibleSex: boolean;
  isVisibleSize: boolean;
  isVisiblePrice: boolean;
  isVisibleColor: boolean;
}

interface FilterState {
  product_category: string;
  product_sex: Sex;
  product_price: number;
  product_size: string;
  product_color: string;
}

interface BrowseProductProps {
  params: any;
  tokenId: string;
  user_id: string;
}

export const BrowseProduct = ({
  params,
  tokenId,
  user_id,
}: BrowseProductProps) => {
  const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [visibility, setVisibility] = useState<VisibilityState>({
    isVisibleCategory: true,
    isVisibleSex: true,
    isVisibleSize: true,
    isVisiblePrice: true,
    isVisibleColor: true,
  });
  const [filter, setFilter] = useState<FilterState>({
    product_category: capitalizeFirstLetter(params.slug[1]),
    product_sex: capitalizeFirstLetter(params.slug[0]) as Sex,
    product_price: 0,
    product_size: "",
    product_color: "",
  });

  const [wishlist, setWishlist] = useState<IWishlist[]>([]);

  useEffect(() => {
    getMyWishlist().then((response) => {
      getProduct().then((data) => {
        renderWishlist(data.data, response);
      });
    });
  }, []);

  const getMyWishlist = async () => {
    if (tokenId && user_id) {
      const myWishlist = await getWishlist({ token: tokenId, user_id });
      setWishlist(myWishlist);
      return myWishlist;
    }
  };

  const renderWishlist = async (data: IProduct[], temp?: IWishlist[]) => {
    const addFav = data.map((item: IProduct) => ({
      ...item,
      fav: temp
        ? temp.filter((fav) => fav.id == item.id).length > 0
          ? true
          : false
        : wishlist.filter((fav) => fav.id == item.id).length > 0
        ? true
        : false,
    }));
    setProducts(addFav);
    setOriginalProducts(addFav);
  };

  useEffect(() => {
    renderWishlist(products);
  }, [wishlist]);

  useEffect(() => {
    const applyFilter = () => {
      const filterKeys = Object.keys(filter) as Array<keyof FilterState>;
      const updatedProducts = originalProducts.filter((product) =>
        filterKeys.every((key) => {
          if (
            !filter[key] ||
            (typeof filter[key] === "number" && filter[key] === 0)
          ) {
            return true;
          }
          if (key === "product_price") {
            return product[key] >= filter[key];
          }
          return product[key] === filter[key];
        })
      );
      setProducts(updatedProducts);
    };

    applyFilter();
  }, [filter, originalProducts]);

  const toggleVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.dataset.toggle as keyof VisibilityState;
    setVisibility((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleSliderChange = (event: Event, newValue: number) => {
    setFilter((prev) => ({ ...prev, product_price: newValue }));
  };

  const onFilter = (key: keyof FilterState, value: any) => {
    setFilter((prev) => {
      if (prev[key] === value) {
        const newValue = prev[key] === value ? "" : value;
        return { ...prev, [key]: newValue };
      }
      return { ...prev, [key]: value };
    });
  };

  const onFav = async (newWishlist: IProduct) => {
    console.log("before", wishlist);
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some(
        (item) => item.id === newWishlist.id
      );

      if (itemExists) {
        return [
          ...prevWishlist.filter(
            (prevWishlist) => prevWishlist.id != newWishlist.id
          ),
        ];
      } else {
        return [...prevWishlist, newWishlist];
      }
    });
  };

  return (
    <div>
      <div className="flex h-full flex-col items-center p-10">
        <div className="w-[1200px] flex flex-row mt-10">
          <div className="flex basis-2/6 flex-start flex-col pr-10 pl-10">
            <div className="mb-3 text-2xl Franc tracking-[2%] text-[48px]">
              PRODUCT
            </div>
            <hr className="my-3" />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc text-[24px]">
                CATEGORIES
              </div>
              <Button
                data-toggle="isVisibleCategory"
                className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl"
                onClick={toggleVisibility}
              >
                -
              </Button>
            </div>
            <div
              className={
                visibility.isVisibleCategory
                  ? "mb-3 ml-4 flex flex-col"
                  : "mb-3 ml-4 hidden"
              }
            >
              {allCategory[filter.product_sex as Sex]?.map((categoryName) => (
                <Button
                  key={categoryName}
                  className="w-max bg-transparent flex items-start justify-start hover:bg-transparent capitalize"
                  onClick={() => onFilter("product_category", categoryName)}
                >
                  <p
                    className={
                      filter.product_category === categoryName
                        ? "Jura text-lg text-black font-[600px] border-b border-[#000]"
                        : "Jura text-lg text-black font-[600px] hover:border-b border-[#000]"
                    }
                  >
                    {categoryName}
                  </p>
                </Button>
              ))}
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc text-[24px]">
                PRICE
              </div>
              <Button
                data-toggle="isVisiblePrice"
                className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl"
                onClick={toggleVisibility}
              >
                -
              </Button>
            </div>
            <div
              className={
                visibility.isVisiblePrice
                  ? "w-full flex justify-center flex-col items-center mb-5"
                  : "w-full justify-center items-center mb-5 hidden"
              }
            >
              <div className="w-10/12 Jura text-lg font-[600px]">
                0 - {formatPrice(filter.product_price)} THB
              </div>
              <Slider
                min={0}
                max={10000}
                color="black"
                className="w-10/12"
                onChange={handleSliderChange}
              />
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc text-[24px]">
                SIZE
              </div>
              <Button
                data-toggle="isVisibleSize"
                className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl"
                onClick={toggleVisibility}
              >
                -
              </Button>
            </div>
            <div className={visibility.isVisibleSize ? "mb-5" : "mb-5 hidden"}>
              {allSize.map((sizeOption) => (
                <Button
                  key={sizeOption}
                  className={`w-20 border border-black rounded-none justify-center items-center m-1 ${
                    filter.product_size === sizeOption
                      ? "text-white bg-black hover:bg-black"
                      : "bg-white text-black hover:text-white hover:bg-black"
                  }`}
                  onClick={() => onFilter("product_size", sizeOption)}
                >
                  {sizeOption}
                </Button>
              ))}
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="basis-5/6 mt-3 mb-2 text-xl Franc text-[24px]">
                COLOR
              </div>
              <Button
                data-toggle="isVisibleColor"
                className="basis-1/6 bg-transparents text-black hover:bg-transparents text-xl"
                onClick={toggleVisibility}
              >
                -
              </Button>
            </div>
            <div
              className={
                visibility.isVisibleColor
                  ? "mb-5 grid grid-cols-3 gap-2 w-6/12 mt-2"
                  : "hidden"
              }
            >
              {allColor.map(({ name, value }) => (
                <Button
                  key={name}
                  className={`${
                    filter.product_color === name ? "border border-black" : ""
                  } rounded-full w-8 h-8 m-1 hover:opacity-50`}
                  style={{
                    backgroundColor: value,
                  }}
                  onClick={() => onFilter("product_color", name)}
                ></Button>
              ))}
            </div>
          </div>
          <div className="basis-4/6">
            <div className="w-full mb-5 flex justify-end items-end Jura pr-5 text-[24px]">
              / {filter.product_sex}
            </div>
            <div
              className={
                products.length == 0
                  ? "w-full flex justify-center items-center Jura"
                  : "hidden"
              }
            >
              Dont have products now.
            </div>
            <div className="grid grid-cols-3 gap-5 w-full overflow-auto p-5">
              {products.map((item: IProduct, index: number) => {
                return (
                  <ProductCard
                    key={index}
                    data={item}
                    tokenId={tokenId}
                    user_id={user_id}
                    onFav={onFav}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
