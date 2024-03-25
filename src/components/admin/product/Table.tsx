import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProduct } from "@/constants";
import { Accordion } from "@/components/ui/accordion";
import RecordProductTable from "./RecordProductTable";

interface ProductTableProps {
  data: IProduct[];
}

export default function ProductTable(props: ProductTableProps) {
  const { data } = props;
  const [activeCollapse, setActiveCollapse] = useState<string>();
  const handleActiveCollapse = (value: string) => {
    setActiveCollapse(activeCollapse == value ? "" : value);
  };
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
                  data={item}
                  state={activeCollapse}
                  onClick={handleActiveCollapse}
                />
              ))}
          </TableBody>
        </Table>
      </Accordion>
    </>
  );
}
