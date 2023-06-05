import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { getSystemsPVC } from "services/systems-pvc.service";

export default async function Home() {
  const systems = await getSystemsPVC();

  return (
    <div className="flex flex-col items-center justify-center w-full px-5 mx-auto xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Crea tu cotizacion en minutos</Balancer>
      </h1>
      <p
        className="mt-6 text-center text-gray-500 opacity-0 animate-fade-up md:text-2xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>Elija el producto que desea cotizar.</Balancer>
      </p>

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
        {systems.data.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.attributes.showName}
            description={item.attributes.description}
            imageUrl={item.attributes.imageUrl}
            features={item.attributes.features}
          />
        ))}
      </div>
    </div>
  );
}
