import { fetchAPI } from "@/lib/utils";
import { GlassCategoriesAttributes } from "@/models/GlassCategories/GlassCategory.strapi";
import { CollectionStrapiResponse } from "@/models/strapi/Global.response";

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
