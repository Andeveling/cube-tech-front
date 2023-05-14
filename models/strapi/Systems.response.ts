import { Meta } from "./Global.response";
import { WindowModels } from "./SystemModels.response";

export type SystemsResponseT = {
  data: SystemDataT[];
  meta: Meta;
};

export type SystemResponseT = {
  data: SystemDataT;
  meta: Meta;
};

export type SystemDataT = {
  id: number;
  attributes: SystemAttributesT;
};

export type SystemAttributesT = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  showName: string;
  window_models: WindowModels;
};

