"use client";
import { Plus } from "lucide-react";
import { User } from "../../../constants/data";
import { DataTable } from "../../table/data-table";
import { Button } from "../../ui/button";
import { Heading } from "../../ui/heading";
import { Separator } from "../../ui/separator";
import { columns } from "./columns";

interface ProductsClientProps {
  data: User[];
}

export const PdfClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Total Pdfs (${data.length})`}
          description="Your All Pdfs"
        />
        <Button className="text-xs md:text-sm" onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
