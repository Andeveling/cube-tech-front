import { ModelsCard } from "@/components/models/ModelsCard";
import { getSystemWithModelsPVC } from "services/systems-pvc.service";

type Params = { params: { systemId: string } };

export default async function SystemPage({ params: { systemId } }: Params) {
  const system = await getSystemWithModelsPVC(systemId);
  const thereAreWindows = system.data.attributes.window_models.data.some(
    (item) => !item.attributes.isDoor,
  );
  const thereAreDoors = system.data.attributes.window_models.data.some(
    (item) => item.attributes.isDoor,
  );
  return (
    <div className="container mx-auto space-y-8">
      {thereAreWindows && (
        <div>
          <div>
            <div className="flex items-center justify-center w-ful">
              <WindowSVGIcon />

              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display text-5xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm">
                Ventanas
              </h2>
            </div>
            <p
              className="text-center text-gray-500 animate-fade-up md:text-2xl"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Selecciona un modelo de ventana para emepezar.
            </p>
          </div>

          <ul
            aria-details="Lista de modelos de ventanas"
            className="grid items-center justify-center w-full grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {system.data.attributes.window_models.data
              .filter(({ attributes }) => !attributes.isDoor)
              .map(({ id, attributes }) => (
                <ModelsCard
                  key={id}
                  modelId={id}
                  model={attributes.draw_ref}
                  name={attributes.name}
                  systemId={systemId}
                  minH={attributes.minH}
                  maxH={attributes.maxH}
                  minW={attributes.minW}
                  maxW={attributes.maxW}
                />
              ))}
          </ul>

          <div className="my-4 divider" />
        </div>
      )}
      {thereAreDoors && (
        <div>
          <div>
            <div className="flex items-center justify-center w-ful">
              <DoorSVGIcon />

              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display text-5xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm">
                Puertas Ventanas
              </h2>
            </div>
            <p
              className="text-center text-gray-500 animate-fade-up md:text-2xl"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Selecciona un modelo de puerta ventana para emepezar.
            </p>
          </div>

          <ul
            aria-details="Lista de modelos de ventanas"
            className="grid items-center justify-center w-full grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {system.data.attributes.window_models.data
              .filter(({ attributes }) => attributes.isDoor)
              .map(({ id, attributes }) => (
                <ModelsCard
                  key={id}
                  modelId={id}
                  model={attributes.draw_ref}
                  name={attributes.name}
                  systemId={systemId}
                  minH={attributes.minH}
                  maxH={attributes.maxH}
                  minW={attributes.minW}
                  maxW={attributes.maxW}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const DoorSVGIcon = () => {
  return (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-transparent stroke-gray-800 "
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <rect className="cls-1" x="6.27" y="1.5" width="11.45" height="17.18" />
        <polygon
          className="cls-1"
          points="6.27 18.68 17.73 18.68 20.59 22.5 3.41 22.5 6.27 18.68"
        />
        <polyline className="cls-1" points="6.27 18.68 13.91 15.82 13.91 1.5" />
        <line className="cls-1" x1="11.05" y1="8.18" x2="11.05" y2="10.09" />
      </g>
    </svg>
  );
};

const WindowSVGIcon = () => {
  return (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-gray-800 stroke-gray-800 "
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}",
            }}
          />
        </defs>
        <rect className="cls-1" x="1.5" y="18.68" width={21} height="3.82" />
        <rect className="cls-1" x="2.45" y="1.5" width="19.09" height="17.18" />
        <rect
          className="cls-1"
          x="6.27"
          y="5.32"
          width="11.45"
          height="13.36"
        />
        <line className="cls-1" x1="6.27" y1={12} x2="17.73" y2={12} />
        <line className="cls-1" x1={12} y1="5.32" x2={12} y2="18.68" />
      </g>
    </svg>
  );
};
