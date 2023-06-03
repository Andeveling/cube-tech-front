import { Meta, SingleStrapiResponse } from "../strapi/Global.response";
import { AdminRules } from "./AdminRules.class";
import { AdminRulesAttributes } from "./AdminRules.strapi";

export const AdminRulesAdapted = (adminRulesResponse: SingleStrapiResponse<AdminRulesAttributes>) => {
  const AdminRulesInstance = AdminRules.createInstance();
  AdminRulesInstance.TRM = adminRulesResponse.data.attributes.TRM;
  AdminRulesInstance.utility = adminRulesResponse.data.attributes.utility;
  return AdminRulesInstance;
};
