import axios from 'axios';
import { GlassResponse } from '../models/Item/Glass/Glass.strapi';
import { GlassAdapter } from '../models/Item/Glass/Glass.adapter';
import { fetchAPI } from '@/lib/utils';
import { GlassCategoriesResponseT } from '@/models/GlassCategories/GlassCategory.strapi';


export const getGlasses = async () => {
  const path = `/glass-categories`;
  const urlParams = {
    sort: { createdAt: "desc" },
    populate: {
      glasses: { populate: "glass_glazing_bead_system" },
    },
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData: Promise<GlassCategoriesResponseT> = await fetchAPI(
    path,
    urlParams,
  );
  return responseData;
};


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
