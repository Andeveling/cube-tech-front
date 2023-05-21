"use client";
import { useContext } from "react";
import { StepperContext } from "./StepperContext";

export const HandleStepper = ({ finalStep }: { finalStep?: boolean }) => {
  const { handleBack, currentStep, allSteps } =
    useContext(StepperContext);
  return (
    <div className="w-full mt-10">
      <div className="flex justify-between w-full h-20 px-10">
        <button
          className="btn"
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Atras
        </button>
        {currentStep === allSteps.length - 1 ? (
          <button className="btn btn-outline" type="button">
            Añadir
          </button>
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
