import { StepFour } from "@/components/models/modelForm/stepper/StepFour";
import { StepOne } from "@/components/models/modelForm/stepper/StepOne";
import StepperProvider from "@/components/models/modelForm/stepper/StepperContext";
import { StepThree } from "@/components/models/modelForm/stepper/StepThree";
import { StepTwo } from "@/components/models/modelForm/stepper/StepTwo";
import { WindowCreateStepper } from "@/components/models/modelForm/stepper/WindowCreateStepper";
import { WindowPVCDraw } from "@/components/models/modelForm/WindowPVCDraw";
import Heading from "@/components/shared/heading";
import { arqustikConfig } from "@/lib/constants";
import { ModelResponseT } from "models/strapi/windowModel.response";
import { Suspense } from "react";

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
     
      <Heading>Diseño</Heading>
      <p
        className="mb-10 text-center text-gray-500 opacity-0 animate-fade-up md:text-2xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Configura tu ventana.
      </p>
      <div className="grid justify-center w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 ">
        <Suspense fallback={<h1>Loading...</h1>}>
          <WindowPVCDraw model={model.data.attributes.draw_ref} />
        </Suspense>
        {/* Este componente tiene problemas para implementar un formulario controlado */}
        {/* <CreateWindowForm/> */}

        <Suspense fallback={<h1>Loading...</h1>}>
          <StepperProvider
            steps={[<StepOne />, <StepTwo />, <StepThree />, <StepFour />]}
          >
            <WindowCreateStepper />
          </StepperProvider>
        </Suspense>
      </div>
    </div>
  );
}
