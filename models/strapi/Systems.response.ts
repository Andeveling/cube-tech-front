import { Meta } from "./Global.response";

export type SystemsResponseT = {
  data: SystemDataT[];
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
};


export type SystemModelsResponseI = {
  data: Data;
  meta: Meta;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  showName: string;
  window_models: WindowModels;
};

export type WindowModels = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: DatumAttributes;
};

export type DatumAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

