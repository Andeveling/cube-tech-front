import { Meta } from '../../ResponseStrapi/ResponseStrapi.model';

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
