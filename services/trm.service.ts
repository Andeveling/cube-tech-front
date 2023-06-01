import { fetchAPI } from "@/lib/utils";
import { TRMAdapted } from "@/models/TRM/TRM.adapter";
import { TRMResponse } from "@/models/TRM/TRM.strapi";

export const getTRM = async () => {
  const path = `/trm`;
  const responseData: Promise<TRMResponse> = await fetchAPI(path);
  const data = await responseData;
  const adapter = TRMAdapted(data);
  return adapter;
};
