import { fetchAPI } from "@/lib/utils";
import { GlassCategoriesAttributes } from "@/models/GlassCategories/GlassCategory.strapi";
import {
  CollectionStrapiResponse,
  SingleStrapiResponse,
} from "@/models/strapi/Global.response";
import axios from "axios";
import { GlassAdapter } from "../models/Item/Glass/Glass.adapter";

export const getGlassesCategories = async () => {
  const path = `/glass-categories`;
  const urlParams = {
    sort: { createdAt: "desc" },
    populate: {
      glasses: { populate: "glass_glazing_bead_system" },
    },
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData: Promise<
    CollectionStrapiResponse<GlassCategoriesAttributes>
  > = await fetchAPI(path, urlParams);
  return responseData;
};

export const getGlassById = async (id: number | string) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/glasses/${id}`);
    const data = response.data;
    const glassAdapted = GlassAdapter(data);
    return glassAdapted;
  } catch (error) {
    throw error;
  }
};
