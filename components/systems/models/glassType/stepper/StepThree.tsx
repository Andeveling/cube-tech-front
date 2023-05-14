import { RadioGroup, Tab } from "@headlessui/react";
import Image from "next/image";
import { SVGProps, useState } from "react";

export const StepThree = () => {
  const [selected, setSelected] = useState(plans[0]);
  return (
    <div>
      <div id="cristal" className="p-10">
        <span>Selecciona un tipo de vidrio</span>

        <RadioGroup value={selected} onChange={setSelected} className="w-full">
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-500"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-gray-500 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="flex flex-row text-sm">
                          <figure className="col-span-1">
                            <Image
                              src={
                                "/assets/images/glasses/monolithic-glass-icon.png"
                              }
                              width={75}
                              height={90}
                              alt="nombre de vidrio"
                              className="w-24 h-24 rounded-full"
                            />
                          </figure>
                          <div className="flex flex-col items-start col-span-1 text-left">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-sky-100" : "text-gray-500"
                              }`}
                            >
                              <span>
                                {plan.ram}/{plan.cpus}
                              </span>{" "}
                              <span aria-hidden="true">&middot;</span>{" "}
                              <span>{plan.disk}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cristals = [{ name: "Simple", caliber: "4 mm" }];

const plans = [
  {
    name: "Simple",
    ram: "4 mm",
    cpus: "Economico",
    disk: "Libiano",
  },
  {
    name: "Control Acustico",
    ram: "8mm",
    cpus: "Buen desempeno acustico",
    disk: "512 GB SSD disk",
  },
  {
    name: "Control Termo-Acustico",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];
