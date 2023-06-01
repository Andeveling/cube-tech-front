
import { GlazingBeadGlassResponse } from "../models/Item/GlazingBead/GlazingBeadGlassCaliber.types";
import { GlazingGlassCaliberAdapter } from "../models/Item/GlazingBead/GlazingBeadGlassCaliber.adapter";
import { fetchAPI } from "@/lib/utils";
import { SystemResponseT, SystemsResponseT } from "@/models/System-PVC/SystemPVC.strapi";
import { ID } from "@/models/id.interface";

export const getSystemsPVC = async () => {
  const path = `/system-pvcs`;
  const response: Promise<SystemsResponseT> = await fetchAPI(path);
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
  const responseData: Promise<SystemResponseT> = await fetchAPI(
    path,
    urlParams,
  );
  return responseData;
};

export const getGlassGlazingDeep = async (id: ID) => {
  const path = `/glass-glazing-bead-systems/${id}`;
  const urlParams = {
    populate: "deep",
  };
  const response: Promise<GlazingBeadGlassResponse> = await fetchAPI(
    path,
    urlParams,
  );
  const data = await response;
  const glazingAdapted = GlazingGlassCaliberAdapter(data);
  return glazingAdapted;
};
