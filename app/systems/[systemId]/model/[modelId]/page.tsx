import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { WindowCreateStepper } from "@/components/systems/models/glassType/stepper/WindowCreateStepper";
import { arqustikConfig } from "@/lib/constants";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { ModelResponseT } from "models/strapi/windowModel.response";

type Params = { params: { modelId: string } };

const getModelWindowPVC = async (modelId: string) => {
  const res = await fetch(
    `${arqustikConfig.STRAPI_SERVER}/window-models/${modelId}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function SystemPage({ params: { modelId } }: Params) {
  const model: ModelResponseT = await getModelWindowPVC(modelId);
  return (
    <div className="container w-full h-full mx-auto">
      <h2 className="my-2 text-6xl text-center">Diseno</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <WindowPVC model={model.data.attributes.draw_ref} />
        <WindowCreateStepper />
      </div>
    </div>
  );
}

const WindowPVC = ({ model }: { model: WindowModelsEnum }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] w-[600px]">
      <h2 className="mb-3 text-2xl">V1 Alcoba</h2>

      <div className="w-full h-full border border-gray-300 shadow-md">
        <WindowDraw height={0} width={0} model={model} />
      </div>
      <div className="divider">1000 mm</div>
    </div>
  );
};
