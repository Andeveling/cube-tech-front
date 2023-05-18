"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowDimensions,
  setWindowLocation,
  setWindowQuantity,
} from "@/lib/redux/quoteDocument/quoteSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";
import * as yup from "yup";

type FormData = {
  width: number;
  height: number;
  quantity: number;
};

export const StepTwo = () => {
  const dispatch = useAppDispatch();
  const { width, height, quantity } = useAppSelector(selectCurrentWindow);
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(CreateWindowSchema),
    defaultValues: { width, height, quantity },
  });
  const { handleNext } = useContext(StepperContext);
  const onSubmit = ({ width, height, quantity }: FormData) => {
    dispatch(setWindowDimensions({ width, height }));
    dispatch(setWindowQuantity(quantity));
    handleNext();
  };
  return (
    <div className="w-full h-full">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Medidas</h2>
        <p className="text-xl">Que medidas tiene el vano?</p>
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
              <span className="label-text-alt">Min : 750mm | Max : 1000mm</span>
              {/*       <span className="label-text-alt">Bottom Right label</span> */}
            </label>
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
              <span className="label-text-alt">Min : 750mm | Max : 1000mm</span>
            </label>
            {/*     <label className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </label> */}
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
          </div>
        </div>
        <HandleStepper />
      </form>
    </div>
  );
};

const CreateWindowSchema = yup.object().shape({
  width: yup.number().positive().min(300).max(2000).required(),
  height: yup.number().positive().min(300).max(2000).required(),
  quantity: yup.number().positive().min(1).max(12).required(),
});
