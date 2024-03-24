import { z } from "zod";

// export const PaymentSchema = z.object({
//     cardNumber: z.string().min(16).max(16).refine((val) => !isNaN(val as unknown as number), {
//         message: "Card number should be a number",
//     }),
//     cardHolder: z.string().min(5).max(30),
//     expiryDate: z.string().min(5).max(5),
//     cvv: z.string().min(3).max(3).refine((val) => !isNaN(val as unknown as number), {
//         message: "CVV should be a number",
//     }),
//     });

export const PaymentSchema = z.object({
    fname: z.string().min(5).max(30),
    lname : z.string().min(5).max(30),
    phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(10, { message: "Incorect Phone number" })
    .max(10, { message: "Incorect Phone number" })
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Phone number should be a number",
    }),
    email : z.string().email(),
    street_address: z.string().min(5).max(30),
    city: z.string().min(3).max(30),
    state: z.string().min(3).max(30),
    country: z.string().min(3).max(30),
    zip: z.string().min(5).max(10).refine((val) => !isNaN(val as unknown as number), {
        message: "Zip should be a number",
    }),
    cardNumber: z.string().min(16).max(16).refine((val) => !isNaN(val as unknown as number), {
        message: "Card number should be a number",
    }),
    cardHolder: z.string().min(5).max(30),
    expiryMonth: z.string().min(1).max(2),
    expiryYear: z.string().min(4).max(4),
    cvv: z.string().min(3).max(4).refine((val) => !isNaN(val as unknown as number), {
        message: "CVV should be a number",
    }),
    })