"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";
import * as yup from "yup";
import Heading from "@/components/shared/heading";
import { selectCurrentWindow, setWindowDimensions } from "@/lib/redux/features/createWindow/createWindowSlice";

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
  const CreateWindowSchema = yup.object().shape({
    width: yup.number().positive().min(minW).max(maxW).required(),
    height: yup.number().positive().min(minH).max(maxH).required(),
    quantity: yup.number().positive().min(1).max(12).required().typeError('Introduce algun valor numerico'),
  });
  const dispatch = useAppDispatch();
  const { width, height, quantity } = useAppSelector(selectCurrentWindow);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(CreateWindowSchema),
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
              {...register("width")}
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
              {...register("height")}
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
              {...register("quantity")}
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
