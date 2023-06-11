"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  resetWindowState,
  selectCurrentWindow,
} from "@/lib/redux/features/createWindow/createWindowSlice";
import { addWindowToQuote } from "@/lib/redux/features/quoteDocument/quoteSlice";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { StepperContext } from "./StepperContext";

const notify = () => toast.success("Ventana creada.");

export const HandleStepper = () => {
  const { handleBack, currentStep, allSteps } = useContext(StepperContext);
  const currentWindowCreate = useAppSelector(selectCurrentWindow);
  const dispatch = useAppDispatch();
  const handleWindowCreated = () => {
    notify();
    dispatch(addWindowToQuote(currentWindowCreate));
    dispatch(resetWindowState());
  };

  return (
    <div className="w-full mt-10">
      <div className="flex justify-between w-full h-20 px-2 sm:px-10">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Atras
        </button>
        {currentStep === allSteps.length - 1 ? (
          <Link
            role="button"
            href={"/"}
            onClick={handleWindowCreated}
            className="btn btn-outline"
          >
            Añadir
          </Link>
        ) : (
          <button
            className="btn btn-outline "
            type="submit"
            disabled={currentStep === allSteps.length - 1}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};
