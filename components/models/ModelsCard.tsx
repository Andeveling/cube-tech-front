import { ID } from "@/models/id.interface";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { SystemAttributesT } from "@/models/System-PVC/SystemPVC.strapi";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { Plus } from "lucide-react";
import Link from "next/link";

import WindowDraw from "../shared/models-windows-pvc/window-draw";

type CardProps = {
  model: WindowModelsEnum;
  modelId: ID;
  systemId: ID;
  name: string;
  minH: number;
  maxH: number;
  minW: number;
  maxW: number;
};

export const ModelsCard = ({
  model,
  modelId,
  systemId,
  name,
  minH,
  minW,
  maxW,
  maxH,
}: CardProps) => {
  return (
    <li
      className="flex justify-center max-w-sm p-2 border card animate-fade-up"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      <div className="w-full my-1 text-xl text-center">
        <h2>{name}</h2>
      </div>
      <div className="flex justify-center w-full">
        <figure className=" w-80 h-80">
          <WindowDraw model={model} height={0} width={0} />
        </figure>
      </div>

      <div className="grid items-center justify-center grid-cols-2 gap-3 mt-2 text-center">
        <div className="flex flex-col text-xs">
          <span>
            Altos {minH}mm - {maxH}mm
          </span>
          <span>
            Anchos {minW}mm - {maxW}mm
          </span>
        </div>

        <div className="ml-2">
          <Link
            href={`/systems/${systemId}/model/${modelId}`}
            className="btn btn-primary"
            role="button"
          >
            <Plus />
            Añadir
          </Link>
        </div>
      </div>
    </li>
  );
};
