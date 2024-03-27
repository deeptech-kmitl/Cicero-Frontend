import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ICreateProduct,
  IDeleteProduct,
  IFormattedErrorResponse,
  IProduct,
} from "@/constants";
import { Accordion } from "@/components/ui/accordion";
import RecordProductTable from "./RecordProductTable";
import { UseMutationResult } from "react-query";

interface ProductTableProps {
  tokenId: string;
  data: IProduct[];
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

export default function ProductTable(props: ProductTableProps) {
  const { tokenId, data, editMutation, deleteMutation } = props;
  const [activeCollapse, setActiveCollapse] = useState<string>();
  const handleActiveCollapse = (value: string) => {
    setActiveCollapse(activeCollapse == value ? "" : value);
  };

  useEffect(() => {
    setActiveCollapse("");
  }, [deleteMutation.isSuccess]);
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
            {data.length > 0 &&
              data?.map((item: IProduct, index: number) => (
                <RecordProductTable
                  key={index}
                  index={index}
                  tokenId={tokenId}
                  data={item}
                  state={activeCollapse}
                  onClick={handleActiveCollapse}
                  editMutation={editMutation}
                  deleteMutation={deleteMutation}
                />
              ))}
          </TableBody>
        </Table>
      </Accordion>
    </>
  );
}
