import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  product_title: z.string().nonempty(),
  product_category: z.string().nonempty(),
  product_sex: z.string().nonempty(),
  product_desc: z.string().nonempty(),
  product_size: z.string().nonempty(),
  product_color: z.string().nonempty(),
  product_price: z.string().nonempty(),
  product_stock: z.string().nonempty(),
  images: z.any(),
});

export const defaultProductForm = {
  id:"",
  product_title: "",
  product_category: "",
  product_desc: "",
  product_size: "",
  product_sex: "",
  product_color: "",
  product_price: "",
  product_stock: "",
};
