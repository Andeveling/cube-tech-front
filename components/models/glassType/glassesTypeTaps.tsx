"use client";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export interface Ingredient {
  icon: string;
  label: string;
  description: string;
}

export const allIngredients = [
  {
    icon: "|",
    label: "Monolitico",
    description:
      "El vidrio monolítico es una sola lámina de vidrio que se forma mediante el proceso de fabricación de vidrio flotado. El vidrio monolítico se puede potenciar a través de procesos de fabricación adicionales para convertirlo en vidrio insulado, se le pueden aplicar mejoras en el diseño y aumentar su resistencia.",
  },
  {
    icon: "||",
    label: "Laminado",
    description:
      "El vidrio laminado ha transformado la industria ya que es capaz de proporcionar durabilidad, alto desempeño y beneficios multi-funcionales tales como seguridad, control del ruido, desempeño de control solar y reflexión de los rayos ultravioleta;  así como resistencia a huracanes y terremotos al mismo tiempo que preserva la estética del vidrio.",
  },
  {
    icon: "|||",
    label: "Insulado",
    description:
      "El vidrio insulado ahorra energía en cualquier casa o edificio, mejorando el rendimiento térmico de las ventanas. Este producto crea un ambiente interior más cómodo evitando temperaturas extremas y reduce los costos de calefacción y aire acondicionado de manera significativa.",
  },
];

const [tomato, lettuce, cheese] = allIngredients;
export const tabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[],
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}

export const GlassTypes = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="flex h-[360px]  min-w-[480px] flex-col overflow-hidden shadow-md">
      <nav className="h-10 rounded-bl-none rounded-br-none bg-white text-xl">
        <ul className="m-0 grid cursor-pointer grid-cols-3 justify-between gap-2 p-4 font-medium">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={
                item === selectedTab
                  ? "relative flex h-full w-full cursor-pointer  select-none items-center justify-between rounded rounded-bl-none  rounded-br-none"
                  : ""
              }
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-grow select-none items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="my-2 flex justify-between">
              <span>OOO</span>
              <span>OOO</span>
              <span>OOO</span>
              <span>OOO</span>
            </div>
            {selectedTab ? selectedTab.description : "😋"}

            <div className="">
              <h2 className="my-2">Selecciona un Vidrio</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="form-control max-w-[100px]">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio-primary radio"
                      checked
                    />
                    <span className="label-text">8 mm</span>
                  </label>
                </div>
                <div className="form-control max-w-[100px]">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio-primary radio"
                    />
                    <span className="label-text">11 mm</span>
                  </label>
                </div>
                <div className="form-control max-w-[100px]">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-3"
                      className="radio-primary radio"
                    />
                    <span className="label-text">16 mm</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const GlassMonolitic = () => {
  return <></>;
};
