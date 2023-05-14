import { Meta } from '../../ResponseStrapi/ResponseStrapi.model';
import { GlassResponse } from '../Glass/Glass.strapi';

export interface GlazingBeadGlassResponse {
  data: GlazingBeadGlassData;
  meta: Meta;
}

interface GlazingBeadGlassData {
  id: number;
  attributes: GlazingBeadGlassAttributes;
}

interface GlazingBeadGlassAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  glass: GlassResponse;
  glass_caliber: GlassCaliberResponse;
  glazing_bead_profile: GlazingBeadResponse;
}

interface GlazingBeadResponse {
  data: GlazingBeadData;
}
interface GlazingBeadData {
  id: number;
  attributes: GlazingAttributes;
}
interface GlazingAttributes {
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  id_provider: string;
}

interface GlassCaliberResponse {
  data: GlassCaliberData;
}
interface GlassCaliberData {
  id: number;
  attributes: GlassCaliberAttributes;
}
interface GlassCaliberAttributes {
  caliber: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
}
