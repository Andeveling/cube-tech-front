import { SingleStrapiResponse } from "../strapi/Global.response";
import { SystemAttributesT } from "../System-PVC/SystemPVC.strapi";
import { WindowModelsEnum } from "../windowPVC.model";

export interface WindowModelAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  draw_ref: WindowModelsEnum;
  maxH: number;
  maxW: number;
  minH: number;
  minW: number;
  frame_profile: SingleStrapiResponse<PVCProfileAttributes>;
  sash_profile: SingleStrapiResponse<PVCProfileAttributes>;
  transom_profile: SingleStrapiResponse<PVCProfileAttributes>;
  hardware_kit: SingleStrapiResponse<HardwareAttributes>;
  system_pvc: SingleStrapiResponse<SystemAttributesT>;
}

export interface HardwareAttributes {
  name: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  striker_quantities: SingleStrapiResponse<AccessoriesAttributes>;
  mullion_quantities: SingleStrapiResponse<AccessoriesAttributes>;
  cremona_quantities: SingleStrapiResponse<AccessoriesAttributes>;
}

export interface AccessoriesAttributes {
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cremona: SingleStrapiResponse<AccessoryAttributes>;
  mullion: SingleStrapiResponse<AccessoryAttributes>;
  striker: SingleStrapiResponse<AccessoryAttributes>;
}

interface AccessoryAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface ReinforcementScrewAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface PVCProfileAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cuttingTransomSize: number;
  cuttingGlassSize: number;
  cuttingSashSize: number;
  reinforcement_profile: SingleStrapiResponse<ReinforcementProfileAttributes>;
}

interface ReinforcementProfileAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  reinforcement_screw: SingleStrapiResponse<ReinforcementScrewAttributes>;
}
