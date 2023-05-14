import axios from 'axios';
import { GlassResponse } from '../models/Item/Glass/Glass.strapi';
import { GlassAdapter } from '../models/Item/Glass/Glass.adapter';

export const getGlassById = async (id: number | string) => {
  try {
    const response = await axios.get<GlassResponse>(`http://localhost:1337/api/glasses/${id}`);
    const data = response.data;
    const glassAdapted = GlassAdapter(data);
    return glassAdapted;
  } catch (error) {
    throw error;
  }
};
