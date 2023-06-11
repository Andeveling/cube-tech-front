"use client";
import Heading from "@/components/shared/heading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  resetWindowState,
  selectCurrentWindow,
} from "@/lib/redux/features/createWindow/createWindowSlice";

import { HandleStepper } from "./HandleStepper";

export const StepFour = () => {
  const currentWindow = useAppSelector(selectCurrentWindow);

  return (
    <div className="flex flex-col justify-center w-full">
      <Heading as="h3">Resumen</Heading>

      <div className="grid max-w-lg grid-cols-2 mx-auto text-xl">
        <h3 className="col-span-2 my-2 text-center">
          {currentWindow.reference} | {currentWindow.location}
        </h3>
        <div className="p-2 border-t border-r">Dimesiones</div>
        <div className="p-2 border-t">
          {currentWindow.width}mm x {currentWindow.height}mm
        </div>
        <div className="p-2 border-t border-r">Area</div>
        <div className="p-2 border-t">
          {(currentWindow.width / 1000) * (currentWindow.height / 1000)}m²
        </div>
        <div className="p-2 border-t border-r">Vidrio</div>
        <div className="p-2 border-t">
          {(currentWindow.glassData &&
            currentWindow.glassData.attributes.nameUI) ||
            ""}
        </div>

        <div className="p-2 border-t border-r">Color</div>
        <div className="p-2 border-t">Blanco</div>
        <div className="p-2 border-t border-b border-r">Cantidad</div>
        <div className="p-2 border-t border-b">{currentWindow.quantity}</div>
      </div>
      <HandleStepper />
    </div>
  );
};
