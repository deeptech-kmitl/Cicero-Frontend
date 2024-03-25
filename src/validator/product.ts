import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  product_title: z.string().nonempty(),
  product_category: z.string().nonempty(),
  product_sex: z.string().nonempty(),
  product_desc: z.string().nonempty(),
  product_size: z.string(),
  product_color: z.string(),
  product_price: z.string(),
  product_stock: z.string(),
  images: z.any(),
});

export const defaultProductForm = {
  id: "",
  product_title: "",
  product_category: "",
  product_desc: "",
  product_size: "",
  product_color: "",
  product_price: "",
  product_stock: "",
};
