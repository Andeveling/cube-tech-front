"use client";
import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { selectCurrentWindow } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { WindowModelsEnum } from "@/models/windowPVC.model";


export const WindowPVCDraw = ({ model }: { model: WindowModelsEnum }) => {
  const { reference, location } = useAppSelector(selectCurrentWindow);
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-[600px] w-[600px]">
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
