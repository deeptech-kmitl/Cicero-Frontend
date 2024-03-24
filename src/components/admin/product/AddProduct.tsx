import { z } from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ICreateProduct,
  IFormattedErrorResponse,
  IProduct,
  Sex,
  allCategory,
  allColor,
  allSex,
  allSize,
} from "@/constants";
import { ProductSchema, defaultProductForm } from "@/validator/product";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
interface AddProductProps {
  mutation: UseMutationResult<
    IProduct,
    IFormattedErrorResponse,
    ICreateProduct
  >;
}
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);
export default function AddProduct(props: AddProductProps) {
  const { mutation } = props;
  const [files, setFiles] = useState<any>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    mode: "onChange",
    defaultValues: defaultProductForm,
  });

  const onSubmit = async (values: z.infer<typeof ProductSchema>) => {
    console.log("value", values, files);

    mutation.mutate(values, {
      onSuccess(response) {
        form.reset();
        setOpenDialog(false);
      },
    });
  };
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button type="submit" variant="blackbtn" className="w-40 text-sm">
            Add Product
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-fit">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col relative overflow-x-hidden px-8"
              >
                <div className="flex space-x-4">
                  <div className="flex flex-col relative gap-2">
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
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="product_sex"
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Sex</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
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
                      <FormField
                        control={form.control}
                        name="product_category"
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={
                                  typeof form.getValues().product_sex !==
                                  "string"
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Please Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {allCategory[
                                    form.getValues().product_sex as Sex
                                  ]?.map((category, index) => (
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
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name="product_size"
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Size</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
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
                        name="product_color"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Color</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
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
                                placeholder="Product Price"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="product_stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Stock"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="relative">
                    <FormItem className="min-h-0 max-h-[30rem] overflow-y-auto">
                      <FormLabel>Upload Image</FormLabel>
                      <FormControl>
                        <FilePond
                          allowDrop
                          allowMultiple
                          files={files}
                          onupdatefiles={setFiles}
                          maxFiles={7}
                          className={"w-60"}
                          acceptedFileTypes={["image/*"]}
                          labelIdle="Upload images"
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
                <Button type="submit" variant="blackbtn" className="mt-4">
                  Add
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
