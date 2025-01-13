import { LGAResponse, StateResponse } from "@/types";
import request from "@/utils/axios";

export const getStates = async (
  countryCode: string = "NG"
): Promise<StateResponse> => {
  const { data } = await request.get<StateResponse>(`/generic/states`, {
    params: { countryCode },
  });
  return data;
};

export const getLGAs = async (
  countryCode: string,
  state: string
): Promise<LGAResponse> => {
  const { data } = await request.get<LGAResponse>(`/generic/states-lga`, {
    params: { countryCode, state },
  });
  return data;
};
