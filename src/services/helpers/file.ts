import { FileUploadResponse } from "@/types";
import request from "@/utils/axios";

export const uploadFile = async (file: File): Promise<FileUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await request.post<FileUploadResponse>(
    "/generic/file-upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};
