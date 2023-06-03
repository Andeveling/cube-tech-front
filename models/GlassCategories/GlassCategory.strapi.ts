import { GlassAttributes, GlassType } from "../Item/Glass/Glass.strapi";
import {
  CollectionStrapiResponse
} from "../strapi/Global.response";

export interface GlassCategoriesAttributes {
  name: string;
  glassType: GlassType;
  createdAt: Date;
  glasses: CollectionStrapiResponse<GlassAttributes>;
  features: string[];
  publishedAt: Date;
  updatedAt: Date;
}






