"use client";
import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "NAME",
  },

  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "uploadDate",
    header: "Upload Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
