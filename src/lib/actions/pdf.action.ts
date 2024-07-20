import axios_instance from "../axios";

export const uploadPdf = async (data: any) => {
  try {
    console.log("data in pdfupload===>", data);
    const response = await axios_instance.post(`/pdf/upload-pdf`, data);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const deletePdfById = async (id: string) => {
  try {
    const response = await axios_instance.delete(`/pdf/delete-pdf/${id}`);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
