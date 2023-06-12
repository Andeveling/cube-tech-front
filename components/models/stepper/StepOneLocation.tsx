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
import { SystemsAvailableEnum } from "@/models/System-PVC/SystemPVC.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { HandleStepper } from "./HandleStepper";
import { StepperContext } from "./StepperContext";

type FormData = {
  modelId: string | number;
  location: string;
};

type Props = {
  modelId: ID;
  systemName: SystemsAvailableEnum;
  model: WindowModelsEnum;
};

export const StepOneLocation = ({ modelId, systemName, model }: Props) => {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector(selectCurrentWindow);
  const countItemsCount = useAppSelector(selectCountQuoteItems);
  const { handleSubmit, register, getFieldState, watch } = useForm<FormData>({
    defaultValues: { location: locations[0].location },
  });
  const { handleNext } = useContext(StepperContext);
  const [tip, setTip] = useState("");

  const onSubmit = (data: FormData) => {
    dispatch(setWindowLocation(data.location));
    dispatch(generateReference(countItemsCount));
    dispatch(setModelWindowId(modelId));
    dispatch(setWindowSystem(systemName));
    dispatch(setModelWidow(model));
    handleNext();
  };
  console.log(watch("location"));
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
                return (
                  <option key={item.id} value={item.location}>
                    {item.location}
                  </option>
                );
              })}
            </select>

            <p className="mt-6 text-lg text-left">
              <span className="font-bold">Tip: </span>
              {
                locations.find((item) => {
                  return watch("location") === item.location;
                })?.tip
              }
            </p>
          </div>
          <HandleStepper />
        </form>
      </div>
    </div>
  );
};

const locations = [
  {
    id: 1,
    location: "Dormitorio",
    tip: "Para un dormitorio, se recomienda un vidrio con buen aislamiento acústico para reducir el ruido exterior y promover un ambiente tranquilo y relajante.",
  },
  {
    id: 2,
    location: "Sala",
    tip: "En la sala, es aconsejable elegir un vidrio con propiedades de control solar, que ayudará a reducir el calor y los deslumbramientos del sol, brindando mayor confort térmico y protección contra los rayos UV.",
  },
  {
    id: 3,
    location: "Cocina",
    tip: "Para la cocina, se recomienda un vidrio con buena resistencia al calor, como el vidrio templado, que puede soportar cambios bruscos de temperatura y es más seguro en caso de rotura.",
  },
  {
    id: 4,
    location: "Patio",
    tip: "En el patio, es recomendable considerar un vidrio con propiedades de aislamiento térmico para reducir la transferencia de calor desde el exterior, lo que ayudará a mantener una temperatura agradable en el interior.",
  },
  {
    id: 5,
    location: "Baño",
    tip: "Para el baño, se aconseja optar por un vidrio con alto nivel de privacidad, como el vidrio esmerilado o el vidrio laminado con película de privacidad, que permitirá la entrada de luz natural mientras mantiene la intimidad.",
  },
  {
    id: 6,
    location: "Sala de juntas",
    tip: "En una sala de juntas, es recomendable utilizar vidrio laminado acústico, que ofrece un buen aislamiento acústico para mantener la confidencialidad y reducir el ruido proveniente del exterior.",
  },
  {
    id: 7,
    location: "Otro",
    tip: "Para otras ubicaciones no especificadas, es importante considerar las necesidades específicas, como aislamiento térmico, acústico o seguridad, y buscar vidrios que se ajusten a esas necesidades.",
  },
];
