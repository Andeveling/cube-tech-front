import { StepFour } from "@/components/models/stepper/StepFour";
import { StepOneLocation } from "@/components/models/stepper/StepOneLocation";
import StepperProvider from "@/components/models/stepper/StepperContext";
import { StepThreeSetGlass } from "@/components/models/stepper/StepThreeSetGlass";
import { StepTwoDimensions } from "@/components/models/stepper/StepTwoDimensions";
import { WindowCreateStepper } from "@/components/models/stepper/WindowCreateStepper";
import { WindowPVCDraw } from "@/components/models/stepper/WindowPVCDraw";
import Heading from "@/components/shared/heading";
import { arqustikConfig } from "@/lib/constants";
import { GlassCategoriesResponseT } from "@/models/strapi/Glasses.response";
import { ModelResponseT } from "models/strapi/windowModel.response";
import { Suspense } from "react";

type Params = { params: { modelId: string } };

const getModelWindowPVC = async (modelId: string) => {
  const res = await fetch(
    `${arqustikConfig.STRAPI_SERVER}/window-models/${modelId}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch models data");
  return res.json();
};

const getGlasses = async () => {
  const res = await fetch(
    `${arqustikConfig.STRAPI_SERVER}/glass-categories?populate=glasses`,
    {
      next: { revalidate: 10 },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch glasses data");
  return res.json();
};

export default async function SystemPage({ params: { modelId } }: Params) {
  const modelData: Promise<ModelResponseT> = await getModelWindowPVC(modelId);
  const glassCategoriesData: Promise<GlassCategoriesResponseT> =
    await getGlasses();
  const model = await modelData;
  const glassCategories = await glassCategoriesData;


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

        <Suspense fallback={<h1>Loading...</h1>}>
          <StepperProvider
            steps={[
              <StepOneLocation />,
              <StepTwoDimensions
                minH={model.data.attributes.minH}
                maxH={model.data.attributes.maxH}
                minW={model.data.attributes.minW}
                maxW={model.data.attributes.maxW}
              />,
              <StepThreeSetGlass glassCategories={glassCategories} />,
              <StepFour />,
            ]}
          >
            <WindowCreateStepper />
          </StepperProvider>
        </Suspense>
      </div>
    </div>
  );
}
