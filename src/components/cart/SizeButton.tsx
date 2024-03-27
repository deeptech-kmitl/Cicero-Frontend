import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Sizes } from "./type";

type Props = {
  id: string;
  product_size: Sizes;
  user_id: string;
  token: string;
};

const SizeButton = ({ product_size, id, user_id, token }: Props) => {
  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  return (
    <>
      {sizes.map((size, i) => (
        <Button
          key={i}
          variant="noFillbtn"
          className={cn(
            {
              "bg-black text-white": size === product_size,
            },
            "font-medium"
          )}
        >
          {size}
        </Button>
      ))}
    </>
  );
};

export default SizeButton;
