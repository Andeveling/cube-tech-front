import { ModelsCard } from "@/components/models/ModelsCard";
import Heading from "@/components/shared/heading";
import { getSystemWithModelsPVC } from "services/systems-pvc.service";

type Params = { params: { systemId: string } };

export default async function SystemPage({ params: { systemId } }: Params) {
  const system = await getSystemWithModelsPVC(systemId);

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
            modelId={id}
            model={attributes.draw_ref}
            systemId={systemId}
          />
        ))}
      </ul>
    </div>
  );
}


