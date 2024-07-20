"use client";
import { MoreHorizontal, Trash, View } from "lucide-react";
import { toast } from "sonner";
import { env_config } from "../../../config/env_config";
import { useDeletePdf } from "../../../lib/react-query/quries-mutations";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

interface CellActionProps {
  data: any;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  console.log("data===>", data);

  const { mutateAsync: deletePdf } = useDeletePdf();

  const handleDelete = async () => {
    try {
      await deletePdf(data.id);
      toast.success("Pdf deleted successfully");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleViewClick = () => {
    if (data.filePath) {
      window.open(`${env_config.cloudfront_url}/${data.filePath}`, "_blank");
    } else {
      console.error("No URL found in data");
    }
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={handleViewClick}
            className="cursor-pointer"
          >
            <View className="mr-2 h-4 w-4" /> View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;
