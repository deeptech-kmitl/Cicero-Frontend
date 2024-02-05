import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
    });

export const SignUpSchema = z.object({
    email: z.string().email(),
    firstname: z.string().min(5).max(30),
    lastname: z.string().min(5).max(30),
    day : z.string().min(1).max(2).refine((val) => !isNaN(val as unknown as number), {
      message: "Day should be a number",
    }),
    month : z.string().min(1).max(10),
    year : z.string().min(4).max(4).refine((val) => !isNaN(val as unknown as number), {
      message: "Year should be a number",
    }),
    password: z.string().min(8).max(100),
    cfpassword: z.string().min(8).max(100),
    phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(10, { message: "Incorect Phone number" })
    .max(10, { message: "Incorect Phone number" })
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Phone number should be a number",
    }),
    }).refine((data) => data.password === data.cfpassword, {
    message: "Password not Match",
    path: ["cfpassword"],
    });