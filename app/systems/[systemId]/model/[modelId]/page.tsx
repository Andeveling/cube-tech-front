import { StepFour } from "@/components/models/modelForm/stepper/StepFour";
import { StepOne } from "@/components/models/modelForm/stepper/StepOne";
import StepperProvider from "@/components/models/modelForm/stepper/StepperContext";
import { StepThree } from "@/components/models/modelForm/stepper/StepThree";
import { StepTwo } from "@/components/models/modelForm/stepper/StepTwo";
import { WindowCreateStepper } from "@/components/models/modelForm/stepper/WindowCreateStepper";
import { WindowPVCDraw } from "@/components/models/modelForm/WindowPVCDraw";
import { arqustikConfig } from "@/lib/constants";
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
        <WindowPVCDraw model={model.data.attributes.draw_ref} />
        {/* Este componente tiene problemas para implementar un formulario controlado */}
        {/* <CreateWindowForm/> */}
        <StepperProvider
          steps={[<StepOne />, <StepTwo />, <StepThree />, <StepFour />]}
        >
          <WindowCreateStepper />
        </StepperProvider>
      </div>
    </div>
  );
}
