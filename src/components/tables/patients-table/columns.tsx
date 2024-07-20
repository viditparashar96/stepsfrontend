import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../../constants/data";
import CellAction from "./cell-action";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
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
    accessorKey: "actions",
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
