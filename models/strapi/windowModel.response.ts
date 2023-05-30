
import { SystemResponseT } from "../System-PVC/SystemPVC.strapi";
import { WindowModelsEnum } from "../windowPVC.model";
import { Meta } from "./Global.response";

export interface ModelResponseT  {
  data: ModelData;
  meta: Meta;
};

interface ModelData  {
  id: number;
  attributes: ModelAttributes;
};

interface ModelAttributes {
  name: string;
  draw_ref: WindowModelsEnum;
  minH: number;
  minW: number;
  maxH: number;
  maxW: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  system_pvc: SystemResponseT;
};

