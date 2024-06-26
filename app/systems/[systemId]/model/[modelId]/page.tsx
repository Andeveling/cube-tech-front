import { StepFour } from "@/components/models/stepper/StepFour";
import { StepOneLocation } from "@/components/models/stepper/StepOneLocation";

import { StepThreeSetGlass } from "@/components/models/stepper/StepThreeSetGlass";
import { StepTwoDimensions } from "@/components/models/stepper/StepTwoDimensions";
import { WindowCreateStepper } from "@/components/models/stepper/WindowCreateStepper";
import { WindowPVCDrawStepper } from "@/components/models/stepper/WindowPVCDraw";
import Heading from "@/components/shared/heading";
import { Suspense } from "react";
import { getGlassesCategories } from "@/services/glass.service";
import { getModelWindowPVC } from "@/services/windowModel.service";
import { v4 as uuid } from "uuid";
import Loader from "@/components/shared/Loader";
import StepperProvider from "@/components/models/stepper/StepperContext";

type Params = { params: { modelId: string } };

export default async function SystemPage({ params: { modelId } }: Params) {
  const [model, glassCategories] = await Promise.all([
    getModelWindowPVC(modelId),
    getGlassesCategories(),
  ]);

  return (
    <div className="container w-full h-full mx-auto">
      <Heading>Diseño</Heading>
      <p
        className="mb-2 text-center text-gray-500 opacity-0 md:mb-10 animate-fade-up md:text-2xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Configura tu ventana paso a paso.
      </p>
      <div className="grid justify-center w-full grid-cols-1 gap-4 p-2 xl:grid-cols-2">
        <Suspense fallback={<Loader />}>
          <div className="flex min-w-[350px]">
            <WindowPVCDrawStepper model={model?.data.attributes.draw_ref} />
          </div>

          <StepperProvider
            steps={[
              <StepOneLocation
                key={uuid()}
                modelId={model?.data.id}
                systemName={
                  model.data.attributes.system_pvc.data.attributes.name
                }
                model={model?.data.attributes.draw_ref}
              />,
              <StepTwoDimensions
                key={uuid()}
                minH={model?.data.attributes.minH}
                maxH={model?.data.attributes.maxH}
                minW={model?.data.attributes.minW}
                maxW={model?.data.attributes.maxW}
              />,
              <StepThreeSetGlass
                key={uuid()}
                glassCategories={glassCategories}
              />,
              <StepFour key={uuid()} />,
            ]}
          >
            <WindowCreateStepper />
          </StepperProvider>
        </Suspense>
      </div>
    </div>
  );
}
