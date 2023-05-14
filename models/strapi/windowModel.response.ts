import { WindowModelsEnum } from "../windowPVC.model";
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
  draw_ref: WindowModelsEnum;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
