"use client";
import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { selectCurrentWindow } from "@/lib/redux/quoteDocument/quoteSlice";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { useSelector } from "react-redux";

export const WindowPVCDraw = ({ model }: { model: WindowModelsEnum }) => {
  const { reference, location } = useSelector(selectCurrentWindow);
  return (
    <div className="flex flex-col items-center justify-center h-[600px] w-[600px]">
      <h2 className="mb-3 text-2xl">
        {reference} | {location}
      </h2>

      <div className="w-full h-full border border-gray-300 shadow-md">
        <WindowDraw height={0} width={0} model={model} />
      </div>
      <div className="divider">1000 mm</div>
    </div>
  );
};
