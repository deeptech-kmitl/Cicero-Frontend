import React from "react";
import Image from "next/image";
import { UseMutationResult, useMutation } from "react-query";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TableCell, TableRow } from "@/components/ui/table";
import { IFormattedErrorResponse, IProduct } from "@/constants";
import { deleteProduct } from "@/api-caller";
import CollapseItem from "./CollapseItem";

interface RecordProductTableProps {
  index: number;
  data: IProduct;
  state: string | undefined;
  onClick: (value: string) => void;
}

export default function RecordProductTable(props: RecordProductTableProps) {
  const { index, data, state, onClick } = props;
  const deleteMutation: UseMutationResult<
    string,
    IFormattedErrorResponse,
    string
  > = useMutation(deleteProduct);
  return (
    <>
      <TableRow onClick={() => onClick(`item-${index}`)}>
        <TableCell>
          <Image src={data.images[0].url} width={20} height={20} alt="image" />
        </TableCell>
        <TableCell className="font-medium">{data.id}</TableCell>
        <TableCell>{data.product_title}</TableCell>
        <TableCell>{data.product_category}</TableCell>
        <TableCell>{data.product_size}</TableCell>
        <TableCell>{data.product_price}</TableCell>
        <TableCell>{data.product_stock}</TableCell>
        <TableCell className="w-12">
          <div className="bg-[#F2F2F2] rounded-full">
            {state == `item-${index}` ? (
              <IoIosArrowUp color="#868686" />
            ) : (
              <IoIosArrowDown color="#868686" />
            )}
          </div>
        </TableCell>
      </TableRow>
      <TableCell colSpan={8} className="p-0">
        <CollapseItem
          key={index}
          data={data}
          value={index}
          deleteMutation={deleteMutation}
        />
      </TableCell>
    </>
  );
}
