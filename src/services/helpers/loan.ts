import { LoanApplicationPayload, LoanApplicationResponse } from "@/types";
import request from "@/utils/axios";

export const applyForLoan = async (
  payload: LoanApplicationPayload
): Promise<LoanApplicationResponse> => {
  const { data } = await request.post<LoanApplicationResponse>(
    "/loans/apply",
    payload
  );
  return data;
};
