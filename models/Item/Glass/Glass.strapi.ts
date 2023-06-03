import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { GlazingBeadGlassAttributes } from "../GlazingBead/GlazingBeadGlassCaliber.strapi";

export interface GlassAttributes {
  createdAt: Date;
  description: string;
  features: string[];
  name: string;
  nameUI: string;
  price: number;
  publishedAt: Date;
  updatedAt: Date;
  glass_glazing_bead_system: SingleStrapiResponse<GlazingBeadGlassAttributes>;
}

export enum GlassType {
  MONOLITHIC = "monolithic",
  LAMINATED = "laminated",
  INSULATED = "insulated",
}
