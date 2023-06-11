import { CollectionStrapiResponse } from "../strapi/Global.response";
import { WindowModelAttributes } from "../WindowModel/WindowModel.strapi";
import { SystemsAvailableEnum } from "./SystemPVC.interface";

export interface SystemI {
  name: SystemsAvailableEnum;
  showName: string;
  window_models: CollectionStrapiResponse<WindowModelAttributes>;
  imageUrl: string;
  imageWindow: string
  imageDoor: string
  description: string;
  features: string[];
}

export interface SystemAttributesT extends SystemI {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
