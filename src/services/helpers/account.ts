import { AccountOpeningPayload, AccountOpeningResponse } from "@/types";
import request from "@/utils/axios";

export const submitAccountOpening = async (
  payload: AccountOpeningPayload
): Promise<AccountOpeningResponse> => {
  const { data } = await request.post<AccountOpeningResponse>(
    "/account/submit",
    payload
  );
  return data;
};
