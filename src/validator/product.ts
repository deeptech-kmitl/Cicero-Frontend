import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  product_title: z.string(),
  product_category: z.string(),
  product_desc: z.string(),
  product_size: z.string(),
  product_price: z.number(),
  product_stock: z.number(),
});

export const defaultProductForm = {
  id: "",
  product_title: "",
  product_category: "",
  product_desc: "",
  product_size: "",
  product_price: 0,
  product_stock: 0,
};
