import { fetchAPI } from "@/lib/utils";
import { ID } from "@/models/id.interface";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";

import { WindowModelAdapter } from "@/models/WindowModel/WindowModel.adapter";
import { WindowModelAttributes } from "@/models/WindowModel/WindowModel.strapi";

import { IModelWindow } from "../models/WindowModel/WindowModel.types";

export const getModels = async () => {
  const path = "/windows_models";
  const urlParams = {
    sort: { id: "desc" },
  };
  const response: Promise<IModelWindow[]> = await fetchAPI(path, urlParams);
  return response;
};

export const getModelWindowPVC = async (modelId: ID) => {
  const id = modelId;
  const path = `/window-models/${id}`;
  const urlParams = {
    populate: {
      system_pvc: { field: "name" },
    },
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData: Promise<SingleStrapiResponse<WindowModelAttributes>> =
    await fetchAPI(path, urlParams);
  return responseData;
};

export const getModelWindowPvcWithSystem = async (modelId: ID) => {
  const id = modelId;
  const path = `/window-models/${id}`;
  const urlParams = {
    populate: {
      frame_profile: { populate: "*" },
      sash_profile: { populate: "*" },
      transom_profile: { populate: "*" },
      system_pvc: "system_pvc",
    },
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };
  const responseData: Promise<SingleStrapiResponse<WindowModelAttributes>> =
    await fetchAPI(path, urlParams);
  return responseData;
};

export const getModelWindowPVCAdapted = async (modelId: ID) => {
  const id = modelId;
  const path = `/window-models/${id}`;
  const urlParams = {
    populate: {
      frame_profile: {
        populate: {
          reinforcement_profile: {
            populate: {
              reinforcement_screw: "reinforcement_screw",
            },
          },
        },
      },
      sash_profile: {
        populate: {
          reinforcement_profile: {
            populate: {
              reinforcement_screw: "reinforcement_screw",
            },
          },
        },
      },
      transom_profile: {
        populate: {
          reinforcement_profile: {
            populate: {
              reinforcement_screw: "reinforcement_screw",
            },
          },
        },
      },
      hardware_kit: {
        populate: "deep",
      },
      system_pvc: "*",
    },
  };
  // const options = { headers: { Authorization: `Bearer ${token}` } };

  const responseData: Promise<SingleStrapiResponse<WindowModelAttributes>> =
    await fetchAPI(path, urlParams);
  const modelData = await responseData;

  const modelAdapted = WindowModelAdapter(modelData);
  return modelAdapted;
};
