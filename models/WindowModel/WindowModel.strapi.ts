import { Meta } from "../strapi/Global.response";
import { SystemResponseT } from "../System-PVC/SystemPVC.strapi";
import { WindowModelsEnum } from "../windowPVC.model";

export interface WindowsModelsResponse {
  data: WindowModelResponseData[];
  meta: Meta;
}

export interface WindowModelResponse {
  data: WindowModelResponseData;
  meta: Meta;
}

interface WindowModelResponseData {
  id: number;
  attributes: WindowModel;
}

interface WindowModel {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  draw_ref: WindowModelsEnum;
  frame_profile: PVCProfileResponseData;
  sash_profile: PVCProfileResponseData;
  transom_profile: PVCProfileResponseData;
  hardware_kit: HardwareKit;
  system_pvc: SystemResponseT;
}
export interface HardwareKit {
  data: HardwareKitData;
}
export interface HardwareKitData {
  id: number;
  attributes: HardwareAttributes;
}

export interface HardwareAttributes {
  name: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  striker_quantities: Quantities;
  mullion_quantities: Quantities;
  cremona_quantities: Quantities;
}

interface Quantities {
  data: AccessoryDataResponse[];
}

interface AccessoryDataResponse {
  id: number;
  attributes: AccessoriesAttributes;
}

export interface AccessoriesAttributes {
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cremona: AccessoryResponseData;
  mullion: AccessoryResponseData;
  striker: AccessoryResponseData;
}

interface AccessoryResponseData {
  data: AccessoryData;
}

interface AccessoryData {
  id: number;
  attributes: AccessoryAttributes;
}

interface AccessoryAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface PVCProfileResponseData {
  data: PVCProfileData;
}
interface ReinforcementResponseData { 
  data: ReinforcementData;
}
interface ReinforcementScrewResponseData {
  data: ReinforcementScrewData;
}


interface ReinforcementData  {
  id: number;
  attributes: ReinforcementProfileAttributes;
};
interface ReinforcementScrewData {
  id: number;
  attributes: ReinforcementScrewAttributes;
}

interface PVCProfileData {
  id: number;
  attributes: PVCProfileAttributes;
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
  reinforcement_profile: ReinforcementResponseData;
}

interface ReinforcementProfileAttributes  {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  reinforcement_screw: ReinforcementScrewResponseData;
};


