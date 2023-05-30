"use client";
import Heading from "@/components/shared/heading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowLocation,
  setModelWindowId,
  generateReference,
  setWindowSystem,
  setModelWidow,
} from "@/lib/redux/features/createWindow/createWindowSlice";
import { selectCountQuoteItems } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { ID } from "@/models/id.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

type FormData = {
  modelId: string | number;
  location: string;
};

export const StepOneLocation = ({
  modelId,
  systemName,
  model
}: {
  modelId: ID;
  systemName: string;
  model: WindowModelsEnum;
}) => {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector(selectCurrentWindow);
  const countItemsCount = useAppSelector(selectCountQuoteItems);
  const { handleSubmit, register } = useForm<FormData>();
  const { handleNext } = useContext(StepperContext);

  const onSubmit = (data: FormData) => {
    dispatch(setWindowLocation(data.location));
    dispatch(generateReference(countItemsCount));
    dispatch(setModelWindowId(modelId));
    dispatch(setWindowSystem(systemName));
    dispatch(setModelWidow(model))
    handleNext();
  };

  return (
    <div className="justify-center w-full h-full text-center ">
      <div id="location" className="h-full grid-flow-row grid-cols-1 ">
        <div className="h-20 text-center">
          <Heading as="h2">Ubicación</Heading>
          <p className="text-xl animate-fade-up">
            ¿En qué lugar irá tu ventana?
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center w-full"
        >
          <div className="w-full h-full max-w-lg mx-auto form-control min-h-[300px]">
            <label className="label">
              <span className="text-xl label-text">Ubicación</span>
              <span className="label-text-alt">Selecciona una opción</span>
            </label>
            <select
              className="select select-bordered"
              {...register("location")}
            >
              {locations.map((item) => {
                if (item !== location)
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
              })}
            </select>
          </div>
          <HandleStepper />
        </form>
      </div>
    </div>
  );
};

const locations = ["Alcoba", "Sala", "Cocina", "Patio", "Bano"];
