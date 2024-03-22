import React, { useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProduct } from "@/constants";
import { Accordion } from "@/components/ui/accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CollapseItem from "./CollapseItem";

interface ProductTableProps {
  data: IProduct[];
}

export default function ProductTable(props: ProductTableProps) {
  const { data } = props;
  const [activeCollapse, setActiveCollapse] = useState("item-12");
  return (
    <>
      <Accordion
        collapsible
        type="single"
        value={activeCollapse}
        className="w-full"
        onValueChange={setActiveCollapse}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Product Id</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: IProduct, index: number) => (
              <>
                <TableRow
                  key={index}
                  onClick={() => setActiveCollapse(`item-${index}`)}
                >
                  <TableCell>
                    <Image
                      src={item.images[0].url}
                      width={20}
                      height={20}
                      alt="image"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.product_title}</TableCell>
                  <TableCell>{item.product_category}</TableCell>
                  <TableCell>{item.product_size}</TableCell>
                  <TableCell>{item.product_price}</TableCell>
                  <TableCell>{item.product_stock}</TableCell>
                  <TableCell className="w-12">
                    <div className="bg-[#F2F2F2] rounded-full">
                      {activeCollapse == `item-${index}` ? (
                        <IoIosArrowUp color="#868686" />
                      ) : (
                        <IoIosArrowDown color="#868686" />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
                <TableCell colSpan={8} className="p-0">
                  <CollapseItem key={index} data={item} value={index} />
                </TableCell>
              </>
            ))}
          </TableBody>
        </Table>
      </Accordion>
    </>
  );
}
