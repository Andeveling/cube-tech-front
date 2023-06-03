import { GlazingGlassCaliberAdapter } from "../models/Item/GlazingBead/GlazingBeadGlassCaliber.adapter";
import { fetchAPI } from "@/lib/utils";
import { SystemAttributesT } from "@/models/System-PVC/SystemPVC.strapi";
import { ID } from "@/models/id.interface";
import {
  CollectionStrapiResponse,
  SingleStrapiResponse,
} from "@/models/strapi/Global.response";
import { GlazingBeadGlassAttributes } from "@/models/Item/GlazingBead/GlazingBeadGlassCaliber.strapi";

export const getSystemsPVC = async () => {
  const path = `/system-pvcs`;
  const response: Promise<CollectionStrapiResponse<SystemAttributesT>> =
    await fetchAPI(path);

  return response;
};

export const getSystemWithModelsPVC = async (systemId: ID) => {
  const id = systemId;
  const path = `/system-pvcs/${id}`;
  const urlParams = {
    // sort: { id: "desc" },
    populate: "window_models",
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData: Promise<SingleStrapiResponse<SystemAttributesT>> =
    await fetchAPI(path, urlParams);
  return responseData;
};

export const getGlassGlazingDeep = async (id: ID) => {
  const path = `/glass-glazing-bead-systems/${id}`;
  const urlParams = {
    populate: "deep",
  };
  const response: Promise<SingleStrapiResponse<GlazingBeadGlassAttributes>> = await fetchAPI(
    path,
    urlParams,
  );
  const data = await response;
  const glazingAdapted = GlazingGlassCaliberAdapter(data);
  return glazingAdapted;
};
