"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowGlassId,
} from "@/lib/redux/quoteDocument/quoteSlice";
import { RadioGroup } from "@headlessui/react";
import { Label } from "@headlessui/react/dist/components/label/label";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

type FormData = {
  glassId: string;
};

export const StepThree = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const windowCurrent = useAppSelector(selectCurrentWindow);
  const { handleNext } = useContext(StepperContext);
  const onSubmit = ({ glassId }: FormData) => {
    dispatch(setWindowGlassId(glassId));
    handleNext();
    console.log(windowCurrent);
  };

  return (
    <div>
      <div id="cristal">
        <div className="h-20 text-center">
          <h2 className="text-2xl font-semibold">Cristal</h2>
          <p className="text-xl">Que solucion necesitas?</p>
        </div>

        {/* <RadioGroup
          value={selected}
          onChange={setSelected}
          className="w-full"
          {...register("glassId")}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-500"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-gray-500 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="flex flex-row text-sm">
                          <figure className="col-span-1">
                            <Image
                              src={
                                "/assets/images/glasses/monolithic-glass-icon.png"
                              }
                              width={75}
                              height={90}
                              alt="nombre de vidrio"
                              className="w-24 h-24 rounded-full"
                            />
                          </figure>
                          <div className="flex flex-col items-start col-span-1 text-left">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-sky-100" : "text-gray-500"
                              }`}
                            >
                              <span>
                                {plan.ram}/{plan.cpus}
                              </span>{" "}
                              <span aria-hidden="true">&middot;</span>{" "}
                              <span>{plan.disk}</span>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae quibusdam quasi animi.
                              </p>
                            </RadioGroup.Description>
                          </div>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              type="radio"
              {...register("glassId", { required: true })}
              value="1"
              className="radio radio-primary"
            />
            Simple
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              {...register("glassId", { required: true })}
              value="2"
              className="radio radio-primary"
            />
            Acustico
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              {...register("glassId", { required: true })}
              value="3"
              className="radio radio-primary"
            />
            Termo-Acustico
          </label>
        </div>
        {errors.glassId && <span>Please select an option</span>}

        <HandleStepper />
      </form>
    </div>
  );
};

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cristals = [
  {
    name: "Simple | Monolitico",
    caliber: "4 mm",
    description:
      "El vidrio monolítico es una sola lámina de vidrio que se forma mediante el proceso de fabricación de vidrio flotado.",
    features: ["Economico", "Liviano"],
  },
  {
    name: "Simple Templado | Monolitico",
    caliber: "5 mm",
    description:
      "El vidrio monolítico templado es una sola lámina de vidrio reforzado mediante el proceso templado de fabricación de vidrio flotado.",
    features: ["Economico", "Liviano", "Seguridad media"],
  },
  {
    name: "Acustico | Laminado",
    caliber: "11mm",
    description:
      "El vidrio laminado ha transformado la industria ya que es capaz de proporcionar durabilidad, alto desempeño y beneficios multi-funcionales tales como seguridad, control del ruido;  así como resistencia a huracanes y terremotos al mismo tiempo que preserva la estética del vidrio.",
    features: ["Seguridad", "Acustico"],
  },
  {
    name: "Termo-Acustico | Insulado",
    caliber: "11mm",
    description:
      "El vidrio insulado de Tecnoglass ahorra energía en cualquier casa o edificio, mejorando el rendimiento térmico de las ventanas. Este producto crea un ambiente interior más cómodo evitando temperaturas extremas y reduce los costos de calefacción y aire acondicionado de manera significativa.",
    features: ["Seguridad", "Acustico"],
  },
];

const plans = [
  {
    name: "Simple",
    ram: "4 mm",
    cpus: "Economico",
    disk: "Libiano",
  },
  {
    name: "Control Acustico",
    ram: "8mm",
    cpus: "Buen desempeno acustico",
    disk: "512 GB SSD disk",
  },
  {
    name: "Control Termo-Acustico",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];
