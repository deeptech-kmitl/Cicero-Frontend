"use client";
import React from "react";
import ShippingForm from "./ShippingForm";
import OrderSummary from "./OrderSummary";
import { PaymentSchema } from "@/validator/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CreditForm from "./CreditForm";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { addOrder } from "@/api-caller/payment";
import { IPaymentAddress, IPaymentDetail } from "@/constants";
import { useQuery } from "react-query";
import { CartItemProps } from "../cart/type";
import { getCartItems } from "@/api-caller";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { IFormattedErrorResponse } from "./../../constants/interface";
import { isResponseError } from "@/lib/utils";

type PaymentFormProps = {
  user_id: string;
  token: string;
};

const PaymentForm = ({ user_id, token }: PaymentFormProps) => {
  const {
    isLoading,
    data: cart,
    error,
  } = useQuery<CartItemProps[], Error>("cart", () =>
    getCartItems({ token, user_id })
  );
  const form = useForm<z.infer<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      fname: "",
      lname: "",
      street_address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      phone: "",
      email: "",
      cardNumber: "",
      cardHolder: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });
  async function onSubmit(data: z.infer<typeof PaymentSchema>) {
    console.log(data);
    const address: IPaymentAddress = {
      first_name: data.fname,
      last_name: data.lname,
      phone: data.phone,
      email: data.email,
      street: data.street_address,
      zip: data.zip,
      country: data.country,
    };
    const payment_detail: IPaymentDetail = {
      card_holder: data.cardHolder,
      card_number: data.cardNumber,
      expired: `${data.expiryMonth}/${data.expiryYear}`,
      cvv: data.cvv,
    };
    const order = {
      address,
      payment_detail,
      total: cart!.reduce(
        (prev, order) => prev + order.product_price * order.qty,
        0
      ),
    };
    try {
      await addOrder({ order, user_id, token });
    } catch (error) {
      throw error;
    }
  }
  return (
    <div className="w-[70%] p-6 ">
      <div className="flex w-full space-x-6 mb-5">
        <ShippingForm form={form} callback={onSubmit} />
        <OrderSummary user_id={user_id} token={token} />
      </div>
      <CreditForm form={form} callback={onSubmit} />
      <div className="flex gap-4 mt-10 items-center text-lg justify-between font-bold">
        <div>
          <p className="text-left space-x-2 Franc text-2xl">
            <span>TOTAL</span>
            <span>
              {formatPrice(
                cart?.reduce(
                  (prev, order) => prev + order.product_price * order.qty,
                  0
                )
              )}
            </span>
            <span>THB</span>
          </p>
        </div>
        <div className="flex gap-8">
          <Link href="/cart" className="w-48">
            <Button variant="noFillbtn" className="text-sm">
              BACK
            </Button>
          </Link>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Button
                type="submit"
                variant="blackbtn"
                className="float-start w-48 text-sm"
              >
                PLACE MY ORDER
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
