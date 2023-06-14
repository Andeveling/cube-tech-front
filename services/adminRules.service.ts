import { fetchAPI } from "@/lib/utils";
import { AdminRulesAdapted } from "@/models/AdminRules/AdminRules.adapter";
import { AdminRulesAttributes } from "@/models/AdminRules/AdminRules.strapi";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";

export const getAdminRules = async () => {
  const path = `/admin-rule`;
  const response: Awaited<Promise<SingleStrapiResponse<AdminRulesAttributes>>> =
    await fetchAPI(path);
  const responseData = await response;

  const adapter = AdminRulesAdapted(responseData);
  return adapter;
};
