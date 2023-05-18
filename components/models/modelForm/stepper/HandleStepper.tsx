"use client"
import { useContext } from "react";
import { StepperContext } from "./StepperContext";

export const HandleStepper = () => {
     const { handleNext, handleBack, currentStep, allSteps } = useContext(StepperContext);
  return (
    <div className="w-full mt-10">
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
          type="submit"
          disabled={currentStep === allSteps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}