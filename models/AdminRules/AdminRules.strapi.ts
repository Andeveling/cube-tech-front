import { Meta } from "../strapi/Global.response";

export interface AdminRulesResponse {
  data: AdminRulesData;
  meta: Meta;
}

export interface AdminRulesData {
  attributes: AdminRulesAttributes;
  id: number;
}

export interface AdminRulesI {
  TRM: number;
  utility: number;
}

export interface AdminRulesAttributes extends AdminRulesI {
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
}
