"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type StepperContextT = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  allSteps: ReactNode[];
};

export const StepperContext = createContext<StepperContextT>(
  {} as StepperContextT,
);

type StepperProps = {
  children: ReactNode;
  steps: ReactNode[];
};

const StepperProvider = ({ children, steps }: StepperProps) => {
  const allSteps = steps;
  const [currentStep, setCurrentStep] = useState<number>(0);

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
    <StepperContext.Provider
      value={{
        handleBack,
        handleNext,
        currentStep,
        setCurrentStep,
        allSteps,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export default StepperProvider;
