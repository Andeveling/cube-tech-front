import { arqustikConfig } from "@/lib/constants";
import { SystemModelsResponseI } from "models/strapi/Systems.response";
import Link from "next/link";

type Params = { params: { systemId: string } };

const getSystemPVC = async (systemId: string) => {
  const res = await fetch(
    `${arqustikConfig.STRAPI_SERVER}/system-pvcs/${systemId}?populate=window_models`,
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default async function SystemPage({ params: { systemId } }: Params) {
  const system: SystemModelsResponseI = await getSystemPVC(systemId);
  return (
    <div className="">
      <h2>Select a design</h2>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {system.data.attributes.window_models.data.map((item) => (
          <li key={item.id}>
            <Link href={`model/${item.id}`}>
              <p className="p-1 text-white bg-orange-500">
                {item.attributes.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
