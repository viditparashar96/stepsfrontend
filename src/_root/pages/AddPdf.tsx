/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FileUploaderContent } from "../../components/forms/fileUploaderContent";
import { FileUploaderItem } from "../../components/forms/fileUploaderItem";
import PdfForm from "../../components/forms/pdf-form";
import { Button } from "../../components/ui/button";
import { Heading } from "../../components/ui/heading";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { FileUploader } from "../../hooks/useFileUpload";
import { useUploadPdf } from "../../lib/react-query/quries-mutations";

const AddPdf = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const dropZoneConfig = {
    accept: ".pdf",
    multiple: true,
    maxSize: 4048576,
  };
  const { mutateAsync: uploadPdf, isError, isPending } = useUploadPdf();
  console.log(files);

  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("description", formData.description);
      formdata.append("file", files[0]);
      console.log(formdata);
      const res = await uploadPdf(formdata);
      console.log(res);
      toast.success("Pdf uploaded successfully");
      navigate("/pdfs");
    } catch (error: any) {
      console.log(error);
      if (error.response.data.errors) {
        error.response.data.errors.forEach((err: any) => {
          toast.error(err.message);
        });
      } else {
        toast.error(error.response.data.message);
      }
    }
  };
  console.log(formData);
  useEffect(() => {
    if (isError) {
      console.log("Error", isError);
    }
  }, []);
  return (
    <div className="flex-1 space-y-4 p-5 md:w-8/12 md:mx-auto">
      <Heading
        title={"Upload pdf"}
        description={" Upload pdf to server and get linked"}
      />

      <FileUploader
        value={files}
        // @ts-expect-error
        onValueChange={setFiles}
        //@ts-expect-error
        dropzoneOptions={dropZoneConfig}
        className="relative  space-y-1 "
      >
        <PdfForm className="border border-dashed border-gray-500 w-full ">
          <div className="flex items-center justify-center h-32 w-full border bg-background rounded-md">
            <p className="text-gray-400">Drop files here</p>
          </div>
        </PdfForm>
        <FileUploaderContent className="h-12">
          {files.map((file, index) => (
            <FileUploaderItem key={index} index={index}>
              {file.name}
            </FileUploaderItem>
          ))}
        </FileUploaderContent>
      </FileUploader>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <div>
          <Label className="text-sm">Name</Label>
          <Input
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
        </div>
        <div>
          <Label className="text-sm">Description</Label>

          <Input
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </div>
      </div>
      <Button className="w-full mt-4" onClick={handleUpload}>
        {isPending ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
};

export default AddPdf;
