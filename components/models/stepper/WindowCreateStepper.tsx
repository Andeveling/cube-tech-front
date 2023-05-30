"use client";
import { useContext } from "react";
import { StepperContext } from "./StepperContext";

export const WindowCreateStepper = () => {
  const { currentStep, allSteps } = useContext(StepperContext);

  return (
    <div className="flex justify-center">
      <div className="flex-col items-center w-full max-w-2xl ">
        <ul className="w-full h-auto pb-10 steps">
          <li
            data-content={`${currentStep > 0 ? "✓" : "1"}`}
            className={`step step-primary ${
              currentStep >= 0 && "step-primary"
            }`}
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
      </div>
    </div>
  );
};
