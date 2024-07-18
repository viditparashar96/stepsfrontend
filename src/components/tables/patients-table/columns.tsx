"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../../constants/data";
import { Checkbox } from "../../ui/checkbox";
import CellAction from "./cell-action";
import Linkbtn from "../../Linkbtn";

export const columns: ColumnDef<User>[] = [
  
  {
    accessorKey:"id",
    header:"ID"
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  
  
  {
    id: "actions",
    cell: ({ row }) => <Linkbtn data={row.original} />,
  },
];
