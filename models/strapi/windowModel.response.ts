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
  minH: number;
  minW: number;
  maxH: number;
  maxW: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
