import { arqustikConfig } from "@/lib/constants";
import { SystemI } from "@/models/System-PVC/SystemPVC.strapi";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

interface Props {
  id: string | number;
  title: string;
  description: string;
  large?: boolean;
  features: string[];
  imageUrl: string;
}

export default function Card({
  id,
  title,
  description,
  imageUrl,
  features,
}: Props) {
  return (
    <Link
      href={`/systems/${id}`}
      className="ease-in-out transform shadow-xl min-h-[600px] card w-[21rem] sm:w-96 bg-base-100 hover:-translate-y-1 hover:border"
    >
      <figure>
        <Image src={imageUrl} alt={`${title} image`} width={400} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-outline ">Europeas</div>
        </h2>
        <p>{description}</p>
        <div className="justify-center card-actions">
          {features.map((feature) => (
            <div key={feature} className="badge badge-secondary ">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
/* 

  <div className="shadow-xl card w-96 bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <Link href={`/systems/${id}`} className="border-b">
          Ver mas
        </Link>
      </div>
      <figure>
        <Image src={imageUrl} alt={`${title} image`} width={400} height={200} />
      </figure>
    </div>


*/
