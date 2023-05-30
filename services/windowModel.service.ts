import { fetchAPI } from "@/lib/utils";
import { ID } from "@/models/id.interface";
import { ModelResponseT } from "@/models/strapi/windowModel.response";
import { WindowModelAdapter } from "@/models/WindowModel/WindowModel.adapter";
import { WindowModelResponse } from "@/models/WindowModel/WindowModel.strapi";
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
  const responseData: Promise<ModelResponseT> = await fetchAPI(path, urlParams);
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
  const responseData: Promise<ModelResponseT> = await fetchAPI(path, urlParams);
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

  // const urlParams = {populate:'deep'}

  const responseData: Promise<WindowModelResponse> = await fetchAPI(
    path,
    urlParams,
  );
  const modelData = await responseData;
  console.log(
    modelData.data.attributes.frame_profile.data.attributes
      .reinforcement_profile.data.attributes.reinforcement_screw.data,
  );
  console.log(modelData.data.attributes);
  const modelAdapted = WindowModelAdapter(modelData);
  return modelAdapted;
};
