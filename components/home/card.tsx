import { arqustikConfig } from "@/lib/constants";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

type Props = {
  id:string | number
  title: string;
  description: string;
  large?: boolean;
};

export default function Card({ id,title, description, large }: Props) {
  return (
    <div
      className={`relative p-4 col-span-1 h-64 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="mx-auto text-center ">
        <h2 className="text-xl font-bold text-transparent bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="-mt-2 leading-normal prose-sm text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
        <Link href={`/systems/${id}`} className='border-b'>Ver mas</Link>
      </div>
    </div>
  );
}
