import { ProductQueryParams } from "./query";

export type Sex = "Men" | "Women" | "Kids";
interface CategoryData {
  Men: string[];
  Women: string[];
  Kids: string[];
}

export const allSex: Sex[] = ["Men", "Women", "Kids"];
export const allCategory: CategoryData = {
  Men: [
    "Hoodies & Sweatshirts",
    "Jackets",
    "Pants",
    "Tracksuits",
    "Coats",
    "T-Shirts & Tops",
    "Shorts",
  ],
  Women: [
    "Tops",
    "Shorts",
    "Skirts",
    "Trousers",
    "Sets",
    "Dresses",
    "Jumpsuits",
  ],
  Kids: ["Tops", "Shorts", "Skirts", "Trousers", "Hoodies"],
};
export const allSize = ["XS", "S", "M", "L", "XL"];
export const allColor = [
  { name: "Black", value: "#2E2D2D" },
  { name: "Blue", value: "#5766B5" },
  { name: "Brown", value: "#6F5C5C" },
  { name: "Green", value: "#429A70" },
  { name: "Grey", value: "#9F9F9F" },
  { name: "Orange", value: "#E08F54" },
  { name: "Pink", value: "#EE9AA9" },
  { name: "Purple", value: "#A5739D" },
  { name: "Red", value: "#D36262" },
  { name: "White", value: "#FFFFFF" },
  { name: "Yellow", value: "#FCD05F" },
];

export const defaultProductQuery: ProductQueryParams = {
  id: "",
  search: "",
  page: 1,
  limit: 50,
  order_by: "",
  sort: "DESC",
};
