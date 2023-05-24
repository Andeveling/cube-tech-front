"use client";
import Heading from "@/components/shared/heading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeWindowFromQuote,
  selectQuoteItems,
} from "@/lib/redux/features/quoteDocument/quoteSlice";
import { ChevronLeft, Download, Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";

import { v4 as uuidv4 } from "uuid";

export default function SummaryPage() {
  const windowsQuote = useAppSelector(selectQuoteItems);
  const dispatch = useAppDispatch();

  const handleDeleteWindow = (id: string) => {
    dispatch(removeWindowFromQuote(id));
  };

  return (
    <div className="container mx-auto">
      <div className="grid justify-between grid-cols-3">
        <div>
          <Link role="button" href="/" className="btn btn-link">
            <ChevronLeft size={25} />
            añadir mas ventanas
          </Link>
        </div>
        <Heading>Resumen</Heading>
        <div className="place-self-end">
          <button className="btn">
            <Download size={25} className="mr-2" />
            Imprimir \ Descargar
          </button>
        </div>
      </div>
      <p className="text-center text-gray-500 animate-fade-up md:text-2xl">
        Listado de ventanas:
      </p>
      <div className="divider" />
      <div className="flex justify-center w-full">
        <div className="grid justify-center w-full grid-cols-1">
          {windowsQuote.length >= 1 ? (
            windowsQuote.map((itemQuotation, index) => {
              const modalId = uuidv4();
              return (
                <div key={itemQuotation.id}>
                  <div className="relative mb-4 text-3xl font-thin text-center">
                    Item {index + 1}
                    {/* Modal */}
                    <label
                      htmlFor={modalId}
                      className="absolute top-0 right-0 btn-primary btn btn-circle btn-outline"
                    >
                      <Trash size={25} />
                    </label>
                    <input
                      type="checkbox"
                      id={modalId}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Borrar Ventana</h3>
                        <p className="py-4">
                          ¿La acción no se puede revertir, desea continuar?
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="modal-action">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() =>
                                handleDeleteWindow(itemQuotation.id)
                              }
                            >
                              borrar
                            </button>
                          </div>
                          <div className="modal-action">
                            <label htmlFor={modalId} className="btn btn-error">
                              cancelar
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid justify-center w-full grid-cols-2 space-x-2">
                    <div className="flex justify-center bg-black border shadow-lg place-self-center w-96 h-96"></div>
                    <div className="grid max-w-lg grid-cols-2 mx-auto text-xl">
                      <h3 className="col-span-2 mt-1 text-center">
                        {itemQuotation.item.reference} |{" "}
                        {itemQuotation.item.location}
                      </h3>
                      <div className="flex items-center p-1 border-t border-r">
                        Dimesiones
                      </div>
                      <div className="flex items-center p-1 border-t">
                        {itemQuotation.item.width}mm x{" "}
                        {itemQuotation.item.height}mm
                      </div>
                      <div className="flex items-center p-1 border-t border-r">
                        Area
                      </div>
                      <div className="flex items-center p-1 border-t">
                        {(itemQuotation.item.width / 1000) *
                          (itemQuotation.item.height / 1000)}
                        m²
                      </div>
                      <div className="flex items-center p-1 border-t border-r">
                        Vidrio
                      </div>
                      <div className="flex items-center p-1 border-t">
                        {itemQuotation.item.glassData?.attributes.nameUI}
                      </div>
                      <div className="flex items-center p-1 border-t border-r">
                        Color
                      </div>
                      <div className="flex items-center p-1 border-t">
                        Blanco
                      </div>
                      <div className="flex items-center p-1 border-t border-b border-r">
                        Cantidad
                      </div>
                      <div className="grid items-center grid-cols-3 px-4 border-t border-b">
                        <button
                          className="btn btn-sm"
                          onClick={() =>
                            dispatch(decrementQuantity(itemQuotation.id))
                          }
                        >
                          <Minus size={25} />
                        </button>
                        <div className="flex items-center justify-center">
                          {itemQuotation.item.quantity}
                        </div>
                        <button
                          className="btn btn-outline btn-sm"
                          onClick={() =>
                            dispatch(incrementQuantity(itemQuotation.id))
                          }
                        >
                          <Plus size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 animate-fade-up md:text-xl">
              No hay ventanas en tu documento.{" "}
              <Link
                role="button"
                href="/"
                className="text-gray-500 btn btn-link "
              >
                Añadir ventanas
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
