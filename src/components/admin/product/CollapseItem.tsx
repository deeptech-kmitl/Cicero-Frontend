import { z } from "zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/validator/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { IProduct, allCategory } from "@/constants";
import ProductCarousel from "./ProductCarousel";
import { Button } from "@/components/ui/button";

interface CollapseItemProps {
  data: IProduct;
  value: number;
}

export default function CollapseItem(props: CollapseItemProps) {
  const { data, value } = props;
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      id: data.id || "",
      product_title: data.product_title || "",
      product_category: data.product_category || "",
      product_desc: data.product_desc || "",
      product_size: data.product_size[0] || "",
      product_price: data.product_price || 0,
      product_stock: data.product_stock || 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductSchema>) => {};
  return (
    <>
      <AccordionItem value={`item-${value}`} className="shadow-sm">
        <AccordionContent className="relative flex px-6 py-6 border-l-2 border-black">
          <ProductCarousel images={data.images} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex relative gap-8 px-8 overflow-x-hidden"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Id</FormLabel>
                      <FormControl>
                        <Input placeholder="Product Id" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Product Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {allCategory["Men"].map((category, index) => (
                              <SelectItem key={index} value={String(index + 1)}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-2 justify-between">
                <FormField
                  control={form.control}
                  name="product_desc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Product Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Size</FormLabel>
                      <FormControl>
                        <Input placeholder="Product Size" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <FormField
                  control={form.control}
                  name="product_price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Product Price"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Stock" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>

          <div className="absolute bottom-5 right-5 space-x-4">
            <Button
              type="submit"
              variant="noFillbtn"
              className="w-28 h-8 text-sm"
            >
              EDIT
            </Button>
            <Button
              type="submit"
              variant="blackbtn"
              className="w-28 h-8 text-sm"
            >
              DELETE
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}
