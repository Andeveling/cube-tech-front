import Heading from "@/components/shared/heading";
import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import Link from "next/link";
import { getSystemPVC } from "services/systems-pvc.service";

type Params = { params: { systemId: string } };
type CardProps = {
  model: WindowModelsEnum;
  modelId: number;
  systemId: number | string;
};

export default async function SystemPage({ params: { systemId } }: Params) {
  const system = await getSystemPVC(systemId);

  return (
    <div className="container mx-auto">
      <Heading>Modelos</Heading>
      <p
        className="text-center text-gray-500 opacity-0 animate-fade-up md:text-2xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Selecciona un modelo para emepezar.
      </p>

      <ul
        aria-details="Lista de modelos de ventanas"
        className="flex flex-row flex-wrap items-center justify-center w-full gap-4 mt-4"
      >
        {system.data.attributes.window_models.data.map(({ id, attributes }) => (
          <ModelsCard
            key={id}
            model={attributes.draw_ref}
            modelId={id}
            systemId={systemId}
          />
        ))}
      </ul>
    </div>
  );
}

const ModelsCard = ({ model, modelId, systemId }: CardProps) => {
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
