"use client";
import React, { useEffect, useState } from "react";
import { getOrder } from "@/api-caller/payment";
import ItemMyPurchase from "./ItemMyPurchase";

type Props = {
  user_id: string;
  token: string;
};

const MyPurchaseTemplate = ({ user_id, token }: Props) => {
  const [orderItems, setOrderItems] = useState([]);
  const orderPayload = async () => {
    const data: any = await getOrder(user_id, token);
    console.log("OrderPayload:", data);
    setOrderItems(data);
    return data;
  };

  useEffect(() => {
    orderPayload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("OrderItems:", orderItems);

  return (
    <div>
      {orderItems.length === 0 ? (
        <div>- No orders found -</div>
      ) : (
        orderItems.map((item: any, i: any) => {
          return (
            <div key={i}>
              {item.products.Products.map((prod: any, j: any) => {
                console.log("Products:", prod, i);
                return (
                  <ItemMyPurchase
                    key={i}
                    id={prod.id} //{i === 0 ? "P000011" : prod.id} For Testing The Connection with ProductDetail.
                    images={prod.images[0].url}
                    title={prod.product_title}
                    detail={prod.product_desc}
                    size={prod.size}
                    price={prod.product_price}
                    qty={prod.qty}
                    orderId={item.id}
                  />
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
  };
  
  export default MyPurchaseTemplate;