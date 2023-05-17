"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
import Heading from "@/components/shared/heading";

export const CreateWindowForm = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;
  const onSubmit: SubmitHandler<any> = async (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full px-4 pt-16">
          <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div>
                      <h4 className="text-2xl font-semibold">Ubicacion</h4>
                      <p className="text-xl">En que lugar ira tu ventana?</p>
                    </div>
                    <ChevronUpIcon
                      size={25}
                      className={`${
                        open ? "rotate-180 transform" : ""
                      }  text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid justify-center h-full grid-cols-1 place-content-center">
                      <div id="location">
                        <div className="w-full max-w-sm form-control">
                          <label className="label">
                            <span className="text-xl label-text">
                              Ubicacion
                            </span>
                            <span className="label-text-alt">
                              Seleciona una opcion
                            </span>
                          </label>
                          <select className="w-full text-xl select select-bordered">
                            <option selected>Alcoba</option>
                            <option>Sala</option>
                            <option>Cocina</option>
                            <option>Patio</option>
                            <option>Bano</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      size={25}
                      className={`${
                        open ? "rotate-180 transform" : ""
                      }  text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
