"use client";
import React, { useEffect, useState } from "react";
import { getOrder } from "@/api-caller/payment";

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

type Props = {
  user_id: string;
  token: string;
};

const MyPurchaseTemplate = ({ user_id, token }: Props) => {
  const [orderItmes, setOrderItems] = useState([]);
  const [orderId, setOrderId] = useState("");

  const orderPayload = async () => {
    const data: any = await getOrder(user_id, token);
    console.log("OrderPayload:", data);
    setOrderId(data.id);
    setOrderItems(data.products.Products);
    return data;
  };

  useEffect(() => {
    orderPayload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("OrderId:", orderId);
  console.log("OrderItems:", orderItmes);

  return (
    <div>Hello</div>
    // {mockData.map((item, i) => {
    //   return (
    //     <ItemMyPurchase
    //       key={i}
    //       id={item.id}
    //       images={item.image}
    //       title={item.product_title}
    //       detail={item.product_desc}
    //       size={item.size}
    //       price={item.product_price}
    //       qty={item.qty}
    //       orderId={item.orderId}
    //     />
    //   );
    // })}
  );
};

export default MyPurchaseTemplate;
