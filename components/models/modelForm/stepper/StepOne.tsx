"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowLocation,
} from "@/lib/redux/quoteDocument/quoteSlice";
import { useForm } from "react-hook-form";

type FormData = {
  location: string;
};

export const StepOne = () => {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector(selectCurrentWindow);
  const { handleSubmit, register, watch } = useForm<FormData>();

  const onSubmit = (data: FormData) =>
    dispatch(setWindowLocation(data.location));
  return (
    <div className="grid justify-center h-full grid-cols-1 place-content-center">
      <div id="location">
        <h2 className="text-2xl font-semibold">Ubicacion</h2>
        <p className="text-xl">En que lugar ira tu ventana?</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-sm form-control">
            <label className="label">
              <span className="text-xl label-text">Ubicacion</span>
              <span className="label-text-alt">Seleciona una opcion</span>
            </label>
            <select
              className="w-full text-xl select select-bordered"
              {...register("location")}
            >
              {locations.map((item) => {
                if(item !== location) return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-info">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

const locations = ["Alcoba", "Sala", "Cocina", "Patio", "Bano"];
