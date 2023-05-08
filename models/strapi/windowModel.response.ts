import { Meta } from "./Global.response";

export type ModelResponseT = {
  data: ModelData;
  meta: Meta;
};

type ModelData = {
  id: number;
  attributes: ModelAttributes;
};

type ModelAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
