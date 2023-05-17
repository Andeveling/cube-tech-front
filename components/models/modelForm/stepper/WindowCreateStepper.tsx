"use client";
import { useContext } from "react";

import { selectCurrentWindow } from "@/lib/redux/quoteDocument/quoteSlice";
import { SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { StepperContext } from "./StepperContext";

export const WindowCreateStepper = () => {
  const currentWindow = useSelector(selectCurrentWindow);
  const onSubmit: SubmitHandler<any> = async (data) => alert(data);
  const { currentStep, handleBack, handleNext, allSteps } =
    useContext(StepperContext);


  return (
    <div className="min-h-[600px]  flex flex-col items-center max-w-xl">
      <ul className="w-full h-auto pb-10 steps">
        <li
          data-content={`${currentStep > 0 ? "✓" : "1"}`}
          className={`step step-primary ${currentStep >= 0 && "step-primary"}`}
        >
          Ubicacion
        </li>
        <li
          data-content={`${currentStep > 1 ? "✓" : "2"}`}
          className={`step  ${currentStep >= 1 && "step-primary"}`}
        >
          Medidas
        </li>
        <li
          data-content={`${currentStep > 1 ? "✓" : "2"}`}
          className={`step  ${currentStep >= 2 && "step-primary"}`}
        >
          Cristal
        </li>
        <li className={`step  ${currentStep >= 3 && "step-primary"}`}>
          Resumen
        </li>
      </ul>

      {allSteps[currentStep]}

      <div className="flex justify-between w-full h-20 px-10">
        <button
          className="btn"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          className="btn btn-outline"
          onClick={handleNext}
          disabled={currentStep === allSteps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
