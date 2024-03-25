import BackButton from "@/components/myPurchase/BackButton";
import ItemMyPurchase from "@/components/myPurchase/ItemMyPurchase";
import React from "react";

type Props = {};

const mockData = [
  {
    image: "https://via.placeholder.com/150",
    title: "Classic Leather Jacket",
    detail: "Black, Genuine Leather",
    size: "M",
    price: "120,000.00",
    qty: 1,
    orderId: "ORD123456",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Sports Running Shoes",
    detail: "Blue and White, Mesh Material",
    size: "XS",
    price: "80.00",
    qty: 2,
    orderId: "ORD123457",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Elegant Wrist Watch",
    detail: "Silver, Waterproof up to 50m",
    size: "L",
    price: "250.00",
    qty: 3,
    orderId: "ORD123458",
  },
];

const myPurchase = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col px-[20%] py-[5%]">
      <div className="text-xl font-semibold mb-10">MY PURCHASE</div>
      {mockData.map((item, i) => {
        return (
          <ItemMyPurchase
            key={i}
            image={item.image}
            title={item.title}
            detail={item.detail}
            size={item.size}
            price={item.price}
            qty={item.qty}
            orderId={item.orderId}
          />
        );
      })}
      <div className="flex justify-center mt-10">
        <BackButton />
      </div>
    </div>
  );
};

export default myPurchase;
