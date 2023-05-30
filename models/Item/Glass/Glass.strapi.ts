import { Meta } from "@/models/strapi/Global.response";


export interface GlassResponse {
  data: GlassData;
  meta: Meta;
}

interface GlassData {
  id: number;
  attributes: GlassAttributes;
}

interface GlassAttributes {
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

