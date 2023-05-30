"use client";
import Heading from "@/components/shared/heading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowDimensions
} from "@/lib/redux/features/createWindow/createWindowSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

type FormData = {
  width: number;
  height: number;
  quantity: number;
};

type DimensionsData = {
  minH: number;
  maxH: number;
  minW: number;
  maxW: number;
};

export const StepTwoDimensions = ({
  minH,
  minW,
  maxH,
  maxW,
}: DimensionsData) => {
  const CreateWindowSchemaZ = z.object({
    width: z.number().positive().min(minW).max(maxW),
    height: z.number().positive().min(minH).max(maxH),
    quantity: z.number().positive().min(1).max(12),
  });

  const dispatch = useAppDispatch();
  const { width, height, quantity } = useAppSelector(selectCurrentWindow);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(CreateWindowSchemaZ),
    defaultValues: { width, height, quantity },
  });
  const { handleNext } = useContext(StepperContext);
  const onSubmit = ({ width, height, quantity }: FormData) => {
    dispatch(setWindowDimensions({ width, height }));
    // dispatch(setWindowQuantity(quantity));
    handleNext();
  };
  return (
    <div className="w-full h-full">
      <div className="text-center">
        <Heading as="h2">Dimensiones</Heading>
        <p className="text-xl animate-fade-up">¿Qué medidas tiene el vano?</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-lg mx-auto">
          <div id="sizes" className="w-full my-1 form-control">
            <label className="label">
              <span className="text-lg label-text">Ancho (mm)</span>
              <span className="label-text-alt">Milimetros</span>
            </label>
            <input
              type="number"
              placeholder="Ancho mm"
              className="w-full input-bordered input"
              {...register("width", { valueAsNumber: true })}
            />
            <label className="label">
              <span className="label-text-alt">
                Min : {minW}mm | Max : {maxW}mm
              </span>
            </label>
            {errors.width && (
              <span className="label-text-alt text-error">
                * {errors.width.message}
              </span>
            )}
          </div>

          {/*Alto  */}
          <div className="w-full my-1 form-control ">
            <label className="label">
              <span className="text-lg label-text">Alto (mm)</span>
              <span className="label-text-alt">Milimetros</span>
            </label>
            <input
              type="number"
              placeholder="Alto mm"
              className="w-full input-bordered input"
              {...register("height", { valueAsNumber: true })}
            />
            <label className="label">
              <span className="label-text-alt">
                Min : {minH}mm | Max : {maxH}mm
              </span>
            </label>
            {errors.height && (
              <span className="label-text-alt text-error">
                * {errors.height.message}
              </span>
            )}
          </div>
          {/*Alto  */}
          <div className="w-full my-1 form-control ">
            <label className="label">
              <span className="text-lg label-text">Cantidad</span>
              <span className="label-text-alt">Unidades</span>
            </label>
            <input
              type="number"
              placeholder="1"
              className="w-full input-bordered input"
              {...register("quantity", { valueAsNumber: true })}
            />
            <label className="label">
              <span className="label-text-alt">Min : 1 | Max : 12</span>
            </label>
            {errors.quantity && (
              <span className="label-text-alt text-error">
                * {errors.quantity.message}
              </span>
            )}
          </div>
        </div>
        <HandleStepper />
      </form>
    </div>
  );
};
