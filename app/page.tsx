import Card from "@/components/home/card";
import { arqustikConfig } from "@/lib/constants";
import { SystemsResponseT } from "models/strapi/Systems.response";
import Balancer from "react-wrap-balancer";

const getSystemsPVC = async () => {
  const res = await fetch(`${arqustikConfig.STRAPI_SERVER}/system-pvcs`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function Home() {
  const systems: SystemsResponseT = await getSystemsPVC();

  return (
    <div className="w-full max-w-xl px-5 xl:px-0">
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
            key={item.id}
            id={item.id}
            title={item.attributes.showName}
            description="Ventanas Europeas"
          />
        ))}
      </div>
    </div>
  );
}

/* 

       <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center py-2 mx-auto mb-5 space-x-2 overflow-hidden transition-colors bg-blue-100 rounded-full max-w-fit animate-fade-up px-7 hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Precedent
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Building blocks for your Next project</Balancer>
        </h1>
        <p
          className="mt-6 text-center text-gray-500 opacity-0 animate-fade-up md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            An opinionated collection of components, hooks, and utilities for
            your Next.js project.
          </Balancer>
        </p>
        <div
          className="flex items-center justify-center mx-auto mt-6 space-x-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex items-center justify-center px-5 py-2 space-x-2 text-sm text-white transition-colors bg-black border border-black rounded-full group max-w-fit hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a>
          <a
            className="flex items-center justify-center px-5 py-2 space-x-2 text-sm text-gray-600 transition-colors bg-white border border-gray-300 rounded-full shadow-md max-w-fit hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>

*/
