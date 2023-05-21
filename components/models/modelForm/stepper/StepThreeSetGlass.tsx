"use client";
import Heading from "@/components/shared/heading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  selectCurrentWindow,
  setWindowGlassId,
} from "@/lib/redux/features/quoteDocument/quoteSlice";
import {
  GlassCategoriesResponseT,
  GlassType,
} from "@/models/strapi/Glasses.response";
import { RadioGroup, Tab } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import {  CheckCircle, Circle } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type FormData = {
  glassIdOption: string;
};
type Props = {
  glassCategories: GlassCategoriesResponseT;
};

export const StepThreeSetGlass = ({ glassCategories }: Props) => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: { glassIdOption: glassCategories.data[0].id.toString() },
  });
  const windowCurrent = useAppSelector(selectCurrentWindow);
  const { handleNext } = useContext(StepperContext);
  const onSubmit = ({ glassIdOption }: FormData) => {
    dispatch(setWindowGlassId(glassIdOption));
    handleNext();
    console.log(windowCurrent);
  };

  return (
    <div>
      <div id="cristal">
        <div className="h-20 text-center">
          <Heading as="h2">Cristal</Heading>
          <p className="text-xl animate-fade-up">¿Qué solución necesitas?</p>
        </div>
        {/* <div>{JSON.stringify(watch("glassId"))}</div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-xl px-2 py-2 mx-auto sm:px-0">
            <Tab.Group>
              <Tab.List className="flex p-1 space-x-1 rounded-full bg-primary-content">
                {glassCategories.data.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full  py-2.5 text-sm font-medium leading-5 text-primary",

                        selected
                          ? "bg-white shadow border-2 border-primary "
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-info",
                      )
                    }
                  >
                    <GlassMiniImage glassType={category.attributes.glassType} />
                    <span className="w-full">{category.attributes.name}</span>
                  </Tab>
                ))}
              </Tab.List>
              <Controller
                control={control}
                name="glassIdOption"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <RadioGroup value={field.value} onChange={field.onChange}>
                      <Tab.Panels className="mt-2">
                        {glassCategories.data.map(({ id, attributes }) => (
                          <Tab.Panel key={id}>
                            <p className="text-center ">Características</p>
                            <ul className="px-2 py-1 mx-4 text-sm text-left list-disc">
                              {attributes.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                            <div className="divider">
                              Selecciona un espesor de vidrio
                            </div>

                            <ul className="space-y-2">
                              {attributes.glasses.data.map((glass) => (
                                <li
                                  key={glass.id}
                                  className="relative border-2 border-primary"
                                >
                                  <RadioGroup.Option
                                    key={glass.id}
                                    value={glass.id}
                                    className={({ active, checked }) =>
                                      `${
                                        active
                                          ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-500"
                                          : ""
                                      }              ${
                                        checked
                                          ? "bg-primary  text-white"
                                          : "bg-white"
                                      }         relative flex cursor-pointer px-5 py-4 shadow-md focus:outline-none`
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <div className="flex items-center justify-between w-full">
                                          <div className="flex items-center">
                                            <div className="text-sm">
                                              <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${
                                                  checked
                                                    ? "text-white"
                                                    : "text-gray-900"
                                                }`}
                                              >
                                                {glass.attributes.nameUI}
                                              </RadioGroup.Label>
                                              <RadioGroup.Description
                                                as="span"
                                                className={`inline ${
                                                  checked
                                                    ? "text-sky-100"
                                                    : "text-gray-500"
                                                }`}
                                              ></RadioGroup.Description>
                                            </div>
                                          </div>
                                          {checked ? (
                                            <div className="text-white shrink-0">
                                              <CheckCircle size={25} />
                                            </div>
                                          ) : (
                                            <Circle size={25} />
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                </li>
                              ))}
                              {errors.glassIdOption && (
                                <p className="text-sm text-error">
                                  *{errors.glassIdOption.message}
                                </p>
                              )}
                            </ul>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </RadioGroup>
                  </>
                )}
              />
            </Tab.Group>
          </div>
          <HandleStepper />
        </form>
      </div>
    </div>
  );
};

const GlassMiniImage = ({ glassType }: { glassType: GlassType }) => {
  return (
    <div className="flex items-center justify-center w-full ">
      <figure className="p-2 bg-white rounded-full">
        <Image
          src={`/assets/images/glasses/${glassType}.png`}
          alt="glass image"
          width={45}
          height={50}
        />
      </figure>
    </div>
  );
};

const validationSchema = yup.object().shape({
  glassIdOption: yup.string().required("Debe seleccionar una opción"),
});
