import { arqustikConfig } from "@/lib/constants";
import { SystemModelsResponseI } from "models/strapi/Systems.response";
import { ModelResponseT } from "models/strapi/windowModel.response";

type Params = { params: { modelId: string } };

const getModelWindowPVC = async (modelId: string) => {
  const res = await fetch(
    `${arqustikConfig.STRAPI_SERVER}/window-models/${modelId}`,
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function SystemPage({ params: { modelId } }: Params) {
  const model: ModelResponseT = await getModelWindowPVC(modelId);
  return (
    <div className="">
      <h2>{model.data.attributes.name}</h2>
    </div>
  );
}
