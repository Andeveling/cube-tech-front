import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { GlassAttributes } from "../Glass/Glass.strapi";

export interface GlazingBeadGlassAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  glass: SingleStrapiResponse<GlassAttributes>;
  glass_caliber: SingleStrapiResponse<GlassCaliberAttributes>;
  glazing_bead_profile: SingleStrapiResponse<GlazingAttributes>;
}

interface GlazingAttributes {
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  id_provider: string;
}

interface GlassCaliberAttributes {
  caliber: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
}
