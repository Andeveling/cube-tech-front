"use client";
import { ReactNode, useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

export const WindowCreateStepper = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [<StepOne />, <StepTwo />, <StepThree />];
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
        <li className={`step  ${currentStep >= 2 && "step-primary"}`}>
          Cristal
        </li>
      </ul>
      {steps[currentStep]}
      <div className="flex justify-between w-full h-20 px-10">
        <button
          className="btn"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>

        {currentStep === steps.length - 1 ? (
          <button className="btn btn-outline" onClick={() => confirm("Anadir")}>
            Add
          </button>
        ) : (
          <button
            className="btn btn-outline"
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
