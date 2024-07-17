import { ColumnDef } from "@tanstack/react-table";
import Linkbtn from "../Linkbtn";

type Patient = {
  id: string;
  name: string;
  email: string;
};

export type Payment = {
  doctorId: number;
  patientId: number;
  patient: Patient;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <p>{row.original.patient.id}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <p>{row.original.patient.name}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <p>{row.original.patient.email}</p>;
    },
  },
  {
    accessorKey: "actions",
    id: "actions",
    cell: ({ row }) => {
      return <Linkbtn data={row.original.patient} />;
    },
  },
];
