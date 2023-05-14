import { Meta } from '../ResponseStrapi/ResponseStrapi.model';

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
  frame_profile: FrameProfile;
  sash_profile: FrameProfile;
  transom_profile: FrameProfile;
  hardware_kit: HardwareKit;
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
  cremona: Accessory;
  mullion: Accessory;
  striker: Accessory;
}

interface Accessory {
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

interface FluffyAttributes {
  id_provider: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cuttingTransomSize: number;
  cuttingGlassSize: number;
  cuttingSashSize: number;
  reinforcement_profile: FrameProfile;
  reinforcement_screw: FrameProfile;
}

interface FrameProfileData {
  id: number;
  attributes: FluffyAttributes;
}

interface FrameProfile {
  data: FrameProfileData;
}
