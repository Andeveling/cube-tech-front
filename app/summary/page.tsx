"use client";
import { ConfirmDeleteModal } from "@/components/shared/confirm-modal";
import Heading from "@/components/shared/heading";
import WindowDraw from "@/components/shared/models-windows-pvc/window-draw";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-store-hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeWindowFromQuote,
  selectQuoteItems,
} from "@/lib/redux/features/quoteDocument/quoteSlice";
import { ID } from "@/models/id.interface";
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
      <div className="grid justify-between grid-cols-1 md:grid-cols-3">
        <div>
          <Link role="button" href="/" className="btn btn-link">
            <ChevronLeft size={25} />
            añadir mas ventanas
          </Link>
        </div>
        <Heading>Resumen</Heading>
        <div className="my-3 place-self-center md:my-0 md:place-self-end">
          {/* <InterestedModal/> */}
          {windowsQuote.length > 0 && (
            <Link
              href={"/summary/contact"}
              role="button"
              className="btn btn-primary"
            >
              <Download size={25} className="mr-2" />
              Imprimir \ Descargar
            </Link>
          )}
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
                    <ConfirmDeleteModal
                      modalId={modalId}
                      icon={<Trash size={25} />}
                      handleDelete={() => handleDeleteWindow(itemQuotation.id)}
                      title={"Borrar Ventana"}
                      message={
                        "¿La acción no se puede revertir, desea continuar?"
                      }
                    />
                    <div className="grid justify-center w-full grid-cols-1 space-x-2 xl:grid-cols-2">
                      <div className="flex justify-center px-2 place-self-center w-96 h-96 sm:px-0">
                        <WindowDraw
                          height={0}
                          width={0}
                          model={itemQuotation.item.model}
                        />
                      </div>
                      <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-0 mt-4 text-xl sm:mt-0 ">
                          <h3 className="col-span-2 my-0 mt-1 text-center md:my-4">
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
                              className="btn btn-sm btn-primary"
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
                    </div>
                    <div className="divider" />
                  </div>
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
