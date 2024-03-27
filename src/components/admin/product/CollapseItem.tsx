import { z } from "zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/validator/product";
import {
  ICreateProduct,
  IDeleteProduct,
  IFormattedErrorResponse,
  IProduct,
  Sex,
  allCategory,
  allColor,
  allSex,
  allSize,
} from "@/constants";
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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Select } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import ProductCarousel from "./ProductCarousel";
import { useToast } from "@/components/ui/use-toast";

interface CollapseItemProps {
  data: IProduct;
  value: number;
  tokenId: string;
  editMutation: UseMutationResult<
    string,
    IFormattedErrorResponse,
    ICreateProduct
  >;
  deleteMutation: UseMutationResult<
    string,
    IFormattedErrorResponse,
    IDeleteProduct
  >;
}

export default function CollapseItem(props: CollapseItemProps) {
  const { toast } = useToast();
  const { tokenId, data, value, editMutation, deleteMutation } = props;
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [gender, setGender] = useState<Sex>(data.product_sex as Sex);
  const [onSelectSex, setOnSelectSex] = useState<boolean>(false);
  const [files, setFiles] = useState<any>();
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    mode: "onChange",
    defaultValues: {
      id: data.id,
      product_title: data.product_title,
      product_category: data.product_category,
      product_desc: data.product_desc,
      product_size: data.product_size,
      product_sex: data.product_sex,
      product_color: data.product_color,
      product_price: data.product_price.toString(),
      product_stock: data.product_stock.toString(),
    },
  });

  useEffect(() => {
    setGender(form.getValues().product_sex as Sex);
  }, [onSelectSex]);

  const onSubmit = async (values: z.infer<typeof ProductSchema>) => {
    if (isEditable) {
      const body: ICreateProduct = {
        tokenId,
        images: files ? files.map((item: any) => item.file) : [],
        ...values,
      };
      editMutation.mutate(body, {
        onSuccess(response) {
          console.log("response", response);
          toast({
            title: "Success !",
            description: "Update Successfully !",
            variant: "success",
          });
          setOpenDialog(false);
        },
        onError() {
          toast({
            title: "Failed !",
            description: "Fail to Update Product !",
            variant: "destructive",
          });
        },
      });
    }
    setIsEditable(!isEditable);
  };

  const onDelete = async () => {
    const body: IDeleteProduct = {
      tokenId,
      id: data.id,
    };
    deleteMutation.mutate(body, {
      onSuccess: (response) => {
        setOpenDialog(false);
      },
    });
  };

  const onClear = () => {
    form.reset();
    setIsEditable(false);
  };

  return (
    <>
      <AccordionItem value={`item-${value}`} className="shadow-sm">
        <AccordionContent className="relative flex px-6 py-6 border-l-2 border-black">
          <ProductCarousel images={data.images} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-8 px-8 overflow-x-hidden"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Id</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Pr oduct Id"
                          disabled={true}
                          {...field}
                        />
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
                        <Input
                          placeholder="Product Name"
                          disabled={!isEditable}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_sex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sex</FormLabel>
                      <FormControl>
                        <Select
                          onOpenChange={setOnSelectSex}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={!isEditable}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {allSex.map((sex, index) => (
                              <SelectItem key={index} value={sex}>
                                {sex}
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
                          disabled={!isEditable}
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
                      <FormLabel>Size</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={!isEditable}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {allSize.map((size, index) => (
                              <SelectItem key={index} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                          disabled={!isEditable}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {gender &&
                              allCategory[gender]?.map((category, index) => (
                                <SelectItem key={index} value={category}>
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
              <div className="flex flex-col space-y-2">
                <FormField
                  control={form.control}
                  name="product_color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={!isEditable}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {allColor.map((color, index) => (
                              <SelectItem key={index} value={color.name}>
                                <div className="flex items-center Jura">
                                  <div
                                    className={`w-4 h-4 rounded-full mr-2 border-2`}
                                    style={{
                                      backgroundColor: color.value,
                                    }}
                                  ></div>
                                  {color.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product_price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          disabled={!isEditable}
                          placeholder="Price"
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
                        <Input
                          type="number"
                          disabled={!isEditable}
                          placeholder="Stock"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="absolute bottom-5 right-5 space-x-4">
                <Button
                  type="submit"
                  variant={isEditable ? "blackbtn" : "noFillbtn"}
                  className="w-28 h-8 text-sm"
                >
                  {isEditable ? "DONE" : "EDIT"}
                </Button>
                <Button
                  type="button"
                  variant={isEditable ? "noFillbtn" : "blackbtn"}
                  className="w-28 h-8 text-sm"
                  onClick={() => (isEditable ? onClear() : setOpenDialog(true))}
                >
                  {isEditable ? "CANCEL" : "DELETE"}
                </Button>
                <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Do you really want to delete product?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <Button
                        type="submit"
                        variant="noFillbtn"
                        className="w-28 h-8 text-sm"
                        onClick={() => setOpenDialog(false)}
                      >
                        CANCEL
                      </Button>
                      <Button
                        type="submit"
                        variant="blackbtn"
                        className="w-28 h-8 text-sm"
                        onClick={onDelete}
                      >
                        DELETE
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}
