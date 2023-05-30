import { Meta } from "../strapi/Global.response";
import { WindowsModelsResponse } from "../WindowModel/WindowModel.strapi";

export interface SystemsResponseT {
  data: SystemDataT[];
  meta: Meta;
}

export interface SystemResponseT  {
  data: SystemDataT;
  meta: Meta;
};

export interface SystemDataT  {
  id: number;
  attributes: SystemAttributesT;
};

export interface SystemAttributesT {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  showName: string;
  window_models: WindowsModelsResponse;
};
