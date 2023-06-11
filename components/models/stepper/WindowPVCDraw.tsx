"use client";
import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { selectCurrentWindow } from "@/lib/redux/features/createWindow/createWindowSlice";

import { WindowModelsEnum } from "@/models/windowPVC.model";

export const WindowPVCDrawStepper = ({
  model,
}: {
  model: WindowModelsEnum;
}) => {
  const { reference, location, width, height, glassData } =
    useAppSelector(selectCurrentWindow);
  return (
    <div className="flex flex-col items-center justify-center mx-auto ">
      {reference && location ? (
        <h2 className="mb-3 text-2xl">
          {reference} | {location}
        </h2>
      ) : (
        <h2 className="mb-3 text-2xl">Referencia</h2>
      )}
      <div className="relative  md:mb-0 mb-4 border border-gray-300 shadow-md md:h-[500px] md:w-[500px] h-[350px] w-[350px]">
        {glassData && (
          <div className="absolute z-10 top-6 left-4 badge badge-primary">
            Cristal: {glassData.attributes.nameUI}
          </div>
        )}
        <WindowDraw height={0} width={0} model={model} />
        <div className="absolute right-4 md:-right-6 badge badge-primary top-1/2">
          {width}mm
        </div>
        <div className="absolute left-[45%] badge badge-primary -bottom-7">
          {height}mm
        </div>
      </div>
    </div>
  );
};
