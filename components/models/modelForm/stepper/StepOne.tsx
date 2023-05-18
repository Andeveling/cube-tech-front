"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowLocation,
} from "@/lib/redux/quoteDocument/quoteSlice";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

type FormData = {
  location: string;
};

export const StepOne = () => {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector(selectCurrentWindow);
  const { handleSubmit, register } = useForm<FormData>();
  const { handleNext } = useContext(StepperContext);
  const onSubmit = (data: FormData) => {
    dispatch(setWindowLocation(data.location));
    handleNext();
  };

  return (
    <div className="justify-center w-full h-full text-center ">
      <div id="location" className="h-full grid-flow-row grid-cols-1 ">
        <div className="h-20 text-center">
          <h2 className="text-2xl font-semibold">Ubicacion</h2>
          <p className="text-xl">En que lugar ira tu ventana?</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center w-full "
        >
          <div className="w-full h-full max-w-sm mx-auto form-control min-h-[300px]">
            <label className="label">
              <span className="text-xl label-text">Ubicacion</span>
              <span className="label-text-alt">Seleciona una opcion</span>
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
            {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
              <span className="label-text-alt">Alt label</span>
            </label> */}
          </div>
          <HandleStepper />
        </form>
      </div>
    </div>
  );
};

const locations = ["Alcoba", "Sala", "Cocina", "Patio", "Bano"];
