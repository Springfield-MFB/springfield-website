import { LGAResponse, StateResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getLGAs, getStates } from "../helpers/generic";

export const useStatesQuery = (countryCode: string = "NG") => {
  return useQuery<StateResponse, Error>({
    queryKey: [countryCode],
    queryFn: () => getStates(countryCode),
  });
};

export const useLGAsQuery = (countryCode: string, state: string) => {
  return useQuery<LGAResponse, Error>({
    queryKey: [countryCode, state],
    queryFn: () => getLGAs(countryCode, state),
    enabled: !!state && !!countryCode,
  });
};
