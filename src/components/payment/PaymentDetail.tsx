import React from "react";
import ShippingForm from "./ShippingForm";
import OrderSummary from "./OrderSummary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentForm } from "@/constants";
import { PaymentAddressSchema } from "@/validator";
// import CreditCardForm from './CreditCardForm'

type Props = {};

const PaymentDetail = (props: Props) => {
  function onSubmit(data: z.infer<typeof PaymentAddressSchema>) {
    console.log(data);
  }
  return (
    <div className="p-5 space-x-4">
      <div className="flex ">
        <ShippingForm form={paymentForm} onSubmit={onSubmit} />
        <OrderSummary />
      </div>
      {/* <CreditCardForm /> */}
    </div>
  );
};

export default PaymentDetail;
