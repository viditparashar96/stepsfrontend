"use client";
import { DataTable } from "../../table/data-table";
import { Heading } from "../../ui/heading";
import { Separator } from "../../ui/separator";
import { columns } from "./columns";

interface ProductsClientProps {
  data: any[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Patients (${data ? data.length : 0})`}
          description="All Patients in the system"
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
