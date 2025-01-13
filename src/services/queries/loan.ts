import { BusinessTypeResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { getBusinessTypes } from "../helpers/loan";

export const useBusinessTypesQuery = () => {
  return useQuery<BusinessTypeResponse, Error>({
    queryKey: [QUERY_KEYS.BUSINESS_TYPES],
    queryFn: () => getBusinessTypes(),
  });
};
