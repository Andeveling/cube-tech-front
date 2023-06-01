import { ID } from "@/models/id.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import Link from "next/link";

import WindowDraw from "../shared/models-windows-pvc/window-draw";

type CardProps = {
  model: WindowModelsEnum;
  modelId: ID;
  systemId: ID;
};
export const ModelsCard = ({ model, modelId, systemId }: CardProps) => {
  return (
    <li
      className="max-w-sm border w-80 h-80 card animate-fade-up"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      <Link
        href={`/systems/${systemId}/model/${modelId}`}
        className="w-full h-full"
      >
        <WindowDraw model={model} height={0} width={0} />
      </Link>
    </li>
  );
};
