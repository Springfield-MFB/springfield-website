import {
  BusinessTypeResponse,
  LoanApplicationPayload,
  LoanApplicationResponse,
} from "@/types";
import request from "@/utils/axios";

export const getBusinessTypes = async (): Promise<BusinessTypeResponse> => {
  const { data } = await request.get<BusinessTypeResponse>(
    "/loans/business-types"
  );
  return data;
};

export const applyForLoan = async (
  payload: LoanApplicationPayload
): Promise<LoanApplicationResponse> => {
  const { data } = await request.post<LoanApplicationResponse>(
    "/loans/apply",
    payload
  );
  return data;
};
