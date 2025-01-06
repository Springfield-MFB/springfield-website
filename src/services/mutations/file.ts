import { FileUploadResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../helpers/file";

export const useUploadFileMutation = () => {
  return useMutation<FileUploadResponse, Error, File>({
    mutationFn: (file: File) => uploadFile(file),
  });
};
