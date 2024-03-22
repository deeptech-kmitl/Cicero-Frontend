import { PaymentAddressSchema } from "@/validator/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const paymentForm = useForm<z.infer<typeof PaymentAddressSchema>>({
  resolver: zodResolver(PaymentAddressSchema),
  defaultValues: {
    fname: "",
    lname: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    company: "",
  },
});
