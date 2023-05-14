import { Glass } from './Glass.model';
import { GlassResponse } from './Glass.strapi';
import { IGlass } from './Glass.types';

export const GlassAdapter = (response: GlassResponse): IGlass => {
  return new Glass(response.data.id, response.data.attributes.name, response.data.attributes.price);
};
