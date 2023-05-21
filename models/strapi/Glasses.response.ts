import { Meta } from "./Global.response";

export interface GlassCategoriesResponseT {
  data: GlassCategoriesDatum[];
  meta: Meta;
}

export interface GlassCategoriesDatum {
  attributes: GlassCategoriesAttributes;
  id: number;
}

export interface GlassCategoriesAttributes {
  name: string;
  glassType: GlassType;
  createdAt: Date;
  glasses: Glasses;
  features: string[]
  publishedAt: Date;
  updatedAt: Date;
}

export interface Glasses {
  data: GlassDatum[];
}

export interface GlassDatum {
  attributes: GlassAttributes;
  id: number;
}

export interface GlassAttributes {
  createdAt: Date;
  description: string;
  features: string[];
  name: string;
  nameUI: string;
  price: number;
  publishedAt: Date;
  updatedAt: Date;

}

export enum GlassType {
  MONOLITHIC = 'monolithic',
  LAMINATED = 'laminated',
  INSULATED = 'insulated'
}